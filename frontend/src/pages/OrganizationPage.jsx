import React from "react";
import { useNavigate } from "react-router-dom";
import zakatfoundation from "../images/Zakatfoundation.png";
import caritasfoundation from "../images/Caritasimage.png";
import zakatorg1 from "../images/zakatorg1.png";
import zakatorg2 from "../images/zakatorg2.jpeg";
import titheorg1 from "../images/tithingorg1.png";
import titheorg2 from "../images/titheorg2.jpg";

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
            <div
              onClick={() =>
                navigate("/donate-zakat", { state: "Shaukat Khanum" })
              }
              className="text-danger text-decoration-none my-3 cursor-pointer"
            >
              <div className="d-flex">
                <img
                  className="rounded-circle border border-3 border-danger"
                  src={zakatorg1}
                  alt="Shaukat Khanum"
                  height={150}
                  width={150}
                />
                <div className="ms-3 mt-3">
                  <h4 className="text-uppercase mt-3  text-secondary">
                    Shaukat Khanum
                  </h4>
                  <p className="text-dark">
                    It is the first project of the Shaukat Khanum Memorial
                    Trust, a charitable organization.
                  </p>
                </div>
              </div>
            </div>
            <div
              onClick={() =>
                navigate("/donate-zakat", { state: "Siut Donate" })
              }
              className="text-danger text-decoration-none my-3 cursor-pointer"
            >
              <div className="d-flex">
                <img
                  className="rounded-circle border border-3 border-danger"
                  src={zakatorg2}
                  alt="Siut Donate"
                  height={150}
                  width={150}
                />
                <div className="ms-3 mt-3">
                  <h4 className="text-uppercase mt-3  text-secondary">
                    Siut Donate
                  </h4>
                  <p className="text-dark">
                    Purifying and blessing your wealth.
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
            <div
              onClick={() =>
                navigate("/donate-tithe", { state: "Sprituis Helping" })
              }
              className="text-danger text-decoration-none my-3 cursor-pointer"
            >
              <div className="d-flex">
                <img
                  className="rounded-circle border border-3 border-danger"
                  src={titheorg1}
                  alt="Sprituis Helping"
                  height={150}
                  width={150}
                />
                <div className="ms-3 mt-3">
                  <h4 className="text-uppercase mt-3 text-secondary ">
                    Sprituis Helping
                  </h4>
                  <p className="text-dark">We are Habitat for Humanity.</p>
                </div>
              </div>
            </div>
            <div
              onClick={() =>
                navigate("/donate-tithe", { state: "Tithing Partners" })
              }
              className="text-danger text-decoration-none my-3 cursor-pointer"
            >
              <div className="d-flex">
                <img
                  className="rounded-circle border border-3 border-danger"
                  src={titheorg2}
                  alt="Tithing Partners"
                  height={150}
                  width={150}
                />
                <div className="ms-3 mt-3">
                  <h4 className="text-uppercase mt-3 text-secondary">
                    Tithing Partners
                  </h4>
                  <p className="text-dark">We Give Because We Get it.</p>
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
