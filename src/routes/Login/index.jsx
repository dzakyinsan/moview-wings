import React from "react";
import { Button, Form, Input, Checkbox } from "antd";
import { Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { onUserLogin } from "./../../redux/actions";

import "./style.scss";

const Login = () => {
  const dispatch = useDispatch();

  const loginOk = useSelector((state) => state.loginReducer.login);

  const onFinish = ({ username, password, is_18 }) => {
    dispatch(onUserLogin(username, password, is_18));
  };

  if (loginOk || localStorage.getItem("email")) return <Redirect to={`/`} />;
  return (
    <div className="flex-center">
      <Form
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        style={{
          maxWidth: 600,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        autoComplete="off"
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[
            {
              required: true,
              message: "Please input your username!",
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
              message: "Please input your password!",
            },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          name="is_18"
          valuePropName="checked"
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Checkbox>sudah 18 tahun</Checkbox>
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
          <Button type="secondary">Register</Button>
        </Form.Item>
      </Form>
    </div>
  );
};
export default Login;
