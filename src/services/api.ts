/*
 * @Author: cos
 * @Date: 2022-06-13 00:44:47
 * @LastEditTime: 2022-06-19 02:23:34
 * @LastEditors: cos
 * @Description:
 * @FilePath: \byte-search\src\services\api.ts
 */
import qs from 'qs';
import { request, Service } from './service';

// POST /search/query 搜索服务 form-data形式
export async function queryByText(params: API.SearchParams) {
  return request<API.SearchResult>({
    url: '/search/query',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    data: qs.stringify(params),
  });
}
// GET /search/query 关联词联想
export async function getSuggestionsByText(text: string) {
  return request<API.SuggestionsResult>({
    url: '/search/relatedsearch',
    method: 'get',
    params: {
      text,
    },
  });
}
// POST /user/login 登录
export async function login(body: API.LoginParams) {
  return Service.request<API.LoginResult>({
    url: '/user/login',
    data: body,
  }).then((res) => res.data);
}
// POST /user/register 注册
export async function register(body: API.LoginParams) {
  return Service.request<API.RegisterResult>({
    url: '/user/register',
    data: body,
  }).then((res) => res.data);
}
// POST /collection/ 获取收藏夹列表
export async function getCollections() {
  return request<API.CollectionResult>({
    url: '/collection/',
    method: 'get',
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  });
}
