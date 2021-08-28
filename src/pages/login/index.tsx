/*
 * @Author: busyzz
 * @Date: 2021-08-27 14:39:22
 * @Description:
 */
import React, { useState } from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import { delay } from 'utils';
import Storage from 'utils/localStorage';
import { useHistory } from 'react-router-dom';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import styles from './index.module.scss';
interface FormInput {
  username: string;
  password: string;
  remember: boolean;
}
const Login = () => {
  const history = useHistory();
  const [loading, setLoading] = useState(false);
  const onFinish = async (values: FormInput) => {
    // 模拟登陆，提交表单
    console.log('Received values of form: ', values);
    setLoading(true);
    await delay(1000);
    setLoading(false);
    if (values.remember) {
      Storage.setItem('username', values.username);
      Storage.setItem('password', values.password);
      Storage.setItem('remember', values.remember);
    } else {
      Storage.removeItem('username');
      Storage.removeItem('password');
      Storage.removeItem('remember');
    }
    history.push('/');
  };

  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        <Form
          name='normal_login'
          className='login-form'
          initialValues={{
            remember: Storage.getItem('remember'),
            username: Storage.getItem('username'),
            password: Storage.getItem('password'),
          }}
          onFinish={onFinish}
        >
          <Form.Item
            name='username'
            rules={[{ required: true, message: '账号不能为空' }]}
          >
            <Input
              prefix={<UserOutlined className='site-form-item-icon' />}
              placeholder='默认账号:admin'
            />
          </Form.Item>
          <Form.Item
            name='password'
            rules={[{ required: true, message: '密码不能为空' }]}
          >
            <Input
              prefix={<LockOutlined className='site-form-item-icon' />}
              type='password'
              placeholder='默认密码:admin'
            />
          </Form.Item>
          <Form.Item>
            <Form.Item name='remember' valuePropName='checked' noStyle>
              <Checkbox>记住密码</Checkbox>
            </Form.Item>
          </Form.Item>
          <Form.Item>
            <Button
              type='primary'
              htmlType='submit'
              className='login-form-button'
              loading={loading}
            >
              登陆
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Login;
