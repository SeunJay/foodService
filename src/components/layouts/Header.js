import React from "react";
import { Link } from "react-router-dom";
import Nav from "./Nav"



export default function Header(props) {
  const {pathname} = props
  return (
    <div>
      <header id="header-background">
        <Nav pathname={pathname}/>
        <div className="hero-text-box">
          <h1 className="caption">
            Goodbye junk food.
            <br />
            Hello super healthy meals.
          </h1>
          <Link className="btn btn-full js--scroll-to-plans" href="/">
            I'm hungry
          </Link>
            <input type="search" className="search-bar" placeholder="search for food"/>
            <button className="search-button" type="button">search</button>
        </div>
      </header>
    </div>
  );
}


