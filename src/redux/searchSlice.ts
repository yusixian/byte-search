/*
 * @Author: cos
 * @Date: 2022-06-12 22:08:57
 * @LastEditTime: 2022-06-13 01:43:41
 * @LastEditors: cos
 * @Description:
 * @FilePath: \byte-search\src\redux\searchSlice.ts
 */
import { createSlice, SliceCaseReducers } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
export type SearchState = {
  searchText: string;
  isSearching: boolean;
  suggestionList: string[];
  searchResult: API.SearchResult | null;
};

// 使用Redux Toolkit简化逻辑，详见 https://redux-toolkit.js.org/tutorials/quick-start
export const searchSlice = createSlice<SearchState, SliceCaseReducers<SearchState>>({
  name: 'search',
  initialState: {
    searchText: '',
    isSearching: false,
    suggestionList: [],
    searchResult: null,
  },
  reducers: {
    setSearchText: (state, action) => {
      state.searchText = action.payload;
      console.log('setSearchText:', state.searchText);
    },
    setIsSearching: (state, action) => {
      state.isSearching = action.payload;
    },
    setSuggestionList: (state, action) => {
      state.suggestionList = action.payload;
    },
    setSearchResult: (state, action) => {
      state.searchResult = { ...action.payload };
    },
  },
});

export const { setSearchText, setIsSearching, setSuggestionList, setSearchResult } = searchSlice.actions;
export const searchReducer = persistReducer(
  {
    key: 'search',
    storage: storage,
  },
  searchSlice.reducer
);
