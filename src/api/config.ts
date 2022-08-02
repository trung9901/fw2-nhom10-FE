import axios from "axios";

const axiosClient = axios.create({
    baseURL: "http://localhost:8000/api",
    headers: {
        "Content-Type": "application/json"
    }
})

export const axiosServer = axios.create({
    baseURL: "http://localhost:8000/api",
    headers: {
        "Content-Type": "application/json"
    }
})
axiosServer.interceptors.response.use(
    function (response) {
        return response.data;
    },
    function (error) {
        return Promise.reject(error);
    },
)
axiosClient.interceptors.request.use(
    function (config) {
        const token = localStorage.getItem("authtoken")
        if (token) {
            config.headers = {
                Authorzation: `Bearer ${token}`
            }
        }

        return config
    },
    function (error) {
        return Promise.reject(error)
    }
)
axiosClient.interceptors.response.use(
    function (response) {
        return response.data
    },
    function (error) {
        return Promise.reject(error)
    }
)

export default axiosClient