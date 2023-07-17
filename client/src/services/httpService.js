import axios from 'axios';

axios.defaults.withCredentials = true;

// const axiosInstance = axios.create({
//   baseURL: process.env.REACT_APP_BaseURL,
//   withCredentials: true,
//   timeout: 7000,
// })

const http = {
    get: axios.get,
    post: axios.post,
    put: axios.put,
    patch: axios.patch,
    delete: axios.delete
};

export default http;

