/*
 * @Author: busyzz
 * @Date: 2021-08-27 10:41:57
 * @Description:
 */
import React, { FC, useState } from 'react';
import {
  renderRoutes,
  RouteConfigComponentProps,
  RouteConfig,
} from 'react-router-config';
import PageContainer from './PageContainer';
import { getBreadList } from './util';
import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  // VideoCameraOutlined,
  // UploadOutlined,
  SettingOutlined,
} from '@ant-design/icons';
import styles from './index.module.scss';

const { Header, Sider, Content } = Layout;
const { SubMenu } = Menu;
const navWitdhMax = 200;
const navWitdhMin = 80;

const getRouteItem = (routes, path) => {
  return routes.find((item) => item.path === path);
};
const BasicLayout: FC<RouteConfigComponentProps> = ({ route, location }) => {
  const [collapsed, setCollapsed] = useState(false);
  const toggleCololapsed = () => {
    setCollapsed((prev) => !prev);
  };
  const { routes } = route;
  const breadList = getBreadList(routes, location.pathname);
  const renderMenu = (routes: RouteConfig[], subMenus: string[]) => {
    console.log(routes, 'routes-----');
    console.log(subMenus, 'subMenus---');
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
        <div className={styles.logo}>react-admin</div>
        <Menu theme='dark' mode='inline' defaultSelectedKeys={['1']}>
          {renderMenu(routes, routes[0].subMenus)}
        </Menu>
      </Sider>
      <Layout className='site-layout'>
        <Header
          className='site-layout-background'
          style={{
            padding: 0,
            paddingLeft: collapsed ? navWitdhMin : navWitdhMax,
            color: '#fff',
            transition: '0.3s all',
            position: 'absolute',
            left: 0,
            top: 0,
            width: '100%',
          }}
        >
          <div className={styles.header}>
            <div className={styles.icon} onClick={toggleCololapsed}>
              {React.createElement(
                collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
                {
                  className: 'trigger',
                }
              )}
            </div>
            <div className={styles.handler}>
              <div>oop</div>
            </div>
          </div>
        </Header>
        <Content
          className='site-layout-background'
          style={{
            margin: '0px 16px',
            padding: 24,
            paddingTop: 88,
            paddingLeft: collapsed ? navWitdhMin : navWitdhMax,
            boxSizing: 'border-box',
            minHeight: '100vh',
            transition: '0.3s all',
          }}
        >
          <PageContainer breadList={breadList}>
            {renderRoutes(routes)}
          </PageContainer>
        </Content>
      </Layout>
    </Layout>
  );
};

export default BasicLayout;
