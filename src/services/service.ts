/*
 * @Author: cos
 * @Date: 2022-06-13 00:31:23
 * @LastEditTime: 2022-06-13 01:24:37
 * @LastEditors: cos
 * @Description: axios封装
 * @FilePath: \byte-search\src\services\service.ts
 */
import axios from 'axios';
import qs from 'qs';

const BaseURL = '/api/v1'; //默认路径，这里也可以使用env来判断环境
//使用create方法创建axios实例
export const Service = axios.create({
  proxy: {
    host: '/api/v1',
    port: 8080,
  },
  timeout: 7000, // 请求超时时间
  baseURL: BaseURL,
  method: 'post',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
  },
});
// 请求拦截器
Service.interceptors.request.use((config) => {
  config.data = qs.stringify(config.data); // 转为formdata数据格式
  return config;
});
