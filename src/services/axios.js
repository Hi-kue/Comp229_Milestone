import axios from "axios";

const baseURL = process.env.NODE_ENV === 'production'
   ? process.env.REACT_APP_API_URL
   : 'http://localhost:3000';

const axiosInstance = axios.create({
   baseURL: baseURL,
});

export default axiosInstance;
