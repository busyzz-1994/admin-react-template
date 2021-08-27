/*
 * @Author: busyzz
 * @Date: 2021-08-02 14:04:34
 * @Description:
 */
import React, { useState } from 'react';
import styles from './index.module.scss';
// const Header = () => {
//   return <h1 className={styles.box}>header------</h1>;
// };
const Header = () => {
  const [count, setCount] = useState(0);
  console.log('parent');
  return (
    <h1 className={styles.box}>
      <Child />
      <span>{count}</span>
      <button onClick={() => setCount((prev) => prev + 1)}>count++</button>
    </h1>
  );
};

const Child = () => {
  return <h1 className={styles.box}>ppppbusyzz232323pppziiiipzpziiiizzzzz</h1>;
};
export default Header;
