/*
 * @Author: busyzz
 * @Date: 2021-09-02 14:10:10
 * @Description:
 */
import React, { useState } from 'react';
import { Menu } from 'antd';
import { AppstoreOutlined, MailOutlined } from '@ant-design/icons';
import Basic from './components/basic';
import Other from './components/other';
import styles from './index.module.scss';
enum SettingEnum {
  basic = 'basic',
  other = 'other',
}
const contentMap = {
  [SettingEnum.basic]: <Basic />,
  [SettingEnum.other]: <Other />,
};
const Setting = () => {
  const [selectedKeys, setSelectedKeys] = useState<Array<SettingEnum>>([
    SettingEnum.basic,
  ]);
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <Menu
          style={{ width: 200 }}
          onClick={(v) => {
            setSelectedKeys(v.keyPath as Array<SettingEnum>);
          }}
          selectedKeys={selectedKeys}
          mode='inline'
        >
          <Menu.Item key={SettingEnum.basic} icon={<AppstoreOutlined />}>
            基本设置
          </Menu.Item>
          <Menu.Item key={SettingEnum.other} icon={<MailOutlined />}>
            其他设置
          </Menu.Item>
        </Menu>
      </div>
      <div className={styles.right}>{contentMap[selectedKeys[0]]}</div>
    </div>
  );
};

export default Setting;
