import axios from "axios";

// 백엔드 서버의 주소
const API_URL = import.meta.env.VITE_BACKEND_API_URL;

const apiClient = axios.create({
    baseURL: API_URL,
    headers: {
        "Content-Type": "application/json",
    },
});

export default apiClient;
