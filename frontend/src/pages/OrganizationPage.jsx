import React from "react";
import { useNavigate } from "react-router-dom";
import zakatfoundation from "../images/Zakatfoundation.png";
import caritasfoundation from "../images/Caritasimage.png";

const OrganizationPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="container mb-5">
        <div className="row mt-5">
          <h2 className="text-center text-uppercase mt-5 py-5">
            Choose your Organization
          </h2>
        </div>
        <div className="row">
          <div className="col-md-6">
            <h3 className="text-danger text-center mb-5 text-uppercase">
              Donate Zakat
            </h3>
            <div
              onClick={() =>
                navigate("/donate-zakat", { state: "Zakat Foundation" })
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
                  <h4 className="text-uppercase mt-3 text-secondary ">
                    Zakat Foundation
                  </h4>
                  <p className="text-dark">
                    Zakat is the amount of money each Muslim adult should give
                    to supply categories of people.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <h3 className="text-danger text-center mb-5 text-uppercase">
              Donate Tithe
            </h3>
            <div
              onClick={() =>
                navigate("/donate-tithe", { state: "Caritas Foundation" })
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
                  <h4 className="text-uppercase mt-3 text-secondary ">
                    Caritas Foundation
                  </h4>
                  <p className="text-dark">
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
