import React from "react";
import { useSelector } from "react-redux";

const PayNow = () => {
  const { donationInfo } = useSelector((state) => state.donate);
  return (
    <>
      <div className="mt-5 pt-5">
        <h1 className="">Pay Now</h1>
        <p>Type: {donationInfo.type}</p>
        <p>Org: {donationInfo.org}</p>
        <p>Amount:{donationInfo.amount}</p>
        <p>Full Name: {donationInfo.fullName}</p>
        <p>Email: {donationInfo.email}</p>
      </div>
    </>
  );
};

export default PayNow;
