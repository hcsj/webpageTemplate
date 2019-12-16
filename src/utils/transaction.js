//交易登记业务单独独立出来的token
import axios from 'axios'
import globalConfig from '../../config/global'
// console.log(globalConfig)
const service = axios.create({
    baseURL: globalConfig.url.apiUrl,
    headers:{
    'Content-Type':'application/json;charset=utf-8',
    'channel-code':'WEBSITE',
    'client-type':'PCH5',
    'version':"0.0.1"
    },
    timeout: 5000
})
export default service

