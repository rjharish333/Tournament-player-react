import responseService from './ResponseService';
import axiosService from './AxiosService';

const addMember = async (_data) => {
    try {
        const config = {
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json',
            },
        };
        const response = await axiosService.post(
            `${process.env.REACT_APP_API_ENDPOINT}/member/add`,
            _data,
            config
        );
        return response.data;

    } catch (error) {
       if(error.response.status === 500 ){
        return responseService.buildFailure(error.response.data.message)
       } 

       return responseService.buildFailure(error.message)
    }
}

const getCountries = async () => {
    try {
        const config = {
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json',
            },
        };
        const response = await axiosService.get(
            `${process.env.REACT_APP_API_ENDPOINT}/countries`,
            config
        );
        return response.data;

    } catch (error) {
       if(error.response.status === 500 ){
        return responseService.buildFailure(error.response.data.message)
       } 

       return responseService.buildFailure(error.message)
    }
}

const getRegions = async () => {
    try {
        const config = {
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json',
            },
        };
        const response = await axiosService.get(
            `${process.env.REACT_APP_API_ENDPOINT}/regions`,
            config
        );
        return response.data;

    } catch (error) {
       if(error.response.status === 500 ){
        return responseService.buildFailure(error.response.data.message)
       } 

       return responseService.buildFailure(error.message)
    }
}

const UserService = {
    addMember,
    getCountries,
    getRegions
};

export default UserService;