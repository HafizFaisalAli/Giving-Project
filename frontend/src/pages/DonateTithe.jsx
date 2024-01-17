import React from "react";
import donatetithe from "../images/Donate-tithe.jpg";
import Form from "../components/Form";

const DonateTithe = () => {
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
              Donation Amount
            </p>
            <Form />
          </div>
        </div>
      </div>
    </>
  );
};

export default DonateTithe;
