import React, { FC } from 'react';
import { Form, Input } from 'antd';
import { FormInstance } from 'antd/lib/form';
import { formItemLayout } from 'config/layout';
interface IProps {
  form: FormInstance;
  onValuesChange: () => void;
}
const StoreForm: FC<IProps> = ({ form, onValuesChange }) => {
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
          name='store.name'
          label='商店名称'
          rules={[
            {
              required: true,
              message: '请输入商店名称',
            },
          ]}
        >
          <Input />
        </Form.Item>
      </Form>
    </div>
  );
};
export default StoreForm;
