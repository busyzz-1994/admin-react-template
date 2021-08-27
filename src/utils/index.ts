/*
 * @Author: busyzz
 * @Date: 2021-08-27 14:57:06
 * @Description:
 */

/**
 * @param time 延迟时间,单位毫秒
 */
export const delay = (time: number = 2000) => {
  return new Promise<void>((resolve) => {
    setTimeout(() => {
      resolve();
    }, time);
  });
};
