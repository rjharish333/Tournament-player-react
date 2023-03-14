import React from "react";
import { Link } from "react-router-dom";
import "./Button.css";

const Button = ({ children, path, closeMobileMenu }) => {
  return (
    <Link
      className="btn--medium btn--link btn-line-effect"
      to={path}
      onClick={closeMobileMenu}
    >
      {children}
    </Link>
  );
};

export default Button;
