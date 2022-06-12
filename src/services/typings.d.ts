/*
 * @Author: cos
 * @Date: 2022-05-04 17:21:08
 * @LastEditTime: 2022-06-13 01:43:08
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
  type LoginResult = {
    status?: statusType;
    type?: loginType;
    currentAuthority?: userType;
    token?: string;
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
  type LoginParams = {
    username?: string;
    password?: string;
    autoLogin?: boolean;
    type?: string;
  };
  type StoreInfoParams = {
    name?: string; // 仓库名称
    personInCharge: number; // 仓库负责人id
    storageLocation: string; // 仓库地址
    placeOfOrigin: string; // 产地
    storeType: number; // 仓型
    harvestTime: string; // 收获年限
    storeCapacity: string; // 仓容
    storageTime: string; // 入仓时间
    varieties: number; // 品种
    level: string; // 等级
    storageProperties: string; // 存储性质
    impurity: string; // 杂质
    storageNumber: string; // 存储数量
    lenth: string; // 长度
    width: string; // 宽度
    height: string; // 高度
  };
  type ErrorResponse = {
    /** 业务约定的错误码 */
    errorCode: string;
    /** 业务上的错误信息 */
    errorMessage?: string;
    /** 业务上的请求是否成功 */
    success?: boolean;
  };
  type StoreInfoSubmitResult = { status: statusType; Debug?: string[] };
  type NoticeIconList = {
    data?: NoticeIconItem[];
    /** 列表的内容总数 */
    total?: number;
    success?: boolean;
  };

  type NoticeIconItemType = 'notification' | 'message' | 'event';

  type NoticeIconItem = {
    id?: string;
    extra?: string;
    key?: string;
    read?: boolean;
    avatar?: string;
    title?: string;
    status?: string;
    datetime?: string;
    description?: string;
    type?: NoticeIconItemType;
  };
}
