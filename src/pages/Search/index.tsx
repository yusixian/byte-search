/*
 * @Author: cos
 * @Date: 2022-05-29 00:48:09
 * @LastEditTime: 2022-06-13 02:01:33
 * @LastEditors: cos
 * @Description: 搜索详情页
 * @FilePath: \byte-search\src\pages\Search\index.tsx
 */
import SearchPanel from 'components/SearchPanel';
import React from 'react';
import './index.scss';
const Search = React.memo(() => {
  return (
    <div className="search-container">
      <SearchPanel />
    </div>
  );
});

export default Search;
