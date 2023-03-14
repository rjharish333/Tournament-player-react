import axios from 'axios';


const axiosService = axios.create({
    baseURL: process.env.REACT_APP_API_ENDPOINT,
});

axiosService.interceptors.request.use((config) => {
    // const user = JSON.parse(localStorage.getItem('user'));

    // const token = user.data.token;
    config.params = config.params || {};
    config.headers["Accept"] = "application/json";
    config.headers["Content-type"] = "application/json";
    // config.headers["Authorization"] = "bearer " + token;

    return config;
});

export default axiosService;