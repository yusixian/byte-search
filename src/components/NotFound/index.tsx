/*
 * @Author: cos
 * @Date: 2022-05-29 01:18:08
 * @LastEditTime: 2022-05-29 01:32:56
 * @LastEditors: cos
 * @Description: 404页面 路由不匹配时
 * @FilePath: \byte-search\src\components\NotFound\index.tsx
 */
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router';
import { RootState } from 'redux/store';

const NotFound = () => {
  let userCache = useSelector<RootState>((state) => state.user.userCache);
  console.log({ userCache: userCache });

  return <Navigate to={userCache ? '/admin' : '/login'} />;
};
export default NotFound;
