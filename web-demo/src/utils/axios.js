// 引入这个插件，一些拦截器的使用
// 后端请求方法
import { baseUrl } from './env'

import axios from 'axios'

const service = axios.create({
    baseURL: baseUrl,
    timeout: 5000
});

//添加请求拦截器
service.interceptors.request.use(
    // 在发送请求之前做了什么
    config => {
        return config;
    },
    // 对请求错误做些什么
    error => {
        console.log(error);
        return Promise.reject();
    }
)

// 添加响应拦截器
service.interceptors.response.use(
    // 对响应数据做些什么
    response => {
        if (response.status === 200) {
            return response.data;
        } else {
            Promise.reject();
        }
    },
    // 对响应错误做些什么
    error => {
        console.log(error);
        return Promise.reject();
    }
)

export default service;