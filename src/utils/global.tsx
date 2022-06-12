/*
 * @Author: cos
 * @Date: 2022-05-11 00:16:32
 * @LastEditTime: 2022-05-11 00:40:11
 * @LastEditors: cos
 * @Description:
 * @FilePath: \byte-search\src\utils\utils.tsx
 */
export const getRandomInt = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
export const debounce = (fn: Function, dur?: number) => {
  dur = dur || 300;
  var timer: NodeJS.Timeout | null = null;
  const thisArg = this;
  return (...args: any) => {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(thisArg, args);
    }, dur);
  };
};
