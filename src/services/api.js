import axios from 'axios';

const API = axios.create({
    baseURL: 'https://esavers-backend.vercel.app/api', // Ensure /api is included
});

// Example API calls (adjust based on your backend routes)
export const loginUser = (data) => API.post('/auth/login', data); // If you have authentication
export const fetchHealthData = () => API.get('/analysis/health-data'); // If health data is under /analysis
