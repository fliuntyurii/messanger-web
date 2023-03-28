import React from 'react';
import { Button, Form, Input } from 'antd';
import { LockOutlined } from '@ant-design/icons';
import { useSearchParams } from 'react-router-dom';

import { authAPI } from '../../api/authAPI';

interface Props {
  token: string,
  email: string
}

export const ResetPassword = () => {
    const [searchParams] = useSearchParams();

  const token = searchParams.get('token');
  const email = searchParams.get('email');

  const onFinish = (values: any) => {
    authAPI.updateForgottenPassword({ 
      password: values.password, 
      confirmPassword: values.confirmPassword, 
      token, 
      email 
    });
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
          name="password"
          rules={[{ required: true, message: 'Please input your Password!' }]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>
        <Form.Item
          name="confirmPassword"
          rules={[{ required: true, message: 'Please input your Password!' }]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Confirm password"
          />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" className="auth-form-button">
            Confirm
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}