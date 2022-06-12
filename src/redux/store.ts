/*
 * @Author: cos
 * @Date: 2022-05-29 01:19:28
 * @LastEditTime: 2022-06-12 22:14:15
 * @LastEditors: cos
 * @Description: Redux store 定义
 * @FilePath: \byte-search\src\redux\store.ts
 */
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import persistStore from 'redux-persist/es/persistStore';
import { searchReducer } from './searchSlice';
import { userReducer } from './userSlice';

// 使用Redux Toolkit简化逻辑，详见 https://redux-toolkit.js.org/tutorials/quick-start
export const store = configureStore({
  reducer: {
    user: userReducer,
    search: searchReducer,
  },

  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});

// 使用redux-persist自动持久化到localStorage
export const persistor = persistStore(store);

// 类型导出
export type RootStore = typeof store;
export type RootState = ReturnType<typeof store.getState>;
