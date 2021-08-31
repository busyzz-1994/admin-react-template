/*
 * @Author: busyzz
 * @Date: 2021-08-31 11:52:36
 * @Description:
 */
import React, { FC, useRef } from 'react';
import { Alert, Form, Button, message } from 'antd';
import UploadImage from 'components/biz/uploadImage';
import Editor, { ReactQuillInstance } from 'components/biz/editor';
import { UploadProps } from 'antd/lib/upload';
import styles from './index.module.scss';
const fileList: UploadProps['fileList'] = [
  {
    uid: '-1',
    url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    name: '-1',
  },
];
const CustomForm: FC = () => {
  const editorRef = useRef<ReactQuillInstance>();
  const onFinish = (v) => {
    message.success(JSON.stringify(v));
    console.log(v, 'vvv---');
  };
  return (
    <div>
      <Alert
        message={
          <>
            <div>
              自定义或第三方的表单控件，也可以与 Form
              组件一起使用。只要该组件遵循以下的约定：
            </div>
            <div style={{ fontWeight: 700 }}>
              - 提供受控属性 value 或其它与 valuePropName 的值同名的属性。
            </div>
            <div style={{ fontWeight: 700 }}>
              - 提供 onChange 事件或 trigger 的值同名的事件。
            </div>
          </>
        }
        type='info'
        showIcon
      />
      <Form
        onFinish={onFinish}
        scrollToFirstError
        autoComplete='off'
        className={styles['form-container']}
        initialValues={{
          imgList: fileList,
          editText: 'busyzz',
        }}
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 18 }}
      >
        <Form.Item
          name='imgList'
          label='图片上传'
          required
          rules={[
            {
              validator(_, value) {
                if (value.length <= 0) {
                  return Promise.reject(new Error('图片列表不能为空'));
                }
                for (let i = 0; i < value.length; i++) {
                  if (value[i]?.status === 'error') {
                    return Promise.reject(
                      new Error(`${value[i]?.name} 上传出错，请重新上传`)
                    );
                  }
                }
                return Promise.resolve();
              },
            },
          ]}
        >
          <UploadImage />
        </Form.Item>
        <Form.Item
          name='editText'
          label='内容'
          required
          rules={[
            {
              validator() {
                const editor = editorRef.current.getEditor();
                const unprivilegedEditor =
                  editorRef.current.makeUnprivilegedEditor(editor);
                const text = unprivilegedEditor.getText() || '';
                if (!text.trim()) {
                  return Promise.reject(new Error('内容不能为空'));
                }
                return Promise.resolve();
              },
            },
          ]}
        >
          <Editor ref={editorRef} />
        </Form.Item>
        <Form.Item wrapperCol={{ offset: 4 }}>
          <Button type='primary' htmlType='submit'>
            提交
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default CustomForm;
