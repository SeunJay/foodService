import React from 'react'

export default function Header() {
  return (
    <div>
      <header>
        <nav>
          <div className="row">
            <img
              src="resources/img/logo.png"
              alt="Omnifood logo"
              className="logo-black"
            />
            <ul className="main-nav js--main-nav">
              <li>
                <a href="#login">Login</a>
              </li>
              <li>
                <a href="#sign-up">Sign up</a>
              </li>
            </ul>
            <a className="mobile-nav-icon js--nav-icon" href="/">
              <i className="ion-navicon-round" />
            </a>
          </div>
        </nav>
        <div className="hero-text-box">
          <h1>
            Goodbye junk food.
            <br />
            Hello super healthy meals.
          </h1>
        </div>
      </header>
    </div>
  );
}
