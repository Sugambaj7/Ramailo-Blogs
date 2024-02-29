import { React, useEffect, useState } from "react";
import "../App.css";
import { Link } from "react-router-dom";

export const Header = () => {
  const [username, setUsername] = useState(null);
  useEffect(() => {
    fetch("http://localhost:4001/profile", {
      credentials: "include",
    }).then((response) => {
      response.json().then((userInfo) => {
        setUsername(userInfo.username);
      });
    });
  }, []);

  function logout() {
    fetch("http://localhost:4001/logout", {
      credentials: "include",
      method: "POST",
    });
    setUsername(null);
  }
  console.log(username, "from user anaksdflaksjdlfka");
  return (
    <header>
      <Link to="/">
        <p className="logo">Ramailo Blogs</p>
      </Link>

      <nav>
        {username && (
          <>
            <Link to="/create">Create new blog</Link>
            <a onClick={logout}>Logout</a>
          </>
        )}
        {!username && (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </>
        )}
      </nav>
    </header>
  );
};
