import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: 'https://api.example.com'
})

export default ({ Vue }) => {
  // for use inside Vue files through this.$axios
  Vue.prototype.$axios = axiosInstance
}

// Here we define a named export
// that we can later use inside .js files:
export { axiosInstance }
