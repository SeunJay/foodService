import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo";
import PopUpModal from "./popUpModal";

export default function Nav(props) {
  const [modalLoginOpen, setModalLoginOpen] = useState(false);
  const setHeaderModal = () => {
    setModalLoginOpen(false);
  };
  const { pathname } = props;
  return (
    <div>
      <nav
        style={
          pathname === "/"
            ? {
                background: "rgba(256,256,256,0)",
                height: "60px"
              }
            : { background: "rgba(256,256,256,0)", height: "66px", boxShadow: "5px 5px 5px 5px #000" }
        }
      >
        <div className="row">
          <Logo pathname={pathname} />
          <ul className="main-nav js--main-nav">
            <li>
              <Link
                to="/signup"
                style={
                  pathname === "/"
                    ? {
                        color: "#fff"
                      }
                    : { color: "#000" }
                }
              >
                Sign up
              </Link>
            </li>
            <li
              onClick={() => {
                setModalLoginOpen(true);
              }}
            >
              <Link
                to="/"
                style={
                  pathname === "/"
                    ? {
                        color: "#fff"
                      }
                    : { color: "#000" }
                }
              >
                Login
              </Link>
            </li>
          </ul>
          <Link className="mobile-nav-icon js--nav-icon" href="/">
            <i className="ion-navicon-round" />
          </Link>
        </div>
      </nav>
      <PopUpModal
        modalLoginOpen={modalLoginOpen}
        setHeaderModal={setHeaderModal}
      />
    </div>
  );
}
