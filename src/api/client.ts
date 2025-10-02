import axios from "axios";

// 백엔드 서버의 주소를 설정합니다.
// 로컬 개발 환경에서는 package.json에 "proxy": "http://localhost:8080"를 추가하는 방법도 유용합니다.
const apiClient = axios.create({
    baseURL: "/api", // 프록시 설정을 사용하거나 실제 백엔드 주소를 입력
    headers: {
        "Content-Type": "application/json",
    },
});

export default apiClient;
