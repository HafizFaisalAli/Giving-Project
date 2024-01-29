import React from "react";
import { useSelector } from "react-redux";
import StripeContainer from "../components/StripeContainer";

const PayNow = () => {
  const { donationInfo } = useSelector((state) => state.donate);

  return (
    <>
      <div className="container mt-5 pt-5">
        <div className="row">
          <div className="col-md-6 mt-4">
            <div className="">
              <h3 className="text-success mt-5">Complete Your donation!</h3>
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
          <div className="col-md-6 mt-5">
            <StripeContainer />
          </div>
        </div>
      </div>
    </>
  );
};

export default PayNow;
