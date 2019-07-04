import React, { useState } from "react";
import PopUpModal from "./popUpModal";
import Logo from "./Logo"

export default function Header() {
  const [modalLoginOpen, setModalLoginOpen] = useState(false);
  const setHeaderModal = () => {
    setModalLoginOpen(false);
  };
  return (
    <div>
      <header>
        <nav>
          <div className="row">
            <Logo />
            <ul className="main-nav js--main-nav">
              <li
                onClick={() => {
                  setModalLoginOpen(true);
                }}
              >
                <a href="#login">Login</a>
              </li>
              <li>
                <a href="#">Sign up</a>
              </li>
            </ul>
            <a className="mobile-nav-icon js--nav-icon" href="/">
              <i className="ion-navicon-round" />
            </a>
          </div>
        </nav>
        <div className="hero-text-box">
          <h1 className="caption">
            Goodbye junk food.
            <br />
            Hello super healthy meals.
          </h1>
          <a className="btn btn-full js--scroll-to-plans" href="/#">
            I'm hungry
          </a>
        </div>
      </header>
      <PopUpModal
        modalLoginOpen={modalLoginOpen}
        setHeaderModal={setHeaderModal}
      />
    </div>
  );
}
