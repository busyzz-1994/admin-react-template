import React, { FC, useState } from 'react';
import { phoneRegExp } from 'utils/pattern';
import {
  Alert,
  Form,
  Input,
  Button,
  Select,
  AutoComplete,
  Checkbox,
  DatePicker,
  Switch,
  Radio,
  Col,
  Row,
} from 'antd';
import { formItemLayout, tailFormItemLayout } from 'config/layout';
import styles from './index.module.scss';
const { useForm } = Form;
const { Option } = Select;
const { RangePicker } = DatePicker;
const Basic: FC = () => {
  const [form] = useForm();
  const [autoCompleteResult, setAutoCompleteResult] = useState<string[]>([]);
  const prefixSelector = (
    <Form.Item name='urlPrefix' noStyle>
      <Select style={{ width: 100 }}>
        <Option value='http://'>http://</Option>
        <Option value='https://'>https://</Option>
      </Select>
    </Form.Item>
  );
  const onWebsiteChange = (value: string) => {
    if (!value) {
      setAutoCompleteResult([]);
    } else {
      setAutoCompleteResult(
        ['.com', '.cn', '.org', '.net'].map((domain) => `${value}${domain}`)
      );
    }
  };
  const websiteOptions = autoCompleteResult.map((website) => ({
    label: website,
    value: website,
  }));
  const onFinish = (v) => {
    console.log(v, 'vvv---');
  };
  return (
    <div>
      <Alert
        message='表单更多 API 请查看：https://ant.design/components/form-cn'
        type='info'
        showIcon
      />
      <Form
        form={form}
        onFinish={onFinish}
        className={styles['form-container']}
        scrollToFirstError
        autoComplete='off'
        initialValues={{
          urlPrefix: 'https://',
        }}
        {...formItemLayout}
      >
        <Form.Item label='Plain Text'>
          <span className='ant-form-text'>China</span>
        </Form.Item>
        <Form.Item
          name='email'
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
          name='password'
          label='密码'
          rules={[
            {
              required: true,
              message: '请输入密码',
            },
          ]}
          hasFeedback
        >
          <Input.Password />
        </Form.Item>
        <Form.Item
          name='confirmPassword'
          label='确认密码'
          dependencies={['password']}
          hasFeedback
          rules={[
            {
              required: true,
              message: '请输入你的确认密码',
            },
            // dependencies里面的字段发生变化就会重新校验
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue('password') === value) {
                  return Promise.resolve();
                }
                return Promise.reject(new Error('两次输入的密码必须保持一致'));
              },
            }),
          ]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item
          name='nickname'
          label='名称'
          tooltip='输入你的名称'
          rules={[
            { required: true, message: '名称不能为空', whitespace: true },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name='phone'
          label='手机号'
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
          name='url'
          label='url'
          rules={[{ required: true, message: 'url为必选项' }]}
        >
          <Input addonBefore={prefixSelector} style={{ width: '100%' }} />
        </Form.Item>
        <Form.Item
          name='website'
          label='Website'
          rules={[{ required: true, message: 'Please input website!' }]}
        >
          <AutoComplete
            options={websiteOptions}
            onChange={onWebsiteChange}
            placeholder='website'
          >
            <Input />
          </AutoComplete>
        </Form.Item>
        <Form.Item
          name='gender'
          label='性别'
          rules={[{ required: true, message: '请选择性别' }]}
        >
          <Select placeholder='选择性别'>
            <Option value='male'>男</Option>
            <Option value='female'>女</Option>
            <Option value='other'>其他</Option>
          </Select>
        </Form.Item>
        <Form.Item name='switch' label='Switch' valuePropName='checked'>
          <Switch />
        </Form.Item>
        <Form.Item name='radio-group' label='Radio.Group'>
          <Radio.Group>
            <Radio value='a'>a</Radio>
            <Radio value='b'>b</Radio>
            <Radio value='c'>c</Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item label='Checkbox' name='checkbox'>
          <Checkbox.Group>
            <Row>
              <Col span={8}>
                <Checkbox value='A' style={{ lineHeight: '32px' }}>
                  A
                </Checkbox>
              </Col>
              <Col span={8}>
                <Checkbox value='B' style={{ lineHeight: '32px' }} disabled>
                  B
                </Checkbox>
              </Col>
              <Col span={8}>
                <Checkbox value='C' style={{ lineHeight: '32px' }}>
                  C
                </Checkbox>
              </Col>
              <Col span={8}>
                <Checkbox value='D' style={{ lineHeight: '32px' }}>
                  D
                </Checkbox>
              </Col>
              <Col span={8}>
                <Checkbox value='E' style={{ lineHeight: '32px' }}>
                  E
                </Checkbox>
              </Col>
              <Col span={8}>
                <Checkbox value='F' style={{ lineHeight: '32px' }}>
                  F
                </Checkbox>
              </Col>
            </Row>
          </Checkbox.Group>
        </Form.Item>
        <Form.Item
          name='range-time-picker'
          label='选择时间范围'
          rules={[{ type: 'array', required: true, message: '请选择时间' }]}
        >
          <RangePicker showTime format='YYYY-MM-DD HH:mm:ss' />
        </Form.Item>
        <Form.Item required label='BirthDate' style={{ marginBottom: 0 }}>
          <Form.Item
            name='year'
            rules={[{ required: true }]}
            style={{ display: 'inline-block', width: 'calc(50% - 8px)' }}
          >
            <Input placeholder='Input birth year' />
          </Form.Item>
          <Form.Item
            name='month'
            rules={[{ required: true }]}
            style={{
              display: 'inline-block',
              width: 'calc(50% - 8px)',
              margin: '0 8px',
            }}
          >
            <Input placeholder='Input birth month' />
          </Form.Item>
        </Form.Item>
        <Form.Item
          name='agreement'
          valuePropName='checked'
          rules={[
            {
              validator: (_, value) =>
                value
                  ? Promise.resolve()
                  : Promise.reject(new Error('同意以后才能提交表单')),
            },
          ]}
          {...tailFormItemLayout}
        >
          <Checkbox>已阅读</Checkbox>
        </Form.Item>
        <Form.Item {...tailFormItemLayout}>
          <Button type='primary' htmlType='submit'>
            Register
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Basic;
