/*
 * @Author: cos
 * @Date: 2022-05-29 01:24:24
 * @LastEditTime: 2022-05-29 01:24:28
 * @LastEditors: cos
 * @Description: 服务端返回JSON格式
 * @FilePath: \byte-search\src\@types\global.d.ts
 */
/**
 *
 */
type ServerResJSON<T = Object> = {
  status: Number; // 状态码
  msg: string; // 提示信息
  data: T; // 自定义携带数据（可选），默认为Object类型
};
