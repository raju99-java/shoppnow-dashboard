import axios from 'axios'
const api = axios.create({
    baseURL: 'https://shoppnow-api.vercel.app/api'
})
export default api