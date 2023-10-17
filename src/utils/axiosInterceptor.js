import axios from 'axios';

// Create an Axios instance with a base URL if needed
const instance = axios.create({
  baseURL: 'https://api.example.com', // Replace with your API's base URL
});

// Request interceptor
instance.interceptors.request.use(
  (config) => {
    // You can modify the request configuration here
    // For example, add an authentication token to the headers
    // config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor
instance.interceptors.response.use(
  (response) => {
    // You can modify the response data here
    return response;
  },
  (error) => {
    // You can handle errors here
    // For example, show a notification, log the error, or redirect the user
    return Promise.reject(error);
  }
);

export default instance;
