import React, { useState, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import donatetithe from "../images/Donate-tithe.jpg";
import { useDispatch } from "react-redux";
import { addDonateInfo } from "../redux/slices/donateSlice";

const DonateTithe = () => {
  const [userData, setUserData] = useState({
    type: "Tithing",
    amount: 0,
    fullName: "",
    email: "",
  });

  const [errors, setErrors] = useState({});
  const location = useLocation();
  const amountRef = useRef();
  const fullNameRef = useRef();
  const emailRef = useRef();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const org = location.state;

  const validateFrom = () => {
    const newErrors = {};
    if (userData.amount < 140) {
      newErrors.amount = "Donation amount must be greater then 140Rs.";
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

  const payload = {
    type: userData.type,
    org: org,
    amount: userData.amount,
    fullName: userData.fullName,
    email: userData.email,
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateFrom()) {
      dispatch(addDonateInfo(payload));
      navigate("/pay-now");
    } else {
      console.log("Form has validations errors");
    }
  };
  return (
    <>
      <div className="mt-5">.</div>
      <div className="container maincolor my-5 ">
        <div className="row">
          <div className="col-md-7 mt-5 pt-2">
            <div>
              <img
                src={donatetithe}
                alt="Donate-tithe"
                className="d-none d-md-block w-100"
                // height={500}
                // width={600}
              />
            </div>
          </div>
          <div className="col-md-5">
            <h4 className="text-uppercase display-6 text-center text-danger">
              Donate Tithe
            </h4>
            <p className="text-secondary text-uppercase text-center mt-4">
              {org}
            </p>

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
                <label
                  htmlFor="email"
                  className="form-label text-uppercase mt-2"
                >
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
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default DonateTithe;
