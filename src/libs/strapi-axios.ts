import axios from 'axios';

import { env } from '@/env.mjs';

const axiosCMS = axios.create({
  baseURL: `${env.NEXT_PUBLIC_CMS_URL}/api`,
  headers: {
    Authorization: `Bearer ${env.NEXT_PUBLIC_CMS_TOKEN}`,
  },
  withCredentials: true,
  timeout: 5000,
});

export default axiosCMS;
