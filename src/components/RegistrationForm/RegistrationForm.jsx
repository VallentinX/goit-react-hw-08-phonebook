import { useDispatch, useSelector } from "react-redux";
import { register } from "../../redux/auth/operations";
import { Button, Form, Input } from "antd";

const RegisterForm = () => {
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const { isLoading, error } = useSelector((state) => state.auth);

  const onFinish = (values) => {
    const { name, email, password, confirm } = values;

    if (password === confirm) {
      dispatch(register({ name, email, password }));
      !isLoading && !error && form.resetFields();
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      form.submit();
    }
  };

  const tailFormItemLayout = {
    wrapperCol: {
      xs: {
        span: 24,
        offset: 0,
      },
      sm: {
        span: 16,
        offset: 4,
      },
    },
  };

  return (
    <Form
      form={form}
      name="register"
      onFinish={onFinish}
      size={"default"}
      initialValues={{
        residence: ["zhejiang", "hangzhou", "xihu"],
        prefix: "86",
      }}
      style={{
        width: 300,
      }}
      scrollToFirstError
    >
      <Form.Item
        name="email"
        rules={[
          {
            type: "email",
            message: "E-mail is not valid!",
          },
          {
            required: false,
            message: "Please input your E-mail!",
          },
        ]}
      >
        <Input placeholder="E-mail" onKeyDown={handleKeyDown} />
      </Form.Item>

      <Form.Item
        name="password"
        rules={[
          {
            required: false,
            message: "Please input your password!",
          },
        ]}
        hasFeedback
      >
        <Input.Password placeholder="Password" onKeyDown={handleKeyDown} />
      </Form.Item>

      <Form.Item
        name="confirm"
        dependencies={["password"]}
        hasFeedback
        rules={[
          {
            required: false,
            message: "Please confirm your password!",
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue("password") === value) {
                return Promise.resolve();
              }
              return Promise.reject(new Error("Passwords does not match!"));
            },
          }),
        ]}
      >
        <Input.Password
          placeholder="Confirm Password"
          onKeyDown={handleKeyDown}
        />
      </Form.Item>

      <Form.Item
        name="name"
        rules={[
          {
            required: false,
            message: "Please input your name!",
            whitespace: true,
          },
        ]}
      >
        <Input placeholder="Name" onKeyDown={handleKeyDown} />
      </Form.Item>

      <Form.Item {...tailFormItemLayout}>
        <Button type="primary" htmlType="submit" onClick={() => form.submit()}>
          Register
        </Button>
      </Form.Item>
    </Form>
  );
};

export default RegisterForm;
