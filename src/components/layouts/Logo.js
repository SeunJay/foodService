import React from 'react';
import logo from "../img/logo-white.png";

export default function Logo() {
  return (
    <React.Fragment>
      <img src={logo} alt="Omnifood logo" className="logo-white" />
    </React.Fragment>
  );
}
