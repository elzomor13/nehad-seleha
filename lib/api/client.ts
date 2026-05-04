import axios from 'axios';

const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL ?? '',
  headers: { 'Content-Type': 'application/json' },
  timeout: 10_000,
});

apiClient.interceptors.response.use(
  (res) => res,
  (err) => {
    const message = err.response?.data?.message ?? err.message;
    return Promise.reject(new Error(message));
  },
);

export default apiClient;
