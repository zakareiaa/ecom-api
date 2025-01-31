import axios from 'axios'

// Set base URL for API requests
axios.defaults.baseURL = import.meta.env.VITE_API_URL || '/api'

// Add token to requests if it exists
axios.interceptors.request.use(config => {
  const token = localStorage.getItem('token')
  
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  
  return config
})

export default axios
