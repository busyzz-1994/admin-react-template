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

/** Form */
const StandardForm = lazy(() => import('pages/form/standard'));
const StandardFormEdit = lazy(() => import('pages/form/standard/edit'));
const StepForm = lazy(() => import('pages/form/step'));

/** Login */
const Login = lazy(() => import('pages/login'));

interface IMenuConfig extends RouteConfig {
  // 在侧边栏显示的导航
  subMenus?: string[];
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
        render: () => <Redirect to={routesPath.form.standard} />,
        subMenus: [routesPath.form.root, routesPath.dashborad.root],
      },
      {
        path: routesPath.form.root,
        name: '表单',
        exact: true,
        subMenus: [routesPath.form.standard, routesPath.form.step],
        render: () => <Redirect to={routesPath.form.standard} />,
      },
      {
        path: routesPath.form.standard,
        name: '标准表单-1',
        // exact: true,
        component: SuspenseComponent(StandardForm),
      },
      {
        path: routesPath.form.standardEdit,
        name: '编辑表单',
        component: SuspenseComponent(StandardFormEdit),
      },
      {
        path: routesPath.form.step,
        name: '步骤',
        component: SuspenseComponent(StepForm),
      },
      {
        path: routesPath.dashborad.root,
        name: 'dashborad',
        component: SuspenseComponent(StandardForm),
      },
    ],
  },
];

export default routes;
