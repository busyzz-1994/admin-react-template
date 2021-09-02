/*
 * @Author: busyzz
 * @Date: 2021-09-02 15:25:25
 * @Description:
 */
import React, { FC } from 'react';
import styles from './index.module.scss';
interface SectionProps {
  children?: React.ReactNode;
}
const Section: FC<SectionProps> = ({ children }) => {
  return <div className={styles.container}>{children}</div>;
};

export default Section;
