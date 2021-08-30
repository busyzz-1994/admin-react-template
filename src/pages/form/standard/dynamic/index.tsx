import React, { FC, useState } from 'react';
import {
  Form,
  Alert,
  Space,
  Input,
  Button,
  message,
  Typography,
  Avatar,
} from 'antd';
import {
  MinusCircleOutlined,
  PlusOutlined,
  UserOutlined,
  SmileOutlined,
} from '@ant-design/icons';
import styles from './index.module.scss';
import { formItemLayout, tailFormItemLayout } from 'config/layout';
import UserModalForm from './userForm';
export interface UserType {
  name: string;
  age: string;
}
const { useForm } = Form;
const Dynamic: FC = () => {
  const [form] = useForm();
  const [visible, setVisible] = useState(false);
  const onFinish = (values) => {
    const finallyValue = {
      users: form.getFieldValue('users'),
      ...values,
    };
    console.log(finallyValue, 'values');
  };
  const hideUserModal = () => {
    setVisible(false);
  };
  const showUserModal = () => {
    setVisible(true);
  };
  return (
    <div>
      <Alert
        message='表单更多 API 请查看：https://ant.design/components/form-cn'
        type='info'
        showIcon
      />
      <Form.Provider
        onFormFinish={(name, { values, forms }) => {
          if (name === 'userForm') {
            const { basicForm } = forms;
            const users = basicForm.getFieldValue('users') || [];
            basicForm.setFieldsValue({ users: [...users, values] });
            setVisible(false);
          }
        }}
      >
        <Form
          onFinish={onFinish}
          form={form}
          className={styles['form-container']}
          scrollToFirstError
          autoComplete='off'
          name='basicForm'
          initialValues={{
            names: [{ first: 'busyzz', last: 'busyzz123@gmail.com' }],
            users: [
              {
                name: 'bss',
                age: 26,
              },
            ],
          }}
          {...formItemLayout}
        >
          <Form.List
            name='names'
            rules={[
              {
                validator: async (_, names) => {
                  if (!names || names.length < 1) {
                    return Promise.reject(new Error('至少需要输入一个用户'));
                  }
                },
              },
            ]}
          >
            {(fields, { add, remove }) => (
              <>
                {fields.map(({ key, name, fieldKey, ...restField }) => (
                  <Form.Item key={fieldKey} label='输入姓名' required>
                    <Space align='baseline'>
                      <Form.Item
                        {...restField}
                        name={[name, 'first']}
                        fieldKey={[fieldKey, 'first']}
                        wrapperCol={{ span: 24 }}
                        rules={[
                          { required: true, message: 'Missing first name' },
                        ]}
                        style={{
                          marginBottom: 0,
                        }}
                      >
                        <Input placeholder='First Name' />
                      </Form.Item>
                      <Form.Item
                        {...restField}
                        name={[name, 'last']}
                        fieldKey={[fieldKey, 'last']}
                        wrapperCol={{ span: 24 }}
                        rules={[
                          { required: true, message: 'Missing last name' },
                        ]}
                        style={{
                          marginBottom: 0,
                        }}
                      >
                        <Input
                          style={{ width: '100%' }}
                          placeholder='Last Name'
                        />
                      </Form.Item>
                      <MinusCircleOutlined
                        onClick={() => {
                          if (fields.length > 1) {
                            remove(name);
                          } else {
                            message.warn('至少输入一条数据');
                          }
                        }}
                      />
                    </Space>
                  </Form.Item>
                ))}
                <Form.Item {...tailFormItemLayout}>
                  <Button
                    type='dashed'
                    onClick={() => add()}
                    block
                    icon={<PlusOutlined />}
                  >
                    Add field
                  </Button>
                </Form.Item>
              </>
            )}
          </Form.List>
          <Form.Item
            label='User List'
            shouldUpdate={(prevValues, curValues) =>
              prevValues.users !== curValues.users
            }
          >
            {(props) => {
              const { getFieldValue } = props;
              const users: UserType[] = getFieldValue('users') || [];
              return (
                <>
                  {users.length ? (
                    <div className={styles.userContainer}>
                      {users.map((user, index) => (
                        <div key={index} className='user'>
                          <Avatar
                            style={{ marginRight: 10 }}
                            icon={<UserOutlined />}
                          />
                          {user.name} - {user.age}
                        </div>
                      ))}
                    </div>
                  ) : (
                    <Typography.Text className='ant-form-text' type='secondary'>
                      ( <SmileOutlined /> No user yet. )
                    </Typography.Text>
                  )}
                  <Button style={{ marginTop: 10 }} onClick={showUserModal}>
                    添加用户
                  </Button>
                </>
              );
            }}
          </Form.Item>
          <Form.Item {...tailFormItemLayout}>
            <Button type='primary' htmlType='submit'>
              Submit
            </Button>
          </Form.Item>
        </Form>
        <UserModalForm visible={visible} onCancel={hideUserModal} />
      </Form.Provider>
    </div>
  );
};

export default Dynamic;
