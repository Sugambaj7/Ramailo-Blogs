import { React, useState } from "react";
import "../App.css";
import { Navigate } from "react-router-dom";

export const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);

  async function login(event) {
    event.preventDefault();
    const response = await fetch("http://localhost:4001/login", {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: { "Content-Type": "application/json" },
      credentials: "include",
    });

    if (response.ok) {
      setRedirect(true);
    } else {
      alert("login failed");
    }
  }

  if (redirect) {
    return <Navigate to="/" />;
  }
  return (
    <form className="login" action="" onSubmit={login}>
      <h1>Login</h1>
      <input
        type="text"
        placeholder="username"
        value={username}
        onChange={(event) => setUsername(event.target.value)}
      />
      <input
        type="password"
        placeholder="password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />
      <button>Login</button>
    </form>
  );
};
