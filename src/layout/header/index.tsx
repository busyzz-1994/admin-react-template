/*
 * @Author: busyzz
 * @Date: 2021-09-02 17:26:47
 * @Description:
 */
import React, { FC, useContext } from 'react';
import { Layout, Menu, Dropdown, Tooltip } from 'antd';
import { GlobalContext } from 'context';
import { navWitdhMin, navWitdhMax } from '../BasicLayout';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  WechatOutlined,
} from '@ant-design/icons';
import { Link } from 'react-router-dom';
import routesPath from 'config/routesPath';
import styles from './index.module.scss';
import wxqrCodeImg from 'assets/images/wxqrcode.jpg';
const { Header } = Layout;
interface HeaderComProps {
  collapsed: boolean;
  onCollapsedClick: () => void;
}
const MenuList = (
  <Menu>
    <Menu.Item>自定义信息</Menu.Item>
    <Menu.Item>
      <Link to={routesPath.login}>退出登陆</Link>
    </Menu.Item>
  </Menu>
);
const HeaderCom: FC<HeaderComProps> = ({ collapsed, onCollapsedClick }) => {
  const state = useContext(GlobalContext);
  return (
    <Header
      className='site-layout-background'
      style={{
        padding: 0,
        paddingLeft: collapsed ? navWitdhMin : navWitdhMax,
        color: '#fff',
        transition: '0.3s all',
        position: 'fixed',
        left: 0,
        top: 0,
        zIndex: 99,
        width: '100%',
      }}
    >
      <div className={styles.header}>
        <div className={styles.icon} onClick={onCollapsedClick}>
          {React.createElement(
            collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
            {
              className: 'trigger',
            }
          )}
        </div>
        <div className={styles.handler}>
          <Tooltip title={<img src={wxqrCodeImg} width={200} alt='-' />}>
            <div className={styles.wxIcon}>
              <WechatOutlined />
            </div>
          </Tooltip>
          <Dropdown overlay={MenuList}>
            <div className={styles.avatar}>
              <img src={state.avatar} alt='-' />
              <span>{state.name}</span>
            </div>
          </Dropdown>
        </div>
      </div>
    </Header>
  );
};

export default HeaderCom;
