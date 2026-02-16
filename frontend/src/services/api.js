import axios from "axios"

const api = axios.create({
    baseURL: "https://chooseus.onrender.com/api/love",
    headers: {
        "Content-Type":"application/json",
    },
    timeout: 15000,
});

export default api;