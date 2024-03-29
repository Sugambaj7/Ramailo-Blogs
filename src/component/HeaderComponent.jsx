import { React, useContext, useEffect } from "react";
import "../App.css";
import { Link } from "react-router-dom";
import { UserContext } from "../UserContext";

export const Header = () => {
  const { setUserInfo, userInfo } = useContext(UserContext);
  useEffect(() => {
    //login xa ki chaina check(authentication)
    fetch("http://localhost:4001/login/profile", {
      credentials: "include",
    }).then((response) => {
      response.json().then((userInfo) => {
        setUserInfo(userInfo);
      });
    });
  }, []);

  function logout() {
    document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    localStorage.clear();
    setUserInfo(null);
  }
  console.log(userInfo, "header ko userInfo");
  const email = userInfo?.email;
  const role = userInfo?.role;

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
            {email && role !== "admin" && (
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
            {email && role == "admin" && (
              <>
                <Link to="/dashboard">Dashboard</Link>
                <a className="cursor-pointer" onClick={logout}>
                  Logout
                </a>
              </>
            )}
          </nav>
        </div>
      </div>

      <div></div>
    </header>
  );
};
