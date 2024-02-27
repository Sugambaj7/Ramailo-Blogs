import React from "react";
import "../App.css";

export const RegisterPage = () => {
  return (
    <form className="register" action="">
      <h1>Register</h1>
      <input type="text" placeholder="username" />
      <input type="password" placeholder="password" />
      <button>Register</button>
    </form>
  );
};
