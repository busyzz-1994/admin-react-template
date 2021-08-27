/*
 * @Author: busyzz
 * @Date: 2021-08-27 16:12:34
 * @Description:
 */
import React, { FC } from 'react';
import { Breadcrumb } from 'antd';
import { Link } from 'react-router-dom';
import styles from './index.module.scss';
import { breadListItem } from '../util';

interface IPageContainerProps {
  breadList: Array<breadListItem>;
}
const PageContainer: FC<IPageContainerProps> = ({ children, breadList }) => {
  return (
    <div>
      <div className={styles.breadcrumb}>
        <Breadcrumb>
          {breadList.map((item, index) => (
            <Breadcrumb.Item key={item.name}>
              {breadList.length - 1 === index ? (
                item.name
              ) : (
                <Link to={item.path as string}>{item.name}</Link>
              )}
            </Breadcrumb.Item>
          ))}
        </Breadcrumb>
      </div>
      <div className={styles.content}>{children}</div>
    </div>
  );
};

export default PageContainer;
