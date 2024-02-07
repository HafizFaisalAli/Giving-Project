import React from "react";
import { useNavigate } from "react-router-dom";
import zakatfoundation from "../images/Zakatfoundation.png";
import caritasfoundation from "../images/Caritasimage.png";

const OrganizationPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="container mb-5">
        <div className="row my-3 pt-5">
          <div className="mt-5 pt-5">
            <h1 className="text-center text-uppercase text-danger">
              {" "}
              Choose your <br />
            </h1>
            <h2 className="text-center text-uppercase text-danger text-lg">
              Organization
            </h2>
          </div>
        </div>
        <div className="row py-5">
          <div className="col-md-6">
            <div
              onClick={() =>
                navigate("/donate-zakat")
              }
              className="text-danger text-decoration-none my-3 cursor-pointer"
            >
              <div className="d-flex">
                <img
                  className="rounded-circle border border-3 border-danger"
                  src={zakatfoundation}
                  alt="Zakat foundation"
                  height={150}
                  width={150}
                />
                <div className="ms-3 mt-3">
                  <h4 className="text-uppercase mt-3 text-danger">
                    Zakat Foundation
                  </h4>
                  <p className="text-secondary">
                    Zakat is the amount of money each Muslim adult should give
                    to supply categories of people.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div
              onClick={() =>
                navigate("/donate-tithe")
              }
              className="text-danger text-decoration-none my-3 cursor-pointer"
            >
              <div className="d-flex">
                <img
                  className="rounded-circle border border-3 border-danger"
                  src={caritasfoundation}
                  alt="caritas foundation"
                  height={150}
                  width={150}
                />
                <div className="ms-3 mt-3">
                  <h4 className="text-uppercase mt-3 text-danger">
                    Caritas Foundation
                  </h4>
                  <p className="text-secondary">
                    The living force of love, answering the call of the Gospels.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrganizationPage;
