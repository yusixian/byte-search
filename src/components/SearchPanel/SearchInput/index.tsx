/*
 * @Author: cos
 * @Date: 2022-05-10 21:48:51
 * @LastEditTime: 2022-06-19 00:31:24
 * @LastEditors: cos
 * @Description: 搜索框
 * @FilePath: \byte-search\src\components\SearchPanel\SearchInput\index.tsx
 */
import React, { useRef, useState } from 'react';
import './index.scss';
import Icon from '../../Icon';
import { debounce } from 'utils/global';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'redux/store';
import { setIsSearching, setSearchResult, setSearchText, setSuggestionList } from 'redux/searchSlice';
import useDidUpdateEffect from 'redux/hooks/useDidUpdateEffect';
import useDebounce from 'redux/hooks/useDebounce';
import { getSuggestionsByText, queryByText } from 'services/api';

const SearchInput = React.memo(() => {
  const dispatch = useDispatch();

  const isSearching = useSelector<RootState, boolean>((state) => state.search.isSearching);

  const inputValue = useSelector<RootState, string>((state) => state.search.searchText);

  const [currentInputValue, setCurrentInputValue] = useState('');

  const inputRef = useRef<HTMLInputElement | null>(null);

  const fetchSearchResult = async (text: string) => {
    let searchParams: API.SearchParams = {
      QueryText: text, // 要查询的文本
      page: 1, // 当前页
      limit: 10, // 总页码
      order: 0, // 排序方式 0
    };
    const searchData = await queryByText(searchParams);
    if (searchData) {
      dispatch(setIsSearching(false));
      dispatch(setSearchResult(searchData));
    }
  };
  const fetchSuggestions = async (text: string) => {
    const { relatedtexts } = await getSuggestionsByText(inputValue);
    console.log('suggestions:', relatedtexts);
    dispatch(setSuggestionList(relatedtexts));
  };

  useDebounce(() => dispatch(setSearchText(currentInputValue)), 2000, [currentInputValue]);

  useDidUpdateEffect(() => {
    if (!inputValue) {
      inputRef.current && inputRef.current.focus();
      setCurrentInputValue(inputValue);
    }
    fetchSuggestions(inputValue);
    fetchSearchResult(inputValue);
  }, [inputValue]);
  const onClear = () => {
    console.log('clear!!');
    dispatch(setSearchText(''));
  };
  return (
    <div className="search-input">
      <input
        type="text"
        placeholder="您可在此处进行搜索"
        value={currentInputValue}
        ref={inputRef}
        onInput={(e) => {
          const inp = e.target as HTMLInputElement;
          setCurrentInputValue(inp.value);
        }}
        onFocus={() => {
          if (!isSearching) dispatch(setIsSearching(true));
        }}
        onBlur={(e) => {
          const inp = e.target as HTMLInputElement;
          if (!inp.value) dispatch(setIsSearching(false));
        }}
      />

      <Icon
        type="clear"
        style={{ fontSize: 24, color: 'gray', cursor: 'pointer' }}
        show={isSearching}
        onClick={onClear}
      />
      <Icon type="paizhao" style={{ fontSize: 24, color: 'gray', cursor: 'pointer' }} />
      <Icon
        type="search"
        style={{ fontSize: 24, color: 'gray', cursor: 'pointer' }}
        onClick={() => {
          dispatch(setSearchText(inputValue));
        }}
      />
    </div>
  );
});
export default SearchInput;
