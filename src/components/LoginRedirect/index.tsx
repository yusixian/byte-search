/*
 * @Author: cos
 * @Date: 2022-05-29 01:18:08
 * @LastEditTime: 2022-05-29 02:47:38
 * @LastEditors: cos
 * @Description: 检查登录状态 若未登录重定向到登录页面 （或者首页？）
 * @FilePath: \byte-search\src\components\LoginRedirect\index.tsx
 */
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router';
import { RootState } from 'redux/store';

const LoginRedirect = () => {
  // TODO: 这里检查只检查了管理员，日后修改
  let userCache = useSelector<RootState>((state) => state.user.userCache);
  console.log({ userCache: userCache });

  return <Navigate to={userCache ? '/admin' : '/login'} />;
};
export default LoginRedirect;
