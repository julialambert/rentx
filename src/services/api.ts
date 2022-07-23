import axios from 'axios';

const api = axios.create({
  baseURL: 'http://{YOUR_IP}:3333',
});

export default api;