import React, { FC } from 'react';
import { Modal, Form, Input, InputNumber } from 'antd';
import { useResetFormOnCloseModal } from 'hooks';
import { UserType } from '../index';
interface UserFormProps {
  visible: boolean;
  onCancel: () => void;
}
const UserForm: FC<UserFormProps> = ({ visible, onCancel }) => {
  const [form] = Form.useForm<UserType>();
  useResetFormOnCloseModal({ form, visible });
  const onOk = () => {
    form.submit();
  };
  return (
    <Modal
      title='Basic Drawer'
      visible={visible}
      onOk={onOk}
      onCancel={onCancel}
    >
      <Form form={form} layout='vertical' name='userForm'>
        <Form.Item name='name' label='User Name' rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item name='age' label='User Age' rules={[{ required: true }]}>
          <InputNumber />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default UserForm;
