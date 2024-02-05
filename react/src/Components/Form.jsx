import React, { useState } from "react";
import "./Form.css";

export default function Form() {
  const [field, setField] = useState({
    firstName: "",
    email: "",
    password: "",
  });

  const [submitted, setSubmit] = useState(false);
  const [validate, setValidation] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (field.firstName && field.email && field.password) setValidation(true);
    setSubmit(true);
  };

  return (
    <div className="form-container">
      <form className="register-form" onSubmit={handleSubmit}>
        {submitted && validate ? (
          <div className="success-message">Registration successful!</div>
        ) : null}

        <input
          id="first-name"
          className="form-field"
          type="text"
          placeholder="First Name"
          name="firstName"
          value={field.firstName}
          onChange={(e) => {
            setField({ ...field, firstName: e.target.value });
          }}
        />

        {submitted && !field.firstName ? (
          <span>Please enter your Name</span>
        ) : null}

        <input
          id="email"
          className="form-field"
          type="text"
          placeholder="Email"
          name="email"
          value={field.email}
          onChange={(e) => {
            setField({ ...field, email: e.target.value });
          }}
        />

        {submitted && !field.email ? (
          <span>Please enter your email</span>
        ) : null}

        <input
          id="password"
          className="form-field"
          type="password"
          placeholder="Password"
          name="password"
          value={field.password}
          onChange={(e) => {
            setField({ ...field, password: e.target.value });
          }}
        />

        {submitted && !field.password ? (
          <span>Please enter your password</span>
        ) : null}

        <button className="form-field" type="submit">
          Register
        </button>
      </form>
    </div>
  );
}
