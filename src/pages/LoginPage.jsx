import { React, useState, useContext, useEffect } from "react";
import "../App.css";
import { Link, Navigate } from "react-router-dom";
import { UserContext } from "../UserContext";
import image from "../images/blog.png";
import { Button, Checkbox, Form, Input } from "antd";
import { AndDesign } from "../component/AndDesign";

export const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);
  const { setUserInfo } = useContext(UserContext);

  const onFinish = (values) => {
    console.log("Success:", values);
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

  async function login(event) {
    event.preventDefault();
    const response = await fetch("http://localhost:4001/login", {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: { "Content-Type": "application/json" },
      credentials: "include",
    });

    if (response.ok) {
      response.json().then((userInfo) => {
        setUserInfo(userInfo);
        setRedirect(true);
      });
    } else {
      alert("login failed");
    }
  }

  if (redirect) {
    return <Navigate to="/" />;
  }
  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <div className="grid lg:grid-cols-2 md:grid-cols-1 m-5 border border-white w-[70%] ">
          <div className="border">
            <img src={image} className="h-[70vh]" alt="" />
          </div>
          {/* <div className="bg-white"> */}
          <div className="flex flex-col bg-white h-[70vh]">
            <div className=" flex-1"></div>
            <div className="flex-1">
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
                className="login pl-8 pr-8"
              >
                <h1>Login</h1>
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
                  <button className="bg-customgreen">Login</button>
                  <p className="mt-3 ">
                    <Link to="/register">New? Register here!!!</Link>
                  </p>
                </Form.Item>
              </Form>
              {/* <form className="login pl-8 pr-8" action="" onSubmit={login}>
                <h1>Login</h1>
                <label> Username </label>
                <input
                  type="text"
                  placeholder="username"
                  value={username}
                  onChange={(event) => setUsername(event.target.value)}
                />
                <label> Password</label>
                <input
                  type="password"
                  placeholder="password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                />
                <button className="bg-customgreen">Login</button>
                <p className="mt-3 underline">
                  <Link to="/register">New? Register here!!!</Link>
                </p>
              </form> */}
            </div>
            <div className="flex-1"></div>
          </div>
          {/* </div> */}
        </div>
      </div>
    </>
  );
};
