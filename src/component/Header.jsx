import React from "react";
import "../App.css";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header>
      <Link to="/">
        <p className="logo">Ramailo Blogs</p>
      </Link>

      <nav>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
      </nav>
    </header>
  );
};
