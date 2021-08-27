/*
 * @Author: busyzz
 * @Date: 2021-08-27 11:46:01
 * @Description:
 */
import React, { FC } from 'react';
import { RouteConfigComponentProps } from 'react-router-config';
const FormPage: FC<RouteConfigComponentProps> = (props) => {
  console.log(props, 'props');
  return <div>standard edit ++++ </div>;
};

export default FormPage;
