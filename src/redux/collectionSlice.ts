/*
 * @Author: cos
 * @Date: 2022-06-12 22:08:57
 * @LastEditTime: 2022-06-19 02:16:54
 * @LastEditors: cos
 * @Description:
 * @FilePath: \byte-search\src\redux\collectionSlice.ts
 */
import { createSlice, SliceCaseReducers } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
export type CollectionRecord = {
  id: number; // 该收藏夹id
  name: string; // 该收藏夹名称
  records: number[] | null; // 该收藏夹收藏的搜索记录id大全
};
export type CollectionState = {
  collectionList: CollectionRecord[] | null;
};

// 使用Redux Toolkit简化逻辑，详见 https://redux-toolkit.js.org/tutorials/quick-start
export const collectionSlice = createSlice<CollectionState, SliceCaseReducers<CollectionState>>({
  name: 'collection',
  initialState: {
    collectionList: null,
  },
  reducers: {
    setCollectionList: (state, action) => {
      state.collectionList = { ...action.payload };
    },
  },
});

export const { setCollectionList } = collectionSlice.actions;
export const searchReducer = persistReducer(
  {
    key: 'collection',
    storage: storage,
  },
  collectionSlice.reducer
);
