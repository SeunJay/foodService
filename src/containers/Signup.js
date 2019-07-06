import React from "react";
import Nav from "../components/layouts/Nav";
import Tab from "../helpers/Tabs";

export default function Signup() {
  return (
    <div>
      <Nav />
      <div className="wrapper">
        <div className="form-wrapper">
          <Tab />
        </div>
      </div>
    </div>
  );
}
