/*
 * @Author: busyzz
 * @Date: 2021-09-01 19:42:04
 * @Description:
 */
import { message } from 'antd';
import { extend } from 'umi-request';
const errorCodeMap = {
  400: '发出的请求有错误，服务器没有进行新建或修改数据的操作。',
  401: '用户没有权限（令牌、用户名、密码错误）。',
  403: '用户得到授权，但是访问是被禁止的。',
  404: '发出的请求针对的是不存在的记录，服务器没有进行操作。',
  406: '请求的格式不可得。',
  410: '请求的资源被永久删除，且不会再得到的。',
  422: '当创建一个对象时，发生一个验证错误。',
  500: '服务器发生错误，请检查服务器。',
  502: '网关错误。',
  503: '服务不可用，服务器暂时过载或维护。',
  504: '网关超时。',
};
const request = extend({
  getResponse: true,
});
// request拦截器, 改变 url 或 options.
request.interceptors.request.use((url, options) => {
  console.log(url, '--url--');
  console.log(options, '--options--');
  return {
    url,
    options: { ...options, interceptors: true },
  };
});
// 提前对响应做异常处理
request.interceptors.response.use((response) => {
  // 这个地方也可以用来判断用户是否登陆，未登陆跳转到登陆页面
  // 判断 http 状态码
  if (response.status >= 200 && response.status < 300) {
    return response;
  } else {
    message.error(errorCodeMap[response.status]);
    return Promise.reject(new Error(errorCodeMap[response.status]));
  }
});

export default request;
