import axios from 'axios';

const api = axios.create({
    baaseURL: "http://localhost:3000/data.json",
})

export default api;