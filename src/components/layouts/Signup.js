import React from "react";
import useForm from "./useForm";
import validate from "./validate";

export default function Signup() {
  const { handleChange, handleSubmit, inputs, errors } = useForm(
    submit,
    validate
  );
  function submit() {
    console.log("submitted");
  }

  return (
    <div>
      <div className="wrapper">
        <div className="form-wrapper">
          <h1>Register here</h1>
          <form onSubmit={handleSubmit} noValidate>
            <div className="firstName">
              <label htmlFor="firstname">First Name</label>
              <input
                type="text"
                placeholder="First Name"
                name="firstName"
                noValidate
                value={inputs.firstName}
                onChange={handleChange}
              />
              {errors.firstName && <p>{errors.firstName}</p>}
            </div>
            <div className="lastName">
              <label htmlFor="lastName">Last Name</label>
              <input
                type="text"
                placeholder="Last Name"
                name="lastName"
                noValidate
                value={inputs.lastName}
                onChange={handleChange}
              />
              {errors.lastName && <p>{errors.lastName}</p>}
            </div>
            <div className="email">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                placeholder="Email"
                name="email"
                noValidate
                value={inputs.email}
                onChange={handleChange}
              />
              {errors.email && <p>{errors.email}</p>}
            </div>
            <div className="password">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                placeholder="Password"
                name="password"
                noValidate
                value={inputs.password}
                onChange={handleChange}
              />
              {errors.password && <p>{errors.password}</p>}
            </div>
            <div className="createAccount">
              <button type="submit">Register</button>
              <small>Already Have an Account</small>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
