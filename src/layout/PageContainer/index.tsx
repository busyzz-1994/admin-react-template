/*
 * @Author: busyzz
 * @Date: 2021-08-27 16:12:34
 * @Description:
 */
import React, { FC } from 'react';
import { Breadcrumb } from 'antd';
import { Link } from 'react-router-dom';
import { matchRoutes } from 'react-router-config';
import { IMenuConfig } from 'config/routes';
import { useLocation } from 'react-router-dom';
import styles from './index.module.scss';
import { breadListItem } from '../util';

interface IPageContainerProps {
  breadList: Array<breadListItem>;
  routes: IMenuConfig[];
  children: React.ReactElement;
}
const PageContainer: FC<IPageContainerProps> = ({
  children,
  breadList,
  routes,
}) => {
  const location = useLocation();
  const branch = matchRoutes(routes, location.pathname);
  const hidePageContainer = branch[0]?.route?.hidePageContainer;
  return hidePageContainer ? (
    children
  ) : (
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
