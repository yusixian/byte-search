/*
 * @Author: cos
 * @Date: 2022-06-12 22:33:51
 * @LastEditTime: 2022-06-12 22:33:54
 * @LastEditors: cos
 * @Description: 相当于 componentDidUpdate
 * @FilePath: \byte-search\src\redux\hooks\useDidUpdateEffect.ts
 */
// https://blog.csdn.net/weixin_45499478/article/details/116464981
import { useEffect, useRef } from 'react';

function useDidUpdateEffect(effect: React.EffectCallback, deps?: React.DependencyList | undefined) {
  const didMountRef = useRef(false);
  useEffect(() => {
    if (didMountRef.current) effect();
    else didMountRef.current = true;
  }, deps);
}

export default useDidUpdateEffect;

// use Like:
// useDidUpdateEffect(() => {
//     if (user.msg === "" && user.username !== "") {
//       history.push("/");
//       showToast("登录成功");
//     } else {
//       showToast(user.msg);
//     }
// }, [user]);
