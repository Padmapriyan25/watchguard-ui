import apiClient from './axiosClient';

// Add a request interceptor
apiClient.interceptors.request.use(
  (config) => {
    // You can attach tokens here
    // const token = localStorage.getItem('token');
    // if (token) config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Add a response interceptor
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    // Handle global errors (e.g., 401 unauthorized => logout)
    return Promise.reject(error);
  }
);

export default apiClient;
