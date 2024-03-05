import { React, useState } from "react";
import { Button, Checkbox, Form, Input } from "antd";
import "../App.css";

const onFinish = (values) => {
  console.log("Success:", values);
};
const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

export const RegisterPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  async function Register(event) {
    event.preventDefault();

    const response = await fetch("http://localhost:4001/register", {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: { "Content-Type": "application/json" },
    });

    console.log(response);
    if (response.status === 200) {
      alert("register success");
    } else {
      alert("register failed");
    }
  }
  return (
    // <form className="register" action="" onSubmit={Register}>
    //   <h1>Register</h1>
    //   <label>Name</label>
    //   <input type="text" placeholder="name" />
    //   <label>Address</label>
    //   <input type="text" placeholder="addresss" />
    //   <label>Username</label>
    //   <input
    //     type="text"
    //     placeholder="username"
    //     value={username}
    //     onChange={(event) => setUsername(event.target.value)}
    //   />
    //   <label>Password</label>
    //   <input
    //     type="password"
    //     placeholder="password"
    //     value={password}
    //     onChange={(event) => setPassword(event.target.value)}
    //   />
    //   <button>Register</button>
    // </form>
    <div className="bg-white border border-custombordergrey">
      <div className="mt-5">
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
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="Name"
            name="name"
            rules={[
              {
                required: true,
                message: "Please input your name!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Email"
            name="email"
            rules={[
              {
                required: true,
                message: "Please input your email!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Mobile No."
            name="mobile"
            rules={[
              {
                required: true,
                message: "Please input your mobile number!",
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
            label="Confirm Password"
            name="confirm-psw"
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
            name="remember"
            valuePropName="checked"
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Button htmlType="submit">Submit</Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};
