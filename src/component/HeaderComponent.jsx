import { React, useContext, useEffect, useState } from "react";
import "../App.css";
import { Link } from "react-router-dom";
import { UserContext } from "../UserContext";

export const Header = () => {
  const { setUserInfo, userInfo } = useContext(UserContext);
  useEffect(() => {
    fetch("http://localhost:4001/profile", {
      credentials: "include",
    }).then((response) => {
      response.json().then((userInfo) => {
        setUserInfo(userInfo);
      });
    });
  }, []);

  function logout() {
    fetch("http://localhost:4001/logout", {
      credentials: "include",
      method: "POST",
    });
    setUserInfo(null);
  }
  const email = userInfo?.email;
  // console.log(email, "from ma bata hai");
  return (
    <header>
      <Link to="/">
        <p className="logo">Ramailo Blogs</p>
      </Link>

      <nav>
        {email && (
          <>
            <Link to="/create">Create new blog</Link>
            <a className="cursor-pointer" onClick={logout}>
              Logout
            </a>
          </>
        )}
        {!email && (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </>
        )}
      </nav>
    </header>
  );
};
