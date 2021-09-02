/*
 * @Author: busyzz
 * @Date: 2021-09-02 11:18:47
 * @Description:
 */
import React from 'react';
import { Spin } from 'antd';
import styles from './index.module.scss';
const PageLoading = (
  <div className={styles.container}>
    <Spin spinning={true} />
    <div className={styles.text}>页面加载中...</div>
  </div>
);

export default PageLoading;
