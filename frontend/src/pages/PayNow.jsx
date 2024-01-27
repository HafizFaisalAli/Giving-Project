import React from "react";
import { useSelector } from "react-redux";

const PayNow = () => {
  const { donationInfo } = useSelector((state) => state.donate);
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="mt-5 pt-5 ms-5">
              <h3 className="text-success">Complete your donation!</h3>
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
        </div>
      </div>
    </>
  );
};

export default PayNow;
