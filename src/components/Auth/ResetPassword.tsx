import { useState } from 'react';
import { Button, Form, Input } from 'antd';
import { useSearchParams } from 'react-router-dom';

import { authAPI } from '../../api/authAPI';
import { Message } from '../Messages/Message';
import { ErrorMessage } from '../Messages/ErrorMessage';
import { Loader } from '../Loader/Loader';

const ResetPassword = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  const [searchParams] = useSearchParams();

  const token = searchParams.get('token');
  const email = searchParams.get('email');

  const onFinish = async (values: any) => {
    setIsLoading(true);

    const res = await authAPI.updateForgottenPassword({ 
      password: values.password, 
      confirmPassword: values.confirmPassword, 
      token, 
      email 
    });

    if(String(res.status).startsWith('2')) {
      setMessage('The message was successfully delivered.');
    } else {
      setError('Something went wrong.');
      return;
    }

    setError('');
    setIsLoading(false);
  };

  return (
    <div className="auth-layout">

      <div className="auth-logo">
        <img src="logo.png" alt="logo" width="150px" />
      </div>

      { isLoading && <Loader /> }

      {
        !message ?
          <Form
            name="reset-password"
            className="auth-form"
            onFinish={onFinish}
          >
            <Form.Item
              name="password"
              rules={[{ required: true, message: 'Please input your password!' }]}
            >
              <Input
                type="password"
                placeholder="Password"
              />
            </Form.Item>

            <Form.Item
              name="confirmPassword"
              rules={[{ required: true, message: 'Please input your password!' }]}
            >
              <Input
                type="password"
                placeholder="Confirm password"
              />
            </Form.Item>

            <ErrorMessage error={error} />

            <Form.Item>
              <Button type="primary" htmlType="submit" className="auth-form-button">
                Confirm
              </Button>
            </Form.Item>
          </Form>
          :
          <Message message={message} />
      }
    </div>
  )
}

export default ResetPassword;