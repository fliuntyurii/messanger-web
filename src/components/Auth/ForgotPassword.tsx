import { Button, Form, Input } from 'antd';
import { useState } from 'react';

import { authAPI } from '../../api/authAPI';
import { Loader } from '../Loader/Loader';
import { ErrorMessage } from '../Messages/ErrorMessage';
import { Message } from '../Messages/Message';

const ForgotPassword = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isSendEmail, setIsSendEmail] = useState<boolean>(false);
  const [error, setError] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  const onFinish = async (values: any) => {
    setIsLoading(true);
    const res = await authAPI.forgotPassword(values.email);

    if(String(res.status).startsWith('2')) {
      setIsSendEmail(true);
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

      { isLoading && <Loader /> }

      <div className="auth-logo">
        <img src="logo.png" alt="logo" width="150px" />
      </div>

      {
        !isSendEmail ?
        <>
          <Form
            name="forgot-password"
            className="auth-form"
            onFinish={onFinish}
          >
            <Form.Item
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
              <Input placeholder='Email' />
            </Form.Item>

            <ErrorMessage error={error} />

            <Form.Item>
              <Button type="primary" htmlType="submit" className="auth-form-button">
                Send Letter
              </Button>
            </Form.Item>
          </Form>
        </>
        :
        <Message message={message} />
      }
    </div>
  )
}

export default ForgotPassword;