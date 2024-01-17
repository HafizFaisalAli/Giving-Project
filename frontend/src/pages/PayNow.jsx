import React from "react";
import { Link } from "react-router-dom";
import visamastercard from "../images/mastervisafinal.png";

const PayNow = () => {
  return (
    <>
      <div className="mt-3">.</div>
      <div className="container">
        <h2 className="text-center text-secondary text-uppercase mt-5 py-5">
          Choose your payment Method
        </h2>
        <div className="row justify-content-center">
          <div className="col-md-4 text-center text-center">
            <div>
              <img
                src={visamastercard}
                alt="visa-mastercard"
                // height={250}
                width={350}
              />
            </div>
            <Link>
              <div className="text-center">
                <button className="btn btn-outline-success mt-3 ">
                  Pay Via Card
                </button>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default PayNow;
