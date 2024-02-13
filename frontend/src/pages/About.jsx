import React from "react";
import { Link } from "react-router-dom";
import { CiCalculator2 } from "react-icons/ci";
import { FcDonate } from "react-icons/fc";
import { HiInformationCircle } from "react-icons/hi";
import AboutTopPic from "../images/AboutTopPic.png";
import caritas from "../images/Caritasimage.png";
import shaukatkhanum from "../images/shaukatkhanum.png";
const scrollToTop = () => {
  windows.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
const About = () => {
  return (
    <>
      <div className="container-fluid px-0 py-4 mt-5 mx-0 overflow-hidden">
        <div className="row px-0 mt-md-0 mt-4">
          <img
            src={AboutTopPic}
            className="d-block w-100"
            alt="About Top Pic"
          />
        </div>
      </div>
      <div className="container mt-md-3">
        <div className="row">
          <div className="col-lg-12">
            <div className="">
              <div className="text-uppercase text-center mt-md-5 animate__animated animate_fade">
                <h1 className="text-lg text-danger">About</h1>
              </div>
              <h5 className="text-center mt-4">
                Welcome to our platform, where individuals of all faiths come
                together to fulfill their religious obligations through
                charitable giving. We provide a trusted space for Muslims to
                fulfill their Zakat and Christians to contribute their tithes,
                fostering unity and compassion in our diverse community.
              </h5>
              <div className="text-center mt-4">
                <p className="text-secondary">
                  Guiding your charitable contributions with accuracy and ease.
                  Transform generosity into impact <br /> with our seamless
                  donation platform.
                </p>
                <div className="my-md-5">
                  <Link
                    to="/organization"
                    className="btn btn-danger text-uppercase px-md-5 px-3"
                    onClick={scrollToTop}
                  >
                    Donate now
                  </Link>
                </div>
                <h1 className="text-uppercase text-danger text-center mt-md-5 pt-5">
                  Our processes
                </h1>
                <div className="row mt-4">
                  <div className="col-lg-4">
                    <CiCalculator2 size={100} />
                    <div className="mt-3">
                      <p className="text-secondary">
                        guiding your charitable contributions with accuracy and
                        ease.
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <FcDonate size={100} />
                    <div className="mt-3">
                      <p className="text-secondary">
                        Transform generosity into impact with our seamless
                        donation platform.
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <HiInformationCircle size={100} />
                    <div className="mt-3">
                      <p className="text-secondary">
                        Read about Zakat and tithing for a clear understanding
                        and significance in your faith.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row my-md-5 py-md-5 py-2">
          <h3 className="text-uppercase text-center text-lg text-danger mb-5">
            Organization <br />
            where you donate
          </h3>
          {/**Zakat foundation portion */}
          <div className="row mt-md-4">
            <div className="col-lg-6">
              <h2 className="text-uppercase text-danger text-center">
                Shaukat Khanum
              </h2>
              <div className="mt-4 text-justify">
                <p className="text-secondary">
                  <span className="fw-bold">Vision:</span>
                  <br />
                  “Our vision is to be the premier institution for the diagnosis
                  and treatment of cancer in the region irrespective of the
                  ability of the patient to pay and to be the leading centre for
                  research into the causes and treatment of cancer in our
                  region.”
                  <br />
                  <span className="fw-bold">Mission:</span>
                  <br />
                  “To act as a model institution to alleviate the suffering of
                  patients with cancer through the application of modern methods
                  of curative and palliative therapy irrespective of their
                  ability to pay, the education of health care professionals and
                  the public and perform research into the causes and treatment
                  of cancer.”
                </p>
              </div>
              <Link
                to="/donate-zakat"
                className="btn btn-danger p-2 mt-md-2 mb-md-0 mb-3"
                onClick={scrollToTop}
              >
                View Organization
              </Link>
            </div>
            <div className="col-lg-6 ps-lg-5">
              <div className="img-fluid d-block w-100 ">
                <img
                  className="d-block w-100 rounded"
                  height={270}
                  width={300}
                  src={shaukatkhanum}
                  alt=""
                />
              </div>
            </div>
          </div>
          {/**Zakat foundation portion end */}

          {/*Tithing caritas portion*/}
          <div className="row flex-lg-row flex-column-reverse mt-5 pt-5">
            <div className="col-lg-6 mb-lg-0 mb-5">
              <div className="img-fluid d-block w-100 ">
                <img
                  className="d-block w-100 rounded pe-lg-5"
                  height={270}
                  width={300}
                  src={caritas}
                  alt=""
                />
              </div>
            </div>
            <div className="col-lg-6">
              <h2 className="text-uppercase text-danger text-center">
                CARITAS FOUNDATION
              </h2>
              <div className="mt-4 text-justify">
                <p className="text-secondary">
                  <span className="fw-bold">Mission</span>
                  <br />
                  Caritas shares the mission of the Catholic Church to serve the
                  poor and to promote charity and justice throughout the world.
                  We are inspired by the Gospels, by the teachings of the
                  Catholic Church and by the hopes of people living in poverty.
                  <br />
                  <span className="fw-bold">Vision</span>
                  <br />
                  Caritas Internationalis is at the heart of the Church’s
                  mission.Its member organisations link together in a
                  confederation to serve the world’s poor, vulnerable,
                  dispossessed and marginalized. Catholic Social Teaching and by
                  the experiences and hopes of people who are disadvantaged and
                  living in poverty.
                </p>
              </div>
              <Link
                to="/donate-tithe"
                className="btn btn-danger p-2 mt-lg-2 float-lg-end mb-lg-0 mb-3"
                onClick={scrollToTop}
              >
                View Organization
              </Link>
            </div>
          </div>
          {/*Caritas portion end*/}
        </div>
      </div>
    </>
  );
};

export default About;
