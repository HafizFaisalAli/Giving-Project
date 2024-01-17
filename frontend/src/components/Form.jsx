import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";

const Form = () => {
  const [userData, setUserData] = useState({
    amount: 0,
    fullName: "",
    email: "",
  });
  const [errors, setErrors] = useState({});

  const amountRef = useRef();
  const fullNameRef = useRef();
  const emailRef = useRef();

  const validateFrom = () => {
    const newErrors = {};
    if (userData.amount < 1) {
      newErrors.amount = "Donation amount must be greater then 1 Dollars.";
      amountRef.current.focus();
    } else if (userData.fullName.length === 0) {
      newErrors.fullName = "Please enter your name first.";
      fullNameRef.current.focus();
    } else if (userData.fullName.length < 3) {
      newErrors.fullName = "Name must be at least 5 characters";
    } else if (/([a-zA-Z])\1\1/.test(userData.fullName)) {
      newErrors.fullName = "Name cannot contain repetitive characters.";
    } else if (!userData.email.includes("@")) {
      newErrors.email = "Please enter valid email.";
      emailRef.current.focus();
    } else if (userData.email.length === 0) {
      newErrors.email = "Please enter your email first";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
    setUserData((prevInputs) => ({ ...prevInputs, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateFrom()) {
      const { amount, fullName, email} = userData;
      console.log(
        "amount:" + amount,
        "FullName:" + fullName,
        "email:" + email,
   
      );
    } else {
      console.log("Form has validations errors");
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="amount" className="form-label text-uppercase">
            Donation Amount:
          </label>
          <input
            type="number"
            name="amount"
            id="amount"
            placeholder="Enter your donation amount"
            className="form-control"
            value={userData.amount}
            onChange={handleChange}
            ref={amountRef}
          />
        </div>
        <div className="error text-danger"> {errors.amount} </div>
        <div className="mt-2">
          <label htmlFor="fullName" className="form-label text-uppercase">
            Full Name:
          </label>
          <input
            type="text"
            name="fullName"
            id="fullName"
            placeholder="Enter your name"
            className="form-control"
            value={userData.fullName}
            onChange={handleChange}
            ref={fullNameRef}
          />
          <div className="error text-danger"> {errors.fullName} </div>
        </div>
        <div className="">
          <label htmlFor="email" className="form-label text-uppercase mt-2">
            your email
          </label>
          <input
            type="email"
            className="form-control"
            name="email"
            id="email"
            placeholder="Enter your email"
            value={userData.email}
            onChange={handleChange}
            ref={emailRef}
          />
          <div className="error text-danger"> {errors.email} </div>
        </div>
        <div className="d-grid mt-4">
          <button
            type="submit"
            className=" btn btn-outline-danger text-dark fw-bold text-uppercase"
          >
            Donate Now
          </button>
          <Link to="/pay-now" className="d-grid text-decoration-none"></Link>
        </div>
      </form>
    </>
  );
};

export default Form;
