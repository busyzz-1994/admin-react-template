/*
 * @Author: busyzz
 * @Date: 2021-08-27 23:06:54
 * @Description:
 */

const routesPath = {
  root: '/',
  login: '/login',
  dashboard: {
    root: '/dashboard',
  },
  form: {
    root: '/form',
    standard: '/form/standard',
    standardBasic: '/form/standard/basic',
    standardDynamic: '/form/standard/dynamic',
    step: '/form/step',
    custom: '/form/custom',
  },
  table: {
    root: '/table',
    basic: '/table/basic',
    combination: '/table/combination',
  },
  exception: {
    root: '/exception',
    exception_404: '/exception/404',
    exception_403: '/exception/403',
    exception_500: '/exception/500',
  },
};

export default routesPath;
