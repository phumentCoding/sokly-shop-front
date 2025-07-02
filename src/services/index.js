// src/services/api.js or anywhere you like

import axios from 'axios';

const api = axios.create({
  baseURL: 'https://your-api-domain.com/api',
  withCredentials: false, 
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
