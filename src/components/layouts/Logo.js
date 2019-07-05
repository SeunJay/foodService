import React from "react";
import logo from "../img/logo.png";
import logo2 from "../img/logo-white.png";
import { Link } from "react-router-dom";

export default function Logo(props) {
  return (
    <React.Fragment>
      <Link to="/" style={{borderBottom: "none"}}>
        <img
          src={props.pathname === "/" ? logo2 : logo}
          alt="Omnifood logo"
          className="logo"
        />
      </Link>
    </React.Fragment>
  );
}
