import React from "react";
// import useForm from "./useForm";
// import validate from "./validate";
import Nav from "./Nav";
// import { Link } from "react-router-dom";
 import Tab from "./Tabs";

export default function Signup() {
  // const { handleChange, handleSubmit, inputs, errors } = useForm(
  //   submit,
  //   validate
  // );
  // function submit() {
  //   console.log("submitted");
  // }

  return (
    <div>
      <Nav />
      <div className="wrapper">
        <div className="form-wrapper">
          
          {/* <form onSubmit={handleSubmit} noValidate>
            <div className="firstName">
              <label htmlFor="firstname">First Name</label>
              <input
                className={`${errors.firstName && "inputError"}`}
                type="text"
                placeholder="First Name"
                name="firstName"
                noValidate
                value={inputs.firstName}
                onChange={handleChange}
              />
              {errors.firstName && (
                <p className="errors">{errors.firstName}</p>
              )}
            </div>
            <div className="lastName">
              <label htmlFor="lastName">Last Name</label>
              <input
                className={`${errors.lastName && "inputError"}`}
                type="text"
                placeholder="Last Name"
                name="lastName"
                noValidate
                value={inputs.lastName}
                onChange={handleChange}
              />
              {errors.lastName && <p className="errors">{errors.lastName}</p>}
            </div>
            <div className="email">
              <label htmlFor="email">Email</label>
              <input
                className={`${errors.email && "inputError"}`}
                type="email"
                placeholder="Email"
                name="email"
                noValidate
                value={inputs.email}
                onChange={handleChange}
              />
              {errors.email && <p className="errors">{errors.email}</p>}
            </div>
            <div className="password">
              <label htmlFor="password">Password</label>
              <input
                className={`${errors.password && "inputError"}`}
                type="password"
                placeholder="Password"
                name="password"
                noValidate
                value={inputs.password}
                onChange={handleChange}
              />
              {errors.password && <p className="errors">{errors.password}</p>}
            </div>
            <div className="createAccount">
              <button type="submit">Sign up</button>
              <small>Already Have an Account? <Link to="/login">Login</Link></small>
            </div>
          </form> */}
          <Tab />
        </div>
      </div>
    </div>
  );
}
