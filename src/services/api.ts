/*
 * @Author: cos
 * @Date: 2022-06-13 00:44:47
 * @LastEditTime: 2022-06-13 01:31:27
 * @LastEditors: cos
 * @Description:
 * @FilePath: \byte-search\src\services\api.ts
 */
import { Service } from './service';

// POST 搜索服务
export function queryByText(params: API.SearchParams) {
  return Service({
    url: '/search/query',
    data: params,
  });
}
// GET 搜索服务
export function getSuggestionsByText(text: string) {
  return Service({
    url: '/search/relatedsearch',
    method: 'get',
    params: {
      text,
    },
  });
}
