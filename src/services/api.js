import axios from 'axios';

const API = axios.create({
    baseURL: 'http://localhost:5000', // Replace with your backend URL
});

export const loginUser = (data) => API.post('/login', data);
export const fetchHealthData = () => API.get('/health-data');
