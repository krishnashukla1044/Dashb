import axios from 'axios';

const BASE_URL = 'http://localhost:3000/api'; // Ensure this is correct

const api = axios.create({
  baseURL: BASE_URL,
  withCredentials: true, // Allows cookies to be sent with requests
});

// Intercept response and handle token refresh
api.interceptors.response.use(
  response => response,
  async error => {
    const originalRequest = error.config;
    if (error.response && error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      try {
        // Refresh token logic
        const { data } = await api.post('/refresh-token');
        localStorage.setItem('authToken', data.token);
        api.defaults.headers['Authorization'] = `Bearer ${data.token}`;
        originalRequest.headers['Authorization'] = `Bearer ${data.token}`;
        return api(originalRequest);
      } catch (refreshError) {
        localStorage.removeItem('authToken');
        window.location.href = '/login';
        return Promise.reject(refreshError);
      }
    }
    return Promise.reject(error);
  }
);

// Set Authorization header for all requests
api.interceptors.request.use(config => {
  const token = localStorage.getItem('authToken');
  if (token) {
    config.headers['Authorization'] = `Bearer ${token}`;
  }
  return config;
}, error => {
  return Promise.reject(error);
});

// User-related APIs
export const register = (registerData) => api.post('/register', registerData);
export const login = (loginData) => api.post('/login', loginData);


export const getUserDetails = async () => {
  try {
    const response = await api.get('/me'); // This should use the configured `api` instance
    return response.data;
  } catch (error) {
    console.error('Failed to fetch user details:', error);
    throw error;
  }
};


export const updateUser = (data) => api.put('/profile', data);
export const logout = async () => {
  await api.post('/logout');
  localStorage.removeItem('authToken');
  window.location.href = '/login';
};

// Job-related APIs
export const createJobPosting = (data) => api.post('/jobs', data);
export const getJobPostings = () => api.get('/jobs');
export const updateJobPosting = (id, data) => api.put(`/jobs/${id}`, data);
export const deleteJobPosting = (id) => api.delete(`/jobs/${id}`);
