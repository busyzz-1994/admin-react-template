/*
 * @Author: busyzz
 * @Date: 2021-09-01 20:13:07
 * @Description:
 */
import request from 'utils/request';

const service = {
  getList: <T = any>(options) => {
    return request.get<T>('https://randomuser.me/api', options);
  },
};
export default service;
