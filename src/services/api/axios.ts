import axios from 'axios'

// Add a request interceptor
axios.interceptors.request.use(
  config => {
    const token = window.localStorage.getItem('token');
    if (token) {
            //@ts-ignore
            config.headers['Authorization'] = 'Bearer ' + token
    }
    return config
  },
  error => {
    Promise.reject(error)
  }
)

export default axios;