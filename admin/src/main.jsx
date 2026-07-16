import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@material-tailwind/react";
import { MaterialTailwindControllerProvider } from "@/context";
import App from "./App";
import "./tailwind.css";
import axios from "axios";

// Properly bound fetch mock for static demo
const originalFetch = window.fetch.bind(window);
window.fetch = async (...args) => {
    const url = typeof args[0] === 'string' ? args[0] : args[0]?.url;
    if (url && (url.includes('/api') || url.includes('4.242.20.80'))) {
        return new Response(JSON.stringify([]), {
            status: 200,
            headers: { 'Content-type': 'application/json' }
        });
    }
    return originalFetch(...args);
};

// Safe Axios mock via interceptor
axios.interceptors.request.use((config) => {
    if (config.url && (config.url.includes('/api') || config.url.includes('4.242.20.80'))) {
        const controller = new AbortController();
        config.signal = controller.signal;
        controller.abort("MOCKED_FOR_STATIC_DEMO");
    }
    return config;
});

axios.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.message === "MOCKED_FOR_STATIC_DEMO" || error.code === "ERR_CANCELED") {
            return Promise.resolve({ data: [] });
        }
        return Promise.reject(error);
    }
);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <BrowserRouter>
            <ThemeProvider>
                <MaterialTailwindControllerProvider>
                    <App />
                </MaterialTailwindControllerProvider>
            </ThemeProvider>
        </BrowserRouter>
    </React.StrictMode>,
);
