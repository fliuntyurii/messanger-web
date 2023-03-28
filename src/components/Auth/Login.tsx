import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Form, Input } from 'antd';
import { useDispatch } from "react-redux";

import { login } from "../../store/authReducer";
import { authAPI } from '../../api/authAPI';

import './auth.scss';
import { LOGIN_SUCCESS } from '../../constants/actions';
import { useNavigate } from 'react-router-dom';

export const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onFinish = async (values: any) => {
    login(values.email, values.password).then((success: boolean) => {
      if (success) {
        dispatch({ type: LOGIN_SUCCESS });
        navigate('/');
      }
    });
  };

  return (
    <div className="auth-layout">
      <Form
        name="login"
        className="auth-form"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        >
        <Form.Item
          name="email"
          rules={[
            {
              type: 'email',
              message: 'The input is not valid E-mail!',
            },
            {
              required: true,
              message: 'Please input your E-mail!',
            },
          ]}
        >
          <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Email" />
        </Form.Item>
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
        <Form.Item>
          <a className="login-form-forgot" href="/reset-password">
            Forgot password
          </a>
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" className="auth-form-button">
            Log in
          </Button>
          Or <a href="/register">register now!</a>
        </Form.Item>
      </Form>
    </div>
  )
}