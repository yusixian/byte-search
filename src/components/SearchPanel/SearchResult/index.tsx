/*
 * @Author: cos
 * @Date: 2022-05-29 00:48:09
 * @LastEditTime: 2022-06-13 02:30:24
 * @LastEditors: cos
 * @Description: 搜索建议
 * @FilePath: \byte-search\src\components\SearchPanel\SearchResult\index.tsx
 */
import { Alert, Empty, Pagination, Image } from 'antd';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'redux/store';
import styled from 'styled-components';
import { setSearchText } from 'redux/searchSlice';
const Results = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.875rem;
  gap: 0.625rem;
`;
const ImageList = styled.section`
  width: 100%;
  display: flex;
  flex-flow: wrap;
  justify-content: center;
  align-items: center;
`;
const SearchResult = React.memo(() => {
  const dispatch = useDispatch();

  const searchResult = useSelector<RootState, API.SearchResult | null>((state) => state.search.searchResult);
  const [current, setCurrent] = useState(1);
  const onPageChange = (pageNumber: number) => {
    console.log('Page ', pageNumber);
    setCurrent(pageNumber);
  };
  const generateResultPanel = () => {
    if (!searchResult || !searchResult.contents) return <></>;

    const { time, contents, page, pagecount, limit } = searchResult;
    if (contents.length === 0)
      return (
        <Empty
          style={{ textAlign: 'center' }}
          image="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg"
          description={<span>暂无搜索结果</span>}
        />
      );
    const msg = `搜索成功! 共耗时${time}ms`;
    return (
      <>
        <Alert style={{ width: '100%' }} message={msg} type="success" showIcon />
        <Image.PreviewGroup>
          {contents.map((item) => (
            <>
              <Image key={item.id} src={item.url} alt={item.text} width={200} />
              <div>描述: {item.text}</div>
              <div>
                图片地址: <a href={item.url}>{item.url}</a>
              </div>
            </>
          ))}
          <Image
            key={11111}
            src={'https://cdn.jsdelivr.net/gh/yusixian/imgBed/img/easy-mooc-maker/20220428img1.png'}
            width={200}
          />
          <Image
            key={2222}
            src={'https://cdn.jsdelivr.net/gh/yusixian/imgBed/img/easy-mooc-maker/20220428ppt-1.png'}
            width={200}
          />
          <Image
            key={3333}
            src={'https://cdn.jsdelivr.net/gh/yusixian/imgBed/img/easy-mooc-maker/20220428ppt-5.png'}
            width={200}
          />
        </Image.PreviewGroup>
        <Pagination onChange={onPageChange} defaultCurrent={page} total={pagecount} />
      </>
    );
  };
  return <Results>{generateResultPanel()}</Results>;
});

export default SearchResult;
