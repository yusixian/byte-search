/*
 * @Author: cos
 * @Date: 2022-05-29 00:48:09
 * @LastEditTime: 2022-06-18 19:54:09
 * @LastEditors: cos
 * @Description: 搜索建议
 * @FilePath: \byte-search\src\components\SearchPanel\SearchResult\index.tsx
 */
import { Alert, Empty, Pagination, Image, Card } from 'antd';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'redux/store';
import styled from 'styled-components';
import { setSearchText } from 'redux/searchSlice';
import Meta from 'antd/lib/card/Meta';
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
  align-items: center;
  gap: 1rem;
`;
const ImageItem = styled.section`
  width: 20rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0.625rem;
  border-radius: 8px;
  border: 2px solid #e8e8e8;
`;
const Zi = styled.section`
  display: block;
  height: 0;
  width: 200px;
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
        <ImageList>
          {contents.map((item) => (
            <Card
              key={item.id}
              style={{ width: 300 }}
              hoverable
              cover={<Image src={item.url} alt={item.text} width={300} />}
            >
              <Meta title={item.text} description={<a href={item.url}>{item.url}</a>} />
            </Card>
          ))}
          <Zi></Zi>
          <Zi></Zi>
          <Zi></Zi>
          <Zi></Zi>
          <Zi></Zi>
          <Zi></Zi>
        </ImageList>
        <Pagination onChange={onPageChange} defaultCurrent={page} total={pagecount} />
      </>
    );
  };
  return <Results>{generateResultPanel()}</Results>;
});

export default SearchResult;
