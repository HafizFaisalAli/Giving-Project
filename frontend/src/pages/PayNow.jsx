import React from "react";
import { Link } from "react-router-dom";
import jazzcash from "../images/jazzcashfinal.png";
import easypaisa from "../images/easypaisa.jpg";
import visamastercard from "../images/mastervisafinal.png";

const PayNow = () => {
  return (
    <>
      <div className="mt-3">.</div>
      <div className="container">
        <h2 className="text-center text-secondary text-uppercase mt-5 py-5">
          Choose your payment Method
        </h2>
        <div className="row">
          <div className="col-md-4 text-center">
            <div>
              <img src={jazzcash} alt="jazz-cash" height={250} width={250} />
            </div>
            <Link>
              <div className="text-center">
                <button className="btn btn-outline-success mt-3 ">
                  Pay Via jazzcash
                </button>
              </div>
            </Link>
          </div>
          <div className="col-md-4 text-center">
            <div>
              <img src={easypaisa} alt="easy-paisa" height={250} width={250} />
            </div>
            <Link>
              <div className="text-center">
                <button className="btn btn-outline-success mt-3 ">
                  Pay Via easypaisa
                </button>
              </div>
            </Link>
          </div>
          <div className="col-md-4 text-center">
            <div>
              <img
                src={visamastercard}
                alt="visa-mastercard"
                height={250}
                width={250}
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
