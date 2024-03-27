import { React, useState, useEffect } from "react";
import { Button, Checkbox } from "antd";
import { Alert, Form, Input, Typography } from "antd";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import { registerSchema } from "../../../api/models/Validation";
import image from "../images/blog.png";
import "../App.css";

const initialValues = {
  name: "",
  email: "",
  mob: "",
  Password: "",
  Password2: "",
};

export const RegisterPage = () => {
  const { values, errors, handleChange, handleSubmit, handleBlur, touched } =
    useFormik({
      initialValues: initialValues,
      validationSchema: registerSchema,
      onSubmit: async (values) => {
        Register(values);
      },
    });

  async function Register(data) {
    const response = await fetch("http://localhost:4001/register", {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" },
    });
    console.log(response);
    if (response.ok) {
      alert("register success");
      window.location.href = "/login";
    } else {
      const data = await response.json();
      if (response.status === 400 && data.exist) {
        alert(data.exist);
      } else {
        alert("register failed");
      }
    }
  }

  const onFinish = () => {
    handleSubmit();
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

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="grid lg:grid-cols-2 md:grid-cols-1 m-5 border border-white w-[70%] ">
        <div className="border">
          <img src={image} className="h-[70vh]" alt="" />
        </div>
        <div className="flex flex-col bg-white h-[70vh]">
          <div className=" flex-1"></div>
          <div className="flex-1">
            <Form
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
            >
              <h1 className="pl-20">Register</h1>
              <Form.Item label="Name" className="mb-2">
                <Input
                  name="name"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.name}
                />
                {errors.name && touched.name ? (
                  <p className="form-error text-red-500">{errors.name}</p>
                ) : null}
              </Form.Item>

              <Form.Item label="Mobile" className="mb-2">
                <Input
                  name="mob"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.mob}
                />
                {errors.mob && touched.mob ? (
                  <p className="form-error text-red-500">{errors.mob}</p>
                ) : null}
              </Form.Item>

              <Form.Item label="Email" className="mb-2">
                <Input
                  name="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                />
                {errors.email && touched.email ? (
                  <p className="form-error text-red-500">{errors.email}</p>
                ) : null}
              </Form.Item>

              <Form.Item label="Password" className="mb-2">
                <Input
                  name="Password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.Password}
                />
                {errors.Password && touched.Password ? (
                  <p className="form-error text-red-500">{errors.Password}</p>
                ) : null}
              </Form.Item>

              <Form.Item label="Confirm Password" className="mb-2">
                <Input
                  name="Password2"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.Password2}
                />
                {errors.Password2 && touched.Password2 ? (
                  <p className="form-error text-red-500">{errors.Password2}</p>
                ) : null}
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
  );
};
