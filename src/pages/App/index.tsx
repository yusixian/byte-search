/*
 * @Author: cos
 * @Date: 2022-05-10 21:16:10
 * @LastEditTime: 2022-06-13 02:04:29
 * @LastEditors: cos
 * @Description:
 * @FilePath: \byte-search\src\pages\App\index.tsx
 */
import React, { Suspense } from 'react';
import './index.scss';
import { Menu, ConfigProvider } from 'antd';
import { MenuItemType, MenuMode } from 'rc-menu/lib/interface';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import zhCN from 'antd/lib/locale/zh_CN';
import { FallbackLoading } from 'components/FallbackLoading';

const menuItems: MenuItemType[] = [
  {
    key: '/home',
    label: '首页',
  },
  {
    key: '/admin/userhome',
    label: '个人信息',
  },
];
const App: React.FC = React.memo(() => {
  const location = useLocation();
  const navigate = useNavigate();

  const menu = (mode?: MenuMode) => (
    <Menu
      className="nav-menu"
      theme="dark"
      mode={mode}
      items={menuItems}
      selectedKeys={[location.pathname]}
      onSelect={({ key }) => navigate(key)}
    />
  );

  return (
    <div className="App">
      <ConfigProvider locale={zhCN}>
        <Suspense fallback={<FallbackLoading />}>
          {/* 路由 */}
          <Outlet />
        </Suspense>
      </ConfigProvider>
    </div>
  );
});
export default App;
