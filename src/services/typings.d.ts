/*
 * @Author: cos
 * @Date: 2022-05-04 17:21:08
 * @LastEditTime: 2022-06-19 02:23:14
 * @LastEditors: cos
 * @Description:
 * @FilePath: \byte-search\src\services\typings.d.ts
 */
// @ts-ignore
/* eslint-disable */
declare namespace API {
  type codeType = number;
  type messageType = string;
  type userType = 'admin' | 'user' | 'guest';
  type CurrentUser = {
    userid?: string;
    name?: string;
    avatar?: string;
    sex?: '男' | '女';
    phone?: string;
    authority?: 'admin' | 'user' | 'guest';
  };
  type SearchParams = {
    QueryText: string; // 要查询的文本
    FilterText?: string; // 要过滤的文本
    page: number; // 当前页
    limit: number; // 总页码
    order: number; // 排序方式 0
  };
  type SearchRecord = {
    id: number;
    text: string;
    url: string;
  };
  type SearchResult = {
    contents: SearchRecord[];
    limit: number;
    page: number;
    pagecount: number;
    time: number;
  };
  type SuggestionsResult = {
    relatedtexts: String[];
  };
  type LoginParams = {
    username: string;
    password: string;
  };
  type LoginResult = {
    code: 401 | 200;
    expire: string;
    token: string;
  };
  type RegisterResult = {
    code: 0 | 10002;
    message: string;
    data: null;
  };
  type CollectionResult = {
    colltid: number[];
    name: string[];
  };
}
