/*
 * @Author: cos
 * @Date: 2022-05-29 00:48:09
 * @LastEditTime: 2022-06-13 01:34:50
 * @LastEditors: cos
 * @Description: 搜索建议
 * @FilePath: \byte-search\src\components\SearchPanel\SearchSuggestion\index.tsx
 */
import { Empty } from 'antd';
import './index.scss';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'redux/store';
import styled from 'styled-components';
import { setSearchText } from 'redux/searchSlice';
const Suggestions = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.875rem;
  gap: 0.625rem;
`;
const SuggestionsHeader = styled.section`
  font-size: large;
`;
const SearchSuggestion = React.memo(() => {
  const dispatch = useDispatch();

  const suggestionList = useSelector<RootState, string[]>((state) => state.search.suggestionList);

  const searchSuggestionClick = (text: string) => {
    console.log('要搜索:', text);
    dispatch(setSearchText(text));
  };
  return (
    <Suggestions>
      <SuggestionsHeader>您是否想搜索以下内容?</SuggestionsHeader>
      {suggestionList.length ? (
        <ul className="suggestion-list">
          {suggestionList.map((item, index) => (
            <li key={`${index}${item}`} onClick={() => searchSuggestionClick(item)}>
              {item}
            </li>
          ))}
        </ul>
      ) : (
        <Empty
          style={{ textAlign: 'center' }}
          image="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg"
          description={<span>暂无搜索建议</span>}
        />
      )}
    </Suggestions>
  );
});

export default SearchSuggestion;
