import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "@tailwindcss/vite";
import { tanstackRouter } from "@tanstack/router-plugin/vite";

// https://vite.dev/config/
export default defineConfig({
    plugins: [react(), tailwindcss(), tanstackRouter()],
    server: {
        proxy: {
            // '/api'로 시작하는 모든 요청을 백엔드 서버로 전달하라는 의미
            "/api": {
                // 실제 백엔드 서버의 주소
                target: "http://localhost:8080",

                // cross-origin 요청을 위해 필수로 추가
                changeOrigin: true,
            },
        },
    },
});
