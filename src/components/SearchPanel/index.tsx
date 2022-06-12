/*
 * @Author: cos
 * @Date: 2022-05-29 00:48:09
 * @LastEditTime: 2022-06-13 01:53:02
 * @LastEditors: cos
 * @Description: 搜索详情页
 * @FilePath: \byte-search\src\components\SearchPanel\index.tsx
 */
import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'redux/store';
import SearchInput from './SearchInput';
import SearchResult from './SearchResult';
import SearchSuggestion from './SearchSuggestion';

const SearchPanel = React.memo(() => {
  const isSearching = useSelector<RootState, boolean>((state) => state.search.isSearching);
  return (
    <>
      <SearchInput />
      {isSearching && <SearchSuggestion />}
      <SearchResult />
    </>
  );
});

export default SearchPanel;
