import { useDispatch, useSelector } from "react-redux";
import { Form, Input, Button, Checkbox } from "antd";
import { LockOutlined, UserOutlined } from "@ant-design/icons";

import { logIn } from "../../redux/auth/operations";
import { selectError } from "../../redux/auth/selectors";

const LoginForm = () => {
  const dispatch = useDispatch();
  const errorMessage = useSelector(selectError);

  const onFinish = async (values) => {
    try {
      await dispatch(logIn(values));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Form
      name="normal_login"
      className="login-form"
      initialValues={{
        remember: false,
      }}
      onFinish={onFinish}
    >
      <Form.Item
        name="email"
        rules={[
          {
            required: true,
            message: "Please input your Email!",
          },
        ]}
      >
        <Input
          prefix={<UserOutlined className="site-form-item-icon" />}
          placeholder="Email"
        />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: "Please input your Password!",
          },
        ]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>
      <Form.Item>
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox
            style={{ color: "#fff", fontSize: "15px", fontWeight: 700 }}
          >
            Remember me
          </Checkbox>
        </Form.Item>
      </Form.Item>

      {errorMessage && (
        <Form.Item>
          <div style={{ color: "red" }}>{"E-mail or password incorrect"}</div>
        </Form.Item>
      )}

      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
          Log in
        </Button>
      </Form.Item>
    </Form>
  );
};

export default LoginForm;
