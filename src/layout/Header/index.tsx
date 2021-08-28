import React, { FC } from 'react';
import { Layout, Menu, Dropdown, Tooltip } from 'antd';
import { navWitdhMin, navWitdhMax } from '../BasicLayout';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  WechatOutlined,
} from '@ant-design/icons';
import { Link } from 'react-router-dom';
import routesPath from 'config/routesPath';
import styles from './index.module.scss';
import avatarImg from 'assets/images/avatar.jpg';
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
  return (
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
              <img src={avatarImg} alt='-' />
              <span>busyzz</span>
            </div>
          </Dropdown>
        </div>
      </div>
    </Header>
  );
};

export default HeaderCom;
