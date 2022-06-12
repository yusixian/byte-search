/*
 * @Author: cos
 * @Date: 2022-05-10 21:16:10
 * @LastEditTime: 2022-06-13 02:27:05
 * @LastEditors: cos
 * @Description: 首页
 * @FilePath: \byte-search\src\pages\Home\index.tsx
 */
import WebSiteHeader from 'components/WebSiteHeader';
import Search from 'pages/Search';
import React from 'react';
import './index.scss';
const Home = React.memo(() => {
  return (
    <div className="home-wrapper">
      {/* <WebSiteHeader /> */}
      <Search />
    </div>
  );
});
export default Home;
