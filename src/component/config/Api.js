import axios from 'axios';
//import { baseRqstApi } from './Environtment';
let isProd = process.env.NODE_ENV === 'development'
let baseRqstApi = isProd ? process.env.REACT_APP_PRO_BASE_REQ : process.env.REACT_APP_PRO_BASE_REQ

const api = (method, path, subPath, params, data) => {
    const options = {
        method: method,
        url: baseRqstApi + (isProd ? '/' + path + '/' : '/' + path + '/') + subPath,
        params: params,
        data: data,
        xsrfCookieName: 'XSRF-TOKEN',
        xsrfHeaderName: 'X-XSRF-TOKEN',
    };
    return (
        axios(options)
    )
}
export default api

