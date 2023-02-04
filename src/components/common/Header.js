import React from "react";
import logo from "../../img/logo.svg";

export default function Header() {
  return (
    <div className="header">
      <div className="container">
        <div className="header__group">
        <img src={logo} alt="" />
        <nav>
          <a href="">Support</a>
          <a href="" className="btn btn-primary">
            Contact
          </a>
        </nav>
      </div>
      </div>
    </div>
  );
}
