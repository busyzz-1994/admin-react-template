/*
 * @Author: busyzz
 * @Date: 2021-09-02 09:52:30
 * @Description:
 */
import React, { FC } from 'react';
import { useHistory } from 'react-router-dom';
import { Button } from 'antd';
import routesPath from 'config/routesPath';
import styles from './index.module.scss';
import { ReactComponent as Image404 } from './images/404.svg';
import { ReactComponent as Image403 } from './images/403.svg';
import { ReactComponent as Image500 } from './images/500.svg';
const imagesMap = {
  403: <Image403 />,
  404: <Image404 />,
  500: <Image500 />,
};
interface ExceptionProps {
  code: 403 | 404 | 500;
  message: string;
  buttonText?: string;
  onBack?: () => void;
}
const Exception: FC<ExceptionProps> = ({
  code,
  message,
  buttonText,
  onBack,
}) => {
  const history = useHistory();
  const onClick = () => {
    if (onBack instanceof Function) {
      onBack();
    } else {
      history.push(routesPath.root);
    }
  };
  return (
    <div className={styles.container}>
      {imagesMap[code]}
      <div className={styles.code}>{code}</div>
      <div className={styles.message}>{message}</div>
      <div className={styles.button}>
        <Button type='primary' onClick={onClick}>
          {buttonText}
        </Button>
      </div>
    </div>
  );
};
Exception.defaultProps = {
  buttonText: '返回首页',
};
export default Exception;
