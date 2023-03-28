import {
  Button,
  Col,
  Form,
  Input,
  Row,
} from 'antd';
import React from 'react';
import { authAPI } from '../../api/authAPI';

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 8 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 16 },
  },
};

const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};

export const Register: React.FC = () => {
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    authAPI.register(values.name, values.email, values.password, values.username);
  };

  return (
    <div className="auth-layout">
      <Form
        {...formItemLayout}
        form={form}
        className="auth-form"
        name="register"
        onFinish={onFinish}
        scrollToFirstError
      >
        <Form.Item
          name="email"
          label="Email"
          rules={[
            {
              type: 'email',
              message: 'The input is not valid Email!',
            },
            {
              required: true,
              message: 'Please input your Email!',
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="password"
          label="Password"
          rules={[
            {
              required: true,
              message: 'Please input your password!',
            },
          ]}
          hasFeedback
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          name="confirm"
          label="Confirm Password"
          dependencies={['password']}
          hasFeedback
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
          <Input.Password />
        </Form.Item>

        <Form.Item
          name="username"
          label="Username"
          tooltip="What do you want others to call you?"
          rules={[{ required: true, message: 'Please input your username!', whitespace: true }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="name"
          label="Name"
          rules={[{ required: true, message: 'Please input Name' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="bio"
          label="bio"
          rules={[{ required: true, message: 'Please input bio' }]}
        >
          <Input.TextArea showCount maxLength={100} />
        </Form.Item>

        <Form.Item label="Captcha" extra="We must make sure that your are a human.">
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
        </Form.Item>

        <Form.Item {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit">
            Register
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};