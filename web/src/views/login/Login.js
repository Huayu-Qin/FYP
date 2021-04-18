import React from 'react';
import styles from './Login.module.css'

import { Row, Col, Form, Input, Button, message } from 'antd';
import logo from '../../assets/image/login-logo.png';
import { login } from "../../api";

const layout = {
  labelCol: {
    span: 10,
  },
  wrapperCol: {
    span: 14,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 16,
    span: 8,
  },
};

const onFinishFailed = (errorInfo) => {
  console.log('Failed:', errorInfo);
};

export default class Login extends React.Component {
  constructor(props) {
    super(props);
  }

  onFinish = async (values) => {
    const param = {
      url: '/login',
    }
    Object.assign(param, values)
    const res = await login(param)
    if (res.code == 0) {
      localStorage.setItem("token", res.data.token.token)
      message.success(res.message);
      const { username, type, nickname } = res.data.user
      sessionStorage.setItem("username", username)
      sessionStorage.setItem("usertype", type)
      sessionStorage.setItem("nickname", nickname)
      this.props.history.push("/home");
    } else {
      message.error(res.message);
    }
  };

  render() {
    return (
      <div className={styles.page}>
        <Row gutter={16}>
          <Col span={4}></Col>
          <Col span={10}>
            <img src={logo} />
          </Col>
          <Col span={10}>
            <Row>
              <span className={styles.title}>Mr.Care Your Health Assistant</span>
            </Row>
            <Row>
              <Form
                {...layout}
                ref={this.formRef}
                name="basic"
                initialValues={{
                  remember: true,
                }}
                onFinish={this.onFinish}
                onFinishFailed={onFinishFailed}
              >
                <Form.Item
                  label="Username"
                  name="username"
                  rules={[
                    {
                      required: true,
                      message: 'Please input your username!',
                    },
                  ]}
                >
                  <Input />
                </Form.Item>

                <Form.Item
                  label="Password"
                  name="password"
                  rules={[
                    {
                      required: true,
                      message: 'Please input your password!',
                    },
                  ]}
                >
                  <Input.Password />
                </Form.Item>

                <Form.Item {...tailLayout}>
                  <Button type="primary" htmlType="submit">
                    Login
                    </Button>
                </Form.Item>
              </Form>
            </Row>
          </Col>
        </Row>

      </div>
    )
  }
}
