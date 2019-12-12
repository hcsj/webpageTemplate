import axios from 'axios'
import globalConfig from '../../config/global'
// console.log(globalConfig)
const service = axios.create({
    baseURL: globalConfig.url.apiUrl,
    timeout: 5000
})
export default service

