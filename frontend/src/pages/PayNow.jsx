import React from "react";
import { useSelector } from "react-redux";
import StripeContainer from "../components/StripeContainer";
import { useNavigate } from "react-router-dom";

const PayNow = () => {
  const { donationInfo } = useSelector((state) => state.donate);
  const { newDonate } = useSelector((state) => state.doner);
  const navigate = useNavigate();
  return (
    <>
      {newDonate ? (
        navigate("/donatesuccess")
      ) : (
        <div className="container mt-md-5 pt-md-5">
          <div className="row py-5">
            <div className="col-md-6 mt-4">
              <div className="">
                <h1 className="text-danger mt-5">Complete Your donation!</h1>
                <p className="text-secondary mt-4 fs-5">
                  <span className=" fs-5 text-dark">Type: </span>
                  {donationInfo.type}
                </p>
                <p className="text-secondary fs-5">
                  <span className=" fs-5 text-dark"> Organization: </span>
                  {donationInfo.org}
                </p>
                <p className="text-secondary fs-5">
                  <span className=" fs-5 text-dark">Donation: </span>
                  {donationInfo.amount}Rs.
                </p>
                <p className="text-secondary fs-5">
                  <span className=" fs-5  text-dark">Full Name: </span>
                  {donationInfo.fullName}
                </p>
                <p className="text-secondary fs-5">
                  <span className=" fs-5 text-dark">Email: </span>
                  {donationInfo.email}
                </p>
              </div>
            </div>
            <div className="col-md-6 mt-md-5 mt-3 mb-md-0 mb-5">
              <StripeContainer />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PayNow;
