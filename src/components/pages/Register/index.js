import React, { useEffect, useState } from "react";
import * as Yup from "yup";
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Formik, Form, Field } from "formik";
import "./index.css";
import TextField from "../../TextField";
import { Alert } from "../../../services/NotiflixService";
import UserService from './../../../services/UserService';

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const Register = () => {

  const [countries, setCountries] = useState([])
  const [regions, setRegions] = useState([])
  const [btnText, setBtnText] = useState("Register")

  useEffect(()=>{
    try{

      const getCountries = async() => {
        let _resp = await UserService.getCountries();
        setCountries(_resp.data)
      }

      const getRegions = async() => {
        let _resp = await UserService.getRegions();
        setRegions(_resp.data)
      }
      
      getCountries();
      getRegions();
    }
    catch(err)
    {
      Alert.error(err.message)
    }
  }, [])

  const validationSchema = Yup.object().shape({
    region: Yup.string().required("Region is required"),
    first_name: Yup.string()
      .max(15, "Must be 15 characters or less")
      .required("Required"),
    last_name: Yup.string()
      .max(20, "Must be 20 characters or less")
      .required("Required"),
    street: Yup.string()
      .max(30, "Must be 30 characters or less")
      .required("street is required"),
    postal_number: Yup.string()
      .max(30, "Must be 30 characters or less")
      .required("postal is required"),
    city: Yup.string()
      .max(30, "Must be 30 characters or less")
      .required("city is required"),
    email: Yup.string().email("Email is invalid").required("Email is required"),
    emailConfirm: Yup.string().email("Email is invalid").required("confrim email is required")
    .oneOf([Yup.ref('email'), null], 'Email must match'),
    password: Yup.string().required('Password is required'),
    passwordConfirmation: Yup.string().required("confrim password is required")
       .oneOf([Yup.ref('password'), null], 'Passwords must match'),
    phone: Yup.number().required("Phone is required"),
    // comment: Yup.string()
    //   .max(40, "Must be 40 characters or less")
    //   .required("comment is required"),
    day: Yup.string().required("Day is required"),
    month: Yup.string().required("Month is required"),
    year: Yup.string().required("Year is required"),
    country: Yup.number().required("Country is required"),
    golf_club_name: Yup.string().when("member_of_golf_club", {
      is: (value) => value==="1",
      then: Yup.string()
        .required("Golf club name is Required")
    }),
    pga_country: Yup.string().when("pga_status", {
      is: (value) => value==="1",
      then: Yup.string()
        .required("PGA country is Required")
    }),
  });

  const months = [
    // "",
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  let minOffset = 0,
    maxOffset = 100;
  let thisYear = new Date().getFullYear();
  let allYears = [];
  for (let x = minOffset; x <= maxOffset; x++) {
    allYears.push(thisYear - x);
  }

  const yearList = allYears.map((x) => {
    return <option key={x}>{x}</option>;
  });

  const THIS_YEAR = +new Date().getFullYear();
  const THIS_MONTH = +new Date().getMonth() + 1;

  const getMonthDays = (month = THIS_MONTH, year = THIS_YEAR) => {
    const months30 = [4, 6, 9, 11];
    const leapYear = year % 4 === 0;
    return month === 2
      ? leapYear
        ? 29
        : 28
      : months30.includes(month)
      ? 30
      : 31;
  };
  const monthList = [];
  const List = Array.from(
    new Array(getMonthDays()),
    (val, index) => getMonthDays() - index
  );
  monthList.push(List);

  const initialValues = {
    region: 1,
    region_country: 1,
    pga_country: 1,
    first_name: "",
    last_name: "",
    gender: "male",
    street: "",
    postal_number: "",
    city: "",
    email: "",
    password: "",
    phone: "",
    day: "1",
    month: "January",
    year: allYears[0],
    comment: "",
    country: 1,
    member_category:'TP',
    pga_status: "0",
    tour_membership: "0",
    member_of_golf_club: "0",
    golf_club_name: ""
  };

  return (
    <>
      <div className="register-block">
        <div className="text-section">
          <h1 className="title-section">Form</h1>
        </div>
      </div>
      <div className="pt-4">
        <div className="mt-5 col-md-12">
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={async(values) => {
              // console.log("values", values)
              try{
                setBtnText("Processing...")

                let _resp = await UserService.addMember(values);
                // console.log("_resp", _resp)
                if(_resp.status === 'failure' || _resp.status === 400)
                {
                  Alert.error(_resp.message)
                  return;
                }
                Alert.success(_resp.message)
                
                window.location.replace(process.env.REACT_APP_LOGIN_URL);
                // setBtnText("Register")
              }
              catch(err)
              {
                // setBtnText("Register")
                Alert.error(err.message)
              }
              finally{
                setBtnText("Register")
              }
            }}
          >
            {(formik) => (
              <div>
                <Container className="p-5">
                  <Form>
                    <Row className="mb-3">
                      <Col>
                        <label className="mb-2">Choose region</label>
                        <Field as="select"
                          aria-label="Select Region"
                          className="form-control"
                          name="region"
                          onChange={(e) => {
                            let value = e.target.value
                            formik.setFieldValue('region', value)
                            if(value === "1")
                            {
                              let _country = 209
                              formik.setFieldValue('region_country', _country)
                            }
                            else if(value === '2')
                            {
                              let _country = 14
                              formik.setFieldValue('region_country', _country)
                            }
                            else if(value === '3')
                            {
                              let _country = 218
                              formik.setFieldValue('region_country', _country)
                            }
                            else if(value === '4')
                            {
                              let _country = 224
                              formik.setFieldValue('region_country', _country)
                            }
                            else if(value === '5')
                            {
                              let _country = 239
                              formik.setFieldValue('region_country', _country)
                            }
                            else if(value === '6')
                            {
                              let _country = 253
                              formik.setFieldValue('region_country', _country)
                            }
                            else if(value === '7')
                            {
                              let _country = 11
                              formik.setFieldValue('region_country', _country)
                            }
                            else if(value === '8')
                            {
                              let _country = 83
                              formik.setFieldValue('region_country', _country)
                            }
                            else if(value === '9')
                            {
                              let _country = 112
                              formik.setFieldValue('region_country', _country)
                            }
                            
                          }}
                        >
                           {/* <option value=""> Please Select </option> */}
                           {regions.length > 0 && regions.map((value, index) => {
                            return <option key={index} value={value.id}> {value.region_name.toUpperCase()} </option>
                          })}
                        </Field>
                      </Col>

                      <Col>
                        <label className="mb-2">Region Country</label>
                        <Field as="select"
                          aria-label="Select Region Country"
                          className="form-control"
                          name="region_country"
                        >
                          {/* <option value=""> Please Select </option> */}
                          {countries.length > 0 && countries.map((value, index) => {
                            return <option key={index} value={value.id}> {value.name} </option>
                          })}
                        </Field>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <TextField
                          name="first_name"
                          type="text"
                          label="First Name"
                        />
                      </Col>
                      <Col>
                        <TextField
                          name="last_name"
                          type="text"
                          label="Sur Name"
                        />
                      </Col>
                    </Row>
                    <Row>
                      <label>Birthday</label>
                      <Col>
                        <Field as="select"
                          aria-label="Select Day"
                          className="form-control"
                          name="day"
                        >
                          {monthList
                            .flat()
                            .sort((a, b) => {
                              return a - b;
                            })
                            .map((day) => {
                              return <option value={day}>{day}</option>;
                            })}
                        </Field>
                        <label>Day</label>
                      </Col>
                      <Col>
                        <Field as="select"
                          aria-label="Select Month"
                          className="form-control"
                          id="month"
                          name="month"
                        >
                          {months.map((month) => {
                            return <option value={month}>{month}</option>;
                          })}
                        </Field>
                        <label>Month</label>
                      </Col>
                      <Col>
                        <Field as="select"
                          aria-label="Select Year"
                          className="form-control"
                          id="year"
                          name="year"
                        >
                          {yearList}
                        </Field>
                        <label>Year</label>
                      </Col>
                    </Row>
                    <Row className="mt-3">
                      <Col>
                        <label>Gender</label>
                        <div role="group" aria-labelledby="my-radio-group">
                          <label>
                            <Field type="radio" name="gender" value="male" checked/>
                            &nbsp; Male
                          </label>
                          <label>&nbsp;&nbsp;
                            <Field type="radio" name="gender" value="female" />
                            &nbsp; Female
                          </label>
                        </div>
                      </Col>
                      <Col>
                        <TextField name="street" type="text" label="Street" />
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <TextField
                          name="postal_number"
                          type="text"
                          label="Postal Number"
                        />
                      </Col>
                      <Col>
                        <TextField name="city" type="text" label="City" />
                      </Col>
                      <Col>
                          <label className="mb-2"> Country</label>
                          <Field as="select"
                            aria-label="Select Country"
                            className="form-control"
                            name="country"
                          >
                            {/* <option value=""> Please Select </option> */}
                            {countries.length > 0 && countries.map((value, index) => {
                              return <option key={index} value={value.id}> {value.name} </option>
                            })}
                          </Field>
                        </Col>
                    </Row>
                    <Row>
                      <Col>
                        <TextField name="email" type="email" label="Email" />
                      </Col>
                      <Col>
                        <TextField name="emailConfirm" type="email" label="Confirm Email" />
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                      <label>Phone</label>
                      <PhoneInput
                        country={'us'}
                        value={formik.values.phone}
                        onChange={phone => formik.setFieldValue('phone', phone)}
                        inputStyle={{width: '100%'}}
                      />
                      
                      </Col>
                      <Col>
                        <TextField name="password" type="password" label="Password" />
                      </Col>
                    </Row>
                    <Row>
                    <Col>
                        <TextField
                          name="passwordConfirmation"
                          type="password"
                          label="Confirm Password"
                        />
                      </Col>

                      <Col>
                          <label className="mb-2"> Member Category</label>
                          <Field as="select"
                            aria-label="Select Member Category"
                            className="form-control"
                            name="member_category"
                          >
                            <option value="TP"> Tournament Player (TP) </option>
                            <option value="STP"> Senior Tournament Player (STP) </option>
                            <option value="CP"> Club Professional (CP) </option>
                            <option value="CD"> Club Director (CD) </option>
                            <option value="AP/LE"> Associated person or legal entity (AP/LE) </option>
                          </Field>
                        </Col>

                    </Row>
                    <Row classNmae="mt-3">
                      <Col>
                        <label>Member of golf club</label>
                        <div role="group" aria-labelledby="my-radio-group">
                          <label>
                            <Field type="radio" name="member_of_golf_club" value="1" />
                            &nbsp; Yes
                          </label>
                          <label>&nbsp;&nbsp;
                            <Field type="radio" name="member_of_golf_club" value="0" />
                            &nbsp; No
                          </label>
                        </div>
                      </Col>
                      { formik.values.member_of_golf_club === "1" &&
                      <Col>
                        <TextField
                          name="golf_club_name"
                          type="text"
                          label="Golf Club Name"
                        />
                      </Col>
                      }
                      
                    </Row>

                    <Row classNmae="mt-3">
                      <Col>
                        <label>PGA Status</label>
                        <div role="group" aria-labelledby="my-radio-group">
                          <label>
                            <Field type="radio" name="pga_status" value="1" />
                            &nbsp; Yes
                          </label>
                          <label>&nbsp;&nbsp;
                            <Field type="radio" name="pga_status" value="0" />
                            &nbsp; No
                          </label>
                        </div>
                      </Col>

                      { formik.values.pga_status === "1" &&
                      <Col>
                        <label className="mb-2">PGA Country</label>
                        <Field as="select"
                          aria-label="Select PGA Country"
                          className="form-control"
                          name="pga_country"
                        >
                          {/* <option value=""> Please Select </option> */}
                          {countries.length > 0 && countries.map((value, index) => {
                            return <option key={index} value={value.id}> {value.name} </option>
                          })}
                        </Field>
                      </Col>
                      }
                      <Col>
                        <label>Tour Membership</label>
                        <div role="group" aria-labelledby="my-radio-group">
                          <label>
                            <Field type="radio" name="tour_membership" value="1" />
                            &nbsp; Yes
                          </label>
                          <label>&nbsp;&nbsp;
                            <Field type="radio" name="tour_membership" value="0" />
                            &nbsp; No
                          </label>
                        </div>
                      </Col>
                    </Row>
                    <Row className="mt-3">
                      <Col>
                        <label>State Tour / Other Comment</label>
                        <Field as="textarea" name="comment" className="form-control" />
                      </Col>
                    </Row>

                    <Row>
                      <Col>
                        <button
                          className="btn btn-primary form-control mt-5"
                          type="submit"
                        >
                          {btnText}
                        </button>
                      </Col>
                    </Row>
                  </Form>
                </Container>
              </div>
            )}
          </Formik>
        </div>
      </div>
    </>
  );
};

export default Register;
