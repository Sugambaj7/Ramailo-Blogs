import React from "react";
import "../App.css";

export const LoginPage = () => {
  return (
    <form className="login" action="">
      <h1>Login</h1>
      <input type="text" placeholder="username" />
      <input type="password" placeholder="password" />
      <button>Login</button>
    </form>
  );
};
