/*
 * @Author: busyzz
 * @Date: 2021-09-02 14:31:03
 * @Description:
 */

import React from 'react';
import { Alert } from 'antd';
const Other = () => {
  return (
    <div>
      <h1>其他设置</h1>
      <Alert
        message={
          <a
            href='https://github.com/busyzz-1994/admin-react-template'
            target='_blank'
            rel='noreferrer'
          >
            点击查看网页源代码
          </a>
        }
        style={{ width: 500 }}
        type='warning'
        showIcon
      />
    </div>
  );
};

export default Other;
