import axios from "axios";

export const axiosConfig = axios.create({
                                baseURL: "http://localhost:4000",
                                headers : {"Content-Type": "application/json"}
                                });

axiosConfig.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem("authToken");
        if (token) {
        config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
    );
                                  