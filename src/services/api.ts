import axios from 'axios';

const api = axios.create({
  baseURL: '{YOUR_IP}:3333',
});

export default api;