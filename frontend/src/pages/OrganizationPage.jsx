import React from "react";
import { useNavigate } from "react-router-dom";
import shaukatkhanum from "../images/shaukatkhanum.png";
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
            <div className="text-danger text-decoration-none my-3">
              <div className="d-flex">
                <img
                  className="rounded-circle border border-3 border-danger"
                  src={shaukatkhanum}
                  alt="Zakat foundation"
                  height={150}
                  width={150}
                />
                <div className="ms-3 mt-3">
                  <h4 className="text-uppercase mt-3 text-danger">
                    Shaukat Khanum
                  </h4>
                  <p className="text-secondary">
                    <span className="fw-bold">Vision:</span>
                    <br />
                    “Our vision is to be the premier institution for the
                    diagnosis and treatment of cancer in the region irrespective
                    of the ability of the patient to pay and to be the leading
                    centre for research into the causes and treatment of cancer
                    in our region.”
                    <br />
                    <span className="fw-bold">Mission:</span>
                    <br />
                    “To act as a model institution to alleviate the suffering of
                    patients with cancer through the application of modern
                    methods of curative and palliative therapy irrespective of
                    their ability to pay, the education of health care
                    professionals and the public and perform research into the
                    causes and treatment of cancer.”
                  </p>
                  <button
                    className="btn btn-danger float-end px-5"
                    onClick={() => navigate("/donate-zakat")}
                  >
                    Continue
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="text-danger text-decoration-none my-3">
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
                    <span className="fw-bold">Mission</span>
                    <br />
                    Caritas shares the mission of the Catholic Church to serve
                    the poor and to promote charity and justice throughout the
                    world. We are inspired by the Gospels, by the teachings of
                    the Catholic Church and by the hopes of people living in
                    poverty.
                    <br />
                    <span className="fw-bold">Vision</span>
                    <br />
                    Caritas Internationalis is at the heart of the Church’s
                    mission.Its member organisations link together in a
                    confederation to serve the world’s poor, vulnerable,
                    dispossessed and marginalized. Catholic Social Teaching and by the experiences
                    and hopes of people who are disadvantaged and living in
                    poverty.
                  </p>
                  <button
                    className="btn btn-danger float-end px-5"
                    onClick={() => navigate("/donate-tithe")}
                  >
                    Continue
                  </button>
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
