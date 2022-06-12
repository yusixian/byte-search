/*
 * @Author: cos
 * @Date: 2022-05-10 21:48:51
 * @LastEditTime: 2022-06-13 00:01:45
 * @LastEditors: cos
 * @Description: 搜索框
 * @FilePath: \byte-search\src\components\WebSiteHeader\index.tsx
 */
import { Empty } from 'antd';
import Toolbar from 'components/Toolbar';
import React from 'react';
import './index.scss';

const WebSiteHeader = React.memo(() => {
  return (
    <div className="header-container">
      <Toolbar />
    </div>
  );
});
export default WebSiteHeader;
