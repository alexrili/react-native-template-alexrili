import axios from 'axios'
import store from "store"

// create an axios instance
const service = axios.create({
  baseURL: "https://reqres.in", // api base_url
  timeout: 5000 // request timeout
})

// request interceptor
service.interceptors.request.use(
  config => {
    const { auth } = store.getState();
    if (auth) {
      config.headers['X-Token'] = auth.token
    }
    return config
  },
  error => {
    // Do something with request error
    Promise.reject(error)
  }
)

// response interceptor
service.interceptors.response.use(
  response => response,
  error => {
    return Promise.reject(error)
  }
)

export default service