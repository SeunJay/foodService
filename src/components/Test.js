import React from "react";

export default function Test() {
  return (
    <div>
      <header>
        <nav>
          <div className="row">
            {/* <img
            src="resources/img/logo-white.png"
            alt="Omnifood logo"
            className="logo"
          /> */}
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
          {/* <a class="btn btn-full js--scroll-to-plans" href="/#">
          I'm hungry
        </a>
        <a class="btn btn-ghost js--scroll-to-start" href="/#">
          Show me more
        </a> */}
        </div>
      </header>
      <section
        className="section-features js--section-features"
        id="features"
      >
        <div className="row-flex">
          <h2>Get food fast &mdash; not fast food</h2>
          <p className="long-copy">
            Hello, we're Omnifood, your new premium food delivery service. We
            know you're always busy. No time for cooking. So let us take care
            of that, we're really good at it, we promise!
          </p>
        </div>
      </section>
      <footer>
          <p>
            © Copyright 2019 - All Rights Reserved
          </p>
      </footer>
    </div>
  );
}
