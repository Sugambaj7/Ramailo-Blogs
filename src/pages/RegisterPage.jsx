import { React, useState, useEffect } from "react";
import { Button, Checkbox } from "antd";
import { Alert, Form, Input, Typography } from "antd";
import { Link } from "react-router-dom";
import image from "../images/blog.png";
import "../App.css";

export const RegisterPage = () => {
  // const [username, setUsername] = useState("");
  // const [password, setPassword] = useState("");
  const [form] = Form.useForm();

  const onFinish = (values) => {
    Register(values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  useEffect(() => {
    document.body.style.backgroundColor = "#B0DED5";
    return () => {
      document.body.style.backgroundColor = "white";
    };
  }, []);

  async function Register(data) {
    const response = await fetch("http://localhost:4001/register", {
      method: "POST",
      body: JSON.stringify(data),
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

    // <div className="bg-white border border-custombordergrey">
    //   <div className="mt-5">
    //     <Form
    //       name="basic"
    //       labelCol={{
    //         span: 8,
    //       }}
    //       wrapperCol={{
    //         span: 16,
    //       }}
    //       style={{
    //         maxWidth: 600,
    //       }}
    //       initialValues={{
    //         remember: true,
    //       }}
    //       onFinish={onFinish}
    //       onFinishFailed={onFinishFailed}
    //       autoComplete="off"
    //     >
    //       <Form.Item
    //         label="Name"
    //         name="name"
    //         rules={[
    //           {
    //             required: true,
    //             message: "Please input your name!",
    //           },
    //         ]}
    //       >
    //         <Input />
    //       </Form.Item>

    //       <Form.Item
    //         label="Email"
    //         name="email"
    //         rules={[
    //           {
    //             required: true,
    //             message: "Please input your email!",
    //           },
    //         ]}
    //       >
    //         <Input />
    //       </Form.Item>

    //       <Form.Item
    //         label="Mobile No."
    //         name="mobile"
    //         rules={[
    //           {
    //             required: true,
    //             message: "Please input your mobile number!",
    //           },
    //         ]}
    //       >
    //         <Input />
    //       </Form.Item>

    //       <Form.Item
    //         label="Password"
    //         name="password"
    //         rules={[
    //           {
    //             required: true,
    //             message: "Please input your password!",
    //           },
    //         ]}
    //       >
    //         <Input.Password />
    //       </Form.Item>

    //       <Form.Item
    //         label="Confirm Password"
    //         name="confirm-psw"
    //         rules={[
    //           {
    //             required: true,
    //             message: "Please input your password!",
    //           },
    //         ]}
    //       >
    //         <Input.Password />
    //       </Form.Item>

    //       <Form.Item
    //         name="remember"
    //         valuePropName="checked"
    //         wrapperCol={{
    //           offset: 8,
    //           span: 16,
    //         }}
    //       >
    //         <Checkbox>Remember me</Checkbox>
    //       </Form.Item>

    //       <Form.Item
    //         wrapperCol={{
    //           offset: 8,
    //           span: 16,
    //         }}
    //       >
    //         <Button htmlType="submit">Submit</Button>
    //       </Form.Item>
    //     </Form>
    //   </div>
    // </div>
    <>
      <div className="flex justify-center items-center h-screen">
        <div className="grid lg:grid-cols-2 md:grid-cols-1 m-5 border border-white w-[70%] ">
          <div className="border">
            <img src={image} className="h-[70vh]" alt="" />
          </div>
          <div className="flex flex-col bg-white h-[70vh]">
            <div className=" flex-1"></div>
            <div className="flex-1">
              <Form
                name="dependencies"
                form={form}
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
                className="login pl-8 pr-16"
                // onSubmit={login}
              >
                <h1 className="pl-20">Register</h1>
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
                  label="Mobile"
                  name="mob"
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
                  label="Password"
                  name="Password"
                  rules={[
                    {
                      required: true,
                    },
                  ]}
                >
                  <Input />
                </Form.Item>

                {/* Field */}
                <Form.Item
                  label="Confirm Password"
                  name="Password2"
                  dependencies={["Password"]}
                  rules={[
                    {
                      required: true,
                    },
                    ({ getFieldValue }) => ({
                      validator(_, value) {
                        if (!value || getFieldValue("Password") === value) {
                          return Promise.resolve();
                        }
                        return Promise.reject(
                          new Error(
                            "The new password that you entered do not match!"
                          )
                        );
                      },
                    }),
                  ]}
                >
                  <Input />
                </Form.Item>

                <Form.Item
                  wrapperCol={{
                    offset: 8,
                    span: 16,
                  }}
                >
                  <button className="bg-customgreen">Register</button>
                  <p className="mt-3 ">
                    <Link to="/login">Already Registered? Login here!!!</Link>
                  </p>
                </Form.Item>
              </Form>
            </div>
            <div className="flex-1"></div>
          </div>
        </div>
      </div>
    </>
  );
};
