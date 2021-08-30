import React, { FC } from 'react';
import { phoneRegExp } from 'utils/pattern';
import { Form, Input, Radio } from 'antd';
import { FormInstance } from 'antd/lib/form';
import { formItemLayout } from 'config/layout';
interface IProps {
  form: FormInstance;
  onValuesChange: () => void;
}
const BasicForm: FC<IProps> = ({ form, onValuesChange }) => {
  return (
    <div>
      <Form
        form={form}
        scrollToFirstError
        autoComplete='off'
        onValuesChange={onValuesChange}
        {...formItemLayout}
      >
        <Form.Item
          name='basic.email'
          label='E-mail'
          rules={[
            {
              required: true,
              message: '邮箱地址不能为空',
            },
            {
              type: 'email',
              message: '请输入有效的邮箱格式',
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name='basic.name'
          label='姓名'
          rules={[
            {
              required: true,
              message: '姓名不能为空',
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name='basic.phone'
          label='手机号码'
          rules={[
            { required: true, message: '手机号不能为空', whitespace: true },
            {
              validator: (rule, v) =>
                phoneRegExp.test(v) || !v
                  ? Promise.resolve()
                  : Promise.reject(new Error('必须为手机号码格式')),
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name='basic.gender'
          label='性别'
          rules={[{ required: true, message: '性别不能为空' }]}
        >
          <Radio.Group>
            <Radio value='male'>男</Radio>
            <Radio value='female'>女</Radio>
            <Radio value='other'>其他</Radio>
          </Radio.Group>
        </Form.Item>
      </Form>
    </div>
  );
};
export default BasicForm;
