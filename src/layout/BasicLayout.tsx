/*
 * @Author: busyzz
 * @Date: 2021-08-27 10:41:57
 * @Description:
 */
import React, { FC, useState, useEffect } from 'react';
import {
  renderRoutes,
  RouteConfigComponentProps,
  RouteConfig,
} from 'react-router-config';
import routesPath from 'config/routesPath';
import PageContainer from './pageContainer';
import { getBreadList } from './util';
import { Layout, Menu } from 'antd';
import { Link, useHistory } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { UserOutlined, SettingOutlined } from '@ant-design/icons';
import Header from './header';
import styles from './index.module.scss';
import logoImage from 'assets/images/logo.png';

export const navWitdhMax = 200;
export const navWitdhMin = 80;

const { Sider, Content } = Layout;
const { SubMenu } = Menu;

const getRouteItem = (routes, path) =>
  routes.find((item) => item.path === path);
const getDefaultSelectedKeys = (pathname) => {
  const pathnameList = pathname.split('/');
  const selectedKeys = [];
  pathnameList.reduce((prev, current) => {
    const item = prev + '/' + current;
    selectedKeys.push(item);
    return item;
  });
  return selectedKeys;
};
const BasicLayout: FC<RouteConfigComponentProps> = ({ route, location }) => {
  const history = useHistory();
  const [collapsed, setCollapsed] = useState(false);
  const [selectedKeys, setSelectedKeys] = useState(() =>
    getDefaultSelectedKeys(location.pathname)
  );
  const [openKeys, setOpenKeys] = useState(() =>
    getDefaultSelectedKeys(location.pathname)
  );
  const toggleCololapsed = () => {
    setCollapsed((prev) => !prev);
  };
  const { routes } = route;
  const breadList = getBreadList(routes, location.pathname);
  // const onOpenChange = (keys) => {
  //   const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
  //   setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
  // };
  const renderMenu = (routes: RouteConfig[], subMenus: string[]) => {
    return (
      <>
        {subMenus.map((path) => {
          const routeItem = getRouteItem(routes, path);
          const { path: itemPath, name, subMenus } = routeItem;
          if (subMenus) {
            return (
              <SubMenu key={itemPath} icon={<SettingOutlined />} title={name}>
                {renderMenu(routes, subMenus)}
              </SubMenu>
            );
          } else {
            return (
              <Menu.Item key={itemPath} icon={<UserOutlined />}>
                <Link to={itemPath}>{name}</Link>
              </Menu.Item>
            );
          }
        })}
      </>
    );
  };
  useEffect(() => {
    setSelectedKeys(getDefaultSelectedKeys(location.pathname));
    setOpenKeys(getDefaultSelectedKeys(location.pathname));
  }, [location.pathname, setSelectedKeys, setOpenKeys]);
  return (
    <Layout>
      <Sider
        style={{
          overflow: 'auto',
          height: '100vh',
          position: 'fixed',
          left: 0,
          zIndex: 999,
        }}
        trigger={null}
        collapsible
        collapsed={collapsed}
      >
        <div
          className={styles.logo}
          onClick={() => history.push(routesPath.root)}
        >
          <img src={logoImage} alt='-' />
          {!collapsed && <h2>admin</h2>}
        </div>
        <Menu
          theme='dark'
          mode='inline'
          // deopenKeys={openKeys}
          defaultOpenKeys={openKeys}
          selectedKeys={selectedKeys}
          // onOpenChange={onOpenChange}
        >
          {renderMenu(routes, routes[0].subMenus)}
        </Menu>
      </Sider>
      <Layout className='site-layout'>
        <Header onCollapsedClick={toggleCololapsed} collapsed={collapsed} />
        <Content
          className='site-layout-background'
          style={{
            padding: 24,
            paddingTop: 78,
            paddingLeft: collapsed ? navWitdhMin + 24 : navWitdhMax + 24,
            boxSizing: 'border-box',
            minHeight: '100vh',
            transition: '0.3s all',
          }}
        >
          <PageContainer routes={routes} breadList={breadList}>
            <TransitionGroup>
              <CSSTransition
                key={location.pathname}
                classNames={'slide'}
                timeout={500}
              >
                <div>{renderRoutes(routes)}</div>
              </CSSTransition>
            </TransitionGroup>
          </PageContainer>
        </Content>
      </Layout>
    </Layout>
  );
};

export default BasicLayout;
