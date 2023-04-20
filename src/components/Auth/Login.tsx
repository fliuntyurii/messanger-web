import { Button, Form, Input } from 'antd';
import { useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

import { login } from "../../store/authReducer";
import { LOGIN_SUCCESS } from '../../constants/actions';
import { Loader } from '../Loader/Loader';
import { ErrorMessage } from '../Messages/ErrorMessage';

import './auth.scss';

export const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  const onFinish = async (values: any) => {
    setIsLoading(true);
    login(values.email, values.password).then(({ success, data }: any) => {
      if (success) {
        dispatch({ type: LOGIN_SUCCESS, user: data });
        navigate('/');
      } else {
        setError(data);
      }
      setIsLoading(false);
    });
  };

  return (
    <div className="auth-layout">

      { isLoading && <Loader /> }

      <div className="auth-logo">
        <img src="logo.png" alt="logo" width="150px" />
      </div>

      <Form
        name="login"
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
              message: 'Please, input your email!',
            },
          ]}
        >
          <Input placeholder="Email" />
        </Form.Item>

        <Form.Item
          name="password"
          rules={[{ required: true, message: 'Please, input your password!' }]}
        >
          <Input.Password
            type="password"
            placeholder="Password"
          />
        </Form.Item>

        <ErrorMessage error={error} />

        <Form.Item>
          <Button type="primary" htmlType="submit" className="auth-form-button">
            Login
          </Button>         
        </Form.Item>

        <Form.Item className="auth-button">
          <a href="/forgot-password">
            Forgot password
          </a>
        </Form.Item>

        <Form.Item className="auth-button">
          <a href="/register">
            Create an account
          </a>
        </Form.Item>
      </Form>
    </div>
  )
}