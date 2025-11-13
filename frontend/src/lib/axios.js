import axios from 'axios'

const axiosInstance=axios.create({
    baseURL:import.meta.env.VITE_BASE_URL,
    withCredentials:true, //  by adding  this  field browser will send  the cookies to server on every request 
});

export default axiosInstance;