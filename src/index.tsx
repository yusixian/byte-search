/*
 * @Author: cos
 * @Date: 2022-05-10 21:16:10
 * @LastEditTime: 2022-06-13 02:06:39
 * @LastEditors: cos
 * @Description:
 * @FilePath: \byte-search\src\index.tsx
 */
import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './global.scss';
import 'antd/dist/antd.min.css';
import { FallbackLoading } from 'components/FallbackLoading';
import { BrowserRouter, useRoutes } from 'react-router-dom';
import { routeConfig } from './router';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from './redux/store';
const Index = () => {
  return <Suspense fallback={<FallbackLoading />}>{useRoutes(routeConfig)}</Suspense>;
};

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <Index />
        </PersistGate>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
