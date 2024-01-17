import React from "react";
import { Link } from "react-router-dom";
import donatezakat from "../images/zakatdonate1.png";

const DonateZakat = () => {
  return (
    <>
      <div className="mt-5">.</div>
      <div className="container maincolor my-5 ">
        <div className="row p-4">
          <div className="col-md-7">
            <div>
              <img
                src={donatezakat}
                alt="Donate-tithe"
                className="d-none d-md-block px-3  "
                height={500}
                width={600}
              />
            </div>
          </div>
          <div className="col-md-5">
            <h4 className="text-uppercase display-6 text-center text-danger">
              Donate Zakat
            </h4>
            <p className="text-secondary text-uppercase text-center mt-4">
              Donation Amount
            </p>
            <form>
              <label
                htmlFor="inputB"
                className="form-lable text-uppercase my-3 fs-5 mt-4 "
              >
                Enter amount
              </label>
              <select class="form-select" aria-label="Default select example">
                <option>Currency (PKR)</option>
                <option value="1">Currency (USD)</option>
              </select>
              <div className="">
                <label
                  htmlFor="inputB"
                  className="form-lable text-uppercase my-3 fs-5 mt-2 "
                >
                  your name
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="inputB"
                  id="inputB"
                  placeholder="Enter your name"
                />
              </div>
              <div className="">
                <label
                  htmlFor="inputC"
                  className="form-lable text-uppercase my-3 fs-5  "
                >
                  your email
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="inputC"
                  id="inputC"
                  placeholder="email@example.com"
                />
              </div>
              <div className="row d-grid mt-5 mx-auto">
                <Link
                  to="/pay-now"
                  className=" btn btn-outline-danger text-decoration-none text-dark fw-bold text-uppercase"
                >
                  Donate Now
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default DonateZakat;
