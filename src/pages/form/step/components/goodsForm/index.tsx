import React, { FC } from 'react';
import { Form, Input } from 'antd';
import { FormInstance } from 'antd/lib/form';
import { formItemLayout } from 'config/layout';
interface IProps {
  form: FormInstance;
  onValuesChange: () => void;
}
const GoodsForm: FC<IProps> = ({ form, onValuesChange }) => {
  return (
    <Form
      form={form}
      onValuesChange={onValuesChange}
      scrollToFirstError
      autoComplete='off'
      {...formItemLayout}
    >
      <Form.Item
        name='goods.name'
        label='商品名称'
        rules={[
          {
            required: true,
            message: '请商品名称',
          },
        ]}
      >
        <Input />
      </Form.Item>
    </Form>
  );
};
export default GoodsForm;
