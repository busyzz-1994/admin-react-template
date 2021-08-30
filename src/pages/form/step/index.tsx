/*
 * @Author: busyzz
 * @Date: 2021-08-27 17:41:12
 * @Description:
 */

import React, { FC, useState } from 'react';
import { Alert, Form, Button, Col, Row, Space, Steps, message } from 'antd';
import { useSetState } from 'hooks';
import { Prompt } from 'react-router-dom';
import styles from './index.module.scss';
import BasicForm from './components/basicForm';
import GoodsForm from './components/goodsForm';
import StoreForm from './components/storeForm';
const { Step } = Steps;
const fromList = [BasicForm, GoodsForm, StoreForm];
interface FormInputs {
  ['basic.email']?: string;
  ['basic.name']?: string;
  ['basic.phone']?: string;
  ['basic.gender']?: string;
  ['goods.name']?: string;
  ['store.name']?: string;
}
const StepForm: FC = () => {
  const [form] = Form.useForm();
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useSetState<FormInputs>({});
  const [isDirty, setIsDirty] = useState(false);
  // 是否已经提交过了
  const [isSaved, setIsSaved] = useState(false);
  const renderCurrentForm = () => {
    const onValuesChange = () => {
      if (!isDirty) {
        setIsDirty(true);
      }
    };
    const CurrentForm = fromList[currentStep];
    return <CurrentForm onValuesChange={onValuesChange} form={form} />;
  };
  const nextStep = () => {
    if (currentStep >= 0 && currentStep <= fromList.length - 1) {
      form
        .validateFields()
        .then((value) => {
          console.log(value, 'value');
          setFormData((prev) => ({
            ...prev,
            ...value,
          }));
          setCurrentStep(currentStep + 1);
        })
        .catch(() => {});
    }
  };
  const preStep = () => {
    setCurrentStep(currentStep - 1);
  };
  const onSubmit = () => {
    const data = {
      ...formData,
      ...form.getFieldsValue(),
    };
    console.log(data, 'data');
    setIsSaved(true);
    setFormData(data);
    message.success(JSON.stringify(data));
  };

  return (
    <div>
      <Alert
        message='表单更多 API 请查看：https://ant.design/components/form-cn'
        type='info'
        showIcon
      />
      <Steps
        style={{ width: '80%', margin: '20px auto', marginBottom: '40px' }}
        size='small'
        current={currentStep}
      >
        <Step title='基础信息' />
        <Step title='商品信息' />
        <Step title='物流信息' />
      </Steps>
      <div className={styles['form-container']}>
        {renderCurrentForm()}
        <Row>
          <Col offset={8}>
            <Space>
              {currentStep > 0 && <Button onClick={preStep}>上一步</Button>}
              {currentStep < fromList.length - 1 && (
                <Button onClick={nextStep}>下一步</Button>
              )}
              {currentStep === fromList.length - 1 && (
                <Button onClick={onSubmit} type='primary'>
                  提交
                </Button>
              )}
            </Space>
          </Col>
        </Row>
      </div>
      <Prompt
        when={isDirty && !isSaved}
        message='当前表单还未保存，是否离开本页面'
      />
    </div>
  );
};

export default StepForm;
