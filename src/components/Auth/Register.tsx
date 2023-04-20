import {
  Button,
  Col,
  Form,
  Input,
  Row,
} from 'antd';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { authAPI } from '../../api/authAPI';
import { ErrorMessage } from '../Messages/ErrorMessage';
import { Loader } from '../Loader/Loader';
import { register } from "../../store/authReducer";
import { REGISTER_SUCCESS } from '../../constants/actions';

const Register: React.FC = () => {
  const [step, setStep] = useState<number>(1);
  const [error, setError] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [username, setUsername] = useState<string>('');

  const [form] = Form.useForm();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onFinish = async (values: any) => {
    setIsLoading(true);

    if(step === 1) {
      setEmail(values.email);
      setPassword(values.password);
      const data = await authAPI.isUserExist({ username: '', email: values.email });
      setIsLoading(false);

      if(data.exist) {
        setError('Email already exist');
        return;
      }
    }

    if(step === 2) {
      setUsername(values.username);
      const data = await authAPI.isUserExist({ username: values.username, email: '' });
      setIsLoading(false);

      if(data.exist) {
        setError('Username already exist');
        return;
      }
    }

    if(step === 3) {
      await register({ email, password, username, name: values.name, bio: values.bio }).then(({ success, data }: any) => {
        if (success) {
          dispatch({ type: REGISTER_SUCCESS, user: data });
          navigate('/');
        } else {
          setError(data);
        }
      });
      setIsLoading(false);
      return;
    }

    setError('');
    setStep(step + 1);
  };

  return (
    <div className="auth-layout">

      { isLoading && <Loader /> }

      <div className="auth-logo">
        <img src="logo.png" alt="logo" width="150px" />
      </div>

      <Form
        form={form}
        className="auth-form"
        name="register"
        onFinish={onFinish}
      >
        {
          step === 1 ?
          <>
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
              <Input placeholder="Email" />
            </Form.Item>

            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  message: 'Please input your password!',
                },
              ]}
            >
              <Input.Password placeholder="Password" />
            </Form.Item>

            <Form.Item
              name="confirm"
              dependencies={['password']}
              rules={[
                {
                  required: true,
                  message: 'Please confirm your password!',
                },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue('password') === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(new Error('The passwords do not match!'));
                  },
                }),
              ]}
            >
              <Input.Password placeholder="Confirm Password" />
            </Form.Item>

            <ErrorMessage error={error} />

            <Form.Item className="auth-button">
              <Button htmlType="submit">
                Next
              </Button>
            </Form.Item>
          </>
          : step === 2 ?

          <>
            <Form.Item
              name="username"
              tooltip="Other users can find you by username"
              rules={[{ required: true, message: 'Please input your username!' }]}
            >
              <Input placeholder="Username" />
            </Form.Item>

            <ErrorMessage error={error} />

            <Form.Item className="auth-button">
              <Button htmlType="submit">
                Next
              </Button>
            </Form.Item>

            <Form.Item className="auth-button">
              <p onClick={() => setStep(step - 1)}>
                Back
              </p>
            </Form.Item>
          </>
          :

          <>
            <Form.Item
              name="name"
              rules={[{ required: true, message: 'Please input Name' }]}
            >
              <Input placeholder="Name" />
            </Form.Item>

            <Form.Item
              name="bio"
              tooltip="Tell about yourself"
              rules={[{ required: true, message: 'Please input bio' }]}
            >
              <Input placeholder="About me" />
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit" className="auth-form-button">
                Register
              </Button>
            </Form.Item>

            <Form.Item className="auth-button">
              <p onClick={() => setStep(step - 1)}>
                Back
              </p>
            </Form.Item>
          </>
        }
        

        

        

        {/* <Form.Item label="Captcha" extra="We must make sure that your are a human.">
          <Row gutter={8}>
            <Col span={12}>
              <Form.Item
                name="captcha"
                noStyle
                // rules={[{ required: true, message: 'Please input the captcha you got!' }]}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Button>Get captcha</Button>
            </Col>
          </Row>
        </Form.Item> */}

        
      </Form>
    </div>
  );
};

export default Register;