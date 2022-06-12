/*
 * @Author: cos
 * @Date: 2022-05-10 21:48:51
 * @LastEditTime: 2022-06-13 01:54:26
 * @LastEditors: cos
 * @Description: 搜索框
 * @FilePath: \byte-search\src\components\SearchPanel\SearchInput\index.tsx
 */
import React, { useRef, useState } from 'react';
import './index.scss';
import Icon from 'components/Icon';
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

  useDebounce(() => dispatch(setSearchText(currentInputValue)), 2000, [currentInputValue]);

  useDidUpdateEffect(() => {
    if (!inputValue) {
      inputRef.current && inputRef.current.focus();
      setCurrentInputValue(inputValue);
    }
    let searchParams: API.SearchParams = {
      QueryText: inputValue, // 要查询的文本
      page: 1, // 当前页
      limit: 10, // 总页码
      order: 0, // 排序方式 0
    };
    queryByText(searchParams).then((res) => {
      console.log('搜索结果:', res);
      const data = res.data.data;
      if (data) {
        dispatch(setIsSearching(false));
        dispatch(setSearchResult(data));
      }
    });
    getSuggestionsByText(inputValue).then((res) => {
      const data = res.data.data;
      const { relatedtexts } = data;
      console.log('suggestions:', relatedtexts);
      dispatch(setSuggestionList(relatedtexts));
    });
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
