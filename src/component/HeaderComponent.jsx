import { React, useContext, useEffect, useState } from "react";
import "../App.css";
import { Link } from "react-router-dom";
import { UserContext } from "../UserContext";

export const Header = () => {
  const { setUserInfo, userInfo } = useContext(UserContext);
  useEffect(() => {
    fetch("http://localhost:4001/login/profile", {
      credentials: "include",
    }).then((response) => {
      response.json().then((userInfo) => {
        setUserInfo(userInfo);
      });
    });
  }, []);

  function logout() {
    // fetch("http://localhost:4001/logout", {
    //   credentials: "include",
    //   method: "POST",
    // });
    // setUserInfo(null);

    document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    localStorage.clear();
    setUserInfo(null);
  }
  const email = userInfo?.email;
  return (
    <header className="flex items-center ">
      <div></div>
      <div className="flex w-[60%] justify-between">
        <Link to="/">
          <div>
            <p className="logo">Ramailo Blogs</p>
          </div>
        </Link>
        <div>
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
        </div>
      </div>

      <div></div>
    </header>
  );
};
