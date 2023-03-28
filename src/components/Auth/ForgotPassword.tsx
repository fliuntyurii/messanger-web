import React from 'react';
import { Button, Form, Input } from 'antd';
import { authAPI } from '../../api/authAPI';

export const ForgotPassword = () => {
  const onFinish = (values: any) => {
    authAPI.forgotPassword(values.email);
  };

  return (
    <div className="auth-layout">
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        onFinish={onFinish}
        autoComplete="off"
      >
        <Form.Item
          label="Email"
          name="email"
          rules={[
            {
              type: 'email',
              message: 'The input is not valid email!',
            },
            {
              required: true,
              message: 'Please input your email!',
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" className="auth-form-button">
            Send Letter
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}