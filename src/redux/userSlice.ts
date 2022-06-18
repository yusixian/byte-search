import { createSlice, SliceCaseReducers } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

export type UserState = {
  userCache: User | null;
};

// 使用Redux Toolkit简化逻辑，详见 https://redux-toolkit.js.org/tutorials/quick-start
export const userSlice = createSlice<UserState, SliceCaseReducers<UserState>>({
  name: 'user',
  initialState: {
    userCache: null,
  },
  reducers: {
    clearUserCache: (state) => {
      state.userCache = null;
    },
    setUserCache: (state, action) => {
      if (state.userCache === null) {
        state.userCache = action.payload;
      } else {
        state.userCache = { ...state.userCache, ...action.payload };
      }
    },
    updateUserCacheToken: (state, action) => {
      if (state.userCache) {
        state.userCache.token = action.payload;
      }
    },
  },
});

export const { clearUserCache, setUserCache, updateUserCacheToken } = userSlice.actions;
export const userReducer = persistReducer(
  {
    key: 'userCache',
    storage: storage,
  },
  userSlice.reducer
);
