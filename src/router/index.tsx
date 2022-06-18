/*
 * @Author: cos
 * @Date: 2022-05-29 01:13:44
 * @LastEditTime: 2022-06-19 02:32:16
 * @LastEditors: cos
 * @Description: 路由配置
 * @FilePath: \byte-search\src\router\index.tsx
 */
// React.lazy只支持默认导出
import React from 'react';
import { Navigate, Outlet, RouteObject } from 'react-router';
import LoginRedirect from 'components/LoginRedirect';
import NotFound from 'components/NotFound';
import Register from 'pages/Register';

const App = React.lazy(() => import('pages/App'));
const Home = React.lazy(() => import('pages/Home'));
const Login = React.lazy(() => import('pages/Login'));
const SearchDetail = React.lazy(() => import('pages/Search'));
const UserHome = React.lazy(() => import('pages/UserHome'));

export const routeConfig: RouteObject[] = [
  {
    path: '/',
    children: [
      {
        path: 'home',
        element: <App />,
        children: [
          {
            path: '',
            element: <Home />,
          },
        ],
      },
      {
        path: 'login',
        element: <Login />,
      },
      {
        path: 'register',
        element: <Register />,
      },
      {
        path: 'admin/',
        element: <App />,
        children: [
          {
            path: 'search/',
            element: <Outlet />,
            children: [
              {
                path: 'related/:text',
                element: <SearchDetail />,
              },
              {
                path: 'keyword/:text',
                element: <SearchDetail />,
              },
              {
                path: '',
                element: <Home />,
              },
              // 其他搜索方式
            ],
          },
          {
            path: 'userhome',
            element: <UserHome />,
          },
          {
            path: '',
            element: <Home />,
          },
          {
            path: '*',
            element: <NotFound />,
          },
        ],
      },
      {
        path: '',
        element: <LoginRedirect />,
      },
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
];
