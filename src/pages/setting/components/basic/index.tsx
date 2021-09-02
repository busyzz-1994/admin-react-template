/*
 * @Author: busyzz
 * @Date: 2021-09-02 14:31:03
 * @Description:
 */
import React from 'react';
import { Form, Input, Button } from 'antd';
const Basic = () => {
  const onFinish = (v) => {
    console.log(v, '_vvv');
  };
  return (
    <div>
      <h1>基本设置</h1>
      <Form layout='vertical' style={{ width: 500 }} onFinish={onFinish}>
        <Form.Item
          label='Email'
          name='email'
          rules={[
            {
              required: true,
              message: '邮箱为必填项',
            },
            {
              type: 'email',
              message: '输入的内容不符合邮箱格式',
            },
          ]}
        >
          <Input placeholder='请输入你的邮箱' />
        </Form.Item>
        <Form.Item
          label='昵称'
          name='name'
          rules={[
            {
              required: true,
              message: '昵称为必填项',
            },
          ]}
        >
          <Input placeholder='请输入你的昵称' />
        </Form.Item>
        <Form.Item label='个人简介' name='desc'>
          <Input.TextArea rows={4} placeholder='请输入你的个人简介' />
        </Form.Item>
        <Form.Item>
          <Button htmlType='submit' type='primary'>
            提交
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Basic;
