import axios from 'axios';

const axiosCMS = axios.create({
  baseURL: process.env.CMS_URL,
  timeout: 5000,
});

export default axiosCMS;
