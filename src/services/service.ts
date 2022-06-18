/*
 * @Author: cos
 * @Date: 2022-06-13 00:31:23
 * @LastEditTime: 2022-06-19 01:05:47
 * @LastEditors: cos
 * @Description: axios封装
 * @FilePath: \byte-search\src\services\service.ts
 */
import axios, { AxiosRequestConfig } from 'axios';

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
    'Content-Type': 'application/json',
  },
});
// 泛型接口,T的类型支持
export interface IResponseData<T = any> {
  code: number;
  message: string;
  data: T;
}
// 通用的请求函数
export async function request<T>(config: AxiosRequestConfig) {
  return Service.request<IResponseData<T>>(config).then((res) => res.data.data);
}
