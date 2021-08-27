/*
 * @Author: busyzz
 * @Date: 2021-08-27 20:26:40
 * @Description:
 */

import { matchRoutes, RouteConfig } from 'react-router-config';

export type breadListItem = {
  name: string;
  path: string | string[];
};

/**
 * @desc 获取面包屑导航栏列表
 */
export const getBreadList = (
  routes: RouteConfig[],
  pathname: string,
  list: Array<breadListItem> = []
) => {
  try {
    console.log('pathname---', pathname);
    const branch = matchRoutes(routes, pathname);
    const {
      route: { name, path },
    } = branch[0];
    const breadItem: breadListItem = {
      name,
      path,
    };
    const pathList = (path as string).split('/') || [];
    pathList.pop();
    if (pathList.length >= 2) {
      return getBreadList(routes, pathList.join('/'), [breadItem, ...list]);
    } else {
      return [breadItem, ...list];
    }
  } catch (e) {}
};
