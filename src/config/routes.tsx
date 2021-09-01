/*
 * @Author: busyzz
 * @Date: 2021-08-27 11:47:37
 * @Description:
 */
import React, { Suspense, lazy, ComponentType } from 'react';
import { RouteConfig } from 'react-router-config';
import { Redirect } from 'react-router-dom';
import BasicLayout from 'layout/BasicLayout';
import routesPath from './routesPath';
const SuspenseComponent = (Component: ComponentType) => (props: any) => {
  return (
    <Suspense fallback={null}>
      <Component {...props} />
    </Suspense>
  );
};
/** DashBoard */
const DashBoard = lazy(() => import('pages/dashboard'));

/** Form */
const StandardBasicForm = lazy(() => import('pages/form/standard/basic'));
const StandardDynamicForm = lazy(() => import('pages/form/standard/dynamic'));
const StepForm = lazy(() => import('pages/form/step'));
const CustomFrom = lazy(() => import('pages/form/custom'));
/** Table */
const BasicTable = lazy(() => import('pages/table/basic'));
const CombinationTable = lazy(() => import('pages/table/combination'));
/** Login */
const Login = lazy(() => import('pages/login'));

export interface IMenuConfig extends RouteConfig {
  // 在侧边栏显示的导航
  subMenus?: string[];
  // 隐藏pageContainer
  hidePageContainer?: boolean;
}
const routes: Array<IMenuConfig> = [
  {
    path: routesPath.login,
    component: SuspenseComponent(Login),
  },
  {
    path: routesPath.root,
    component: BasicLayout,
    routes: [
      {
        path: routesPath.root,
        exact: true,
        render: () => <Redirect to={routesPath.dashboard.root} />,
        subMenus: [
          routesPath.dashboard.root,
          routesPath.form.root,
          routesPath.table.root,
        ],
      },
      {
        path: routesPath.dashboard.root,
        name: 'dashboard',
        hidePageContainer: true,
        component: SuspenseComponent(DashBoard),
      },
      // 表单相关
      {
        path: routesPath.form.root,
        name: '表单',
        exact: true,
        subMenus: [
          routesPath.form.standard,
          routesPath.form.step,
          routesPath.form.custom,
        ],
        render: () => <Redirect to={routesPath.form.standard} />,
      },
      {
        path: routesPath.form.standard,
        name: '标准表单',
        exact: true,
        render: () => <Redirect to={routesPath.form.standardBasic} />,
        subMenus: [
          routesPath.form.standardBasic,
          routesPath.form.standardDynamic,
        ],
      },
      {
        path: routesPath.form.standardBasic,
        name: '基础表单',
        component: SuspenseComponent(StandardBasicForm),
      },
      {
        path: routesPath.form.standardDynamic,
        name: '动态表单',
        component: SuspenseComponent(StandardDynamicForm),
      },
      {
        path: routesPath.form.step,
        name: '步骤表单',
        component: SuspenseComponent(StepForm),
      },
      {
        path: routesPath.form.custom,
        name: '自定义表单',
        component: SuspenseComponent(CustomFrom),
      },
      // 表格相关
      {
        path: routesPath.table.root,
        name: '表格',
        exact: true,
        subMenus: [routesPath.table.basic, routesPath.table.combination],
        render: () => <Redirect to={routesPath.table.basic} />,
      },
      {
        path: routesPath.table.basic,
        name: '基础表格',
        component: SuspenseComponent(BasicTable),
      },
      {
        path: routesPath.table.combination,
        name: '复合表格',
        component: SuspenseComponent(CombinationTable),
      },
    ],
  },
];

export default routes;
