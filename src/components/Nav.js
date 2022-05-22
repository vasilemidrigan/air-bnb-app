import React from "react";

import logo from "../img/logo.jpg";

export default function Nav() {
  return (
    <div className="nav">
      <div className="nav__logo">
        <img src={logo} className="nav__logo__img" alt="Air BNB Logo" />
      </div>
    </div>
  );
}
