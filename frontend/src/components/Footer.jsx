import React from "react";
import logo from "../images/withoutbg.png";
import { Link } from "react-router-dom";
import { IoCall } from "react-icons/io5";
import { BsEnvelopeFill } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

const Footer = () => {
  return (
    <>
      <footer className="navbarcolor">
        <div className="container py-4">
          <div className="row">
            <div className="text mt-4 d-flex">
              <img src={logo} alt="LOGO" height="70px" width="80px" />
              <h2 className="mt-2 text-danger">Giving</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4 ">
              <h3 className="mt-4 ms-5 text-uppercase">Contact Us</h3>
              <div className="px-5 mt-3">
                <Link to="/" className="list-1 d-flex  " onClick={scrollToTop}>
                  Home
                </Link>
                <Link
                  to="/Aboutus"
                  className="list-1 d-flex pt-2 "
                  onClick={scrollToTop}
                >
                  About us
                </Link>

                <Link
                  to="/Zakatpage"
                  className="list-1  d-flex pt-2"
                  onClick={scrollToTop}
                >
                  Zakat
                </Link>

                <Link
                  to="/Tithingpage"
                  className="list-1 d-flex pt-2 "
                  onClick={scrollToTop}
                >
                  Tithing
                </Link>

                <Link className="list-1 d-flex pt-2 ">
                  <span>
                    <IoCall />
                  </span>
                  111-333-567-8976
                </Link>

                <Link className="list-1 d-flex pt-2 ">
                  <span className="mx-1">
                    <BsEnvelopeFill />
                  </span>
                  Givingus@gmail.com
                </Link>
              </div>
            </div>
            <div className="col-md-4 px-3 ">
              <h3 className="mt-4 ms-5 text-uppercase">Zakat</h3>
              <div className="px-5 mt-3">
                <Link className="list-1 d-flex pt-2 ">
                  <span>
                    <IoCall />
                  </span>
                  111-222-333-456
                </Link>
                <Link className="list-1 d-flex pt-2 ">
                  <span className="mx-1">
                    <BsEnvelopeFill />
                  </span>
                  Zakatfoundation@gmail.com
                </Link>
              </div>
            </div>
            <div className="col-md-4 px-1 ">
              <h3 className="mt-4 ms-5 text-uppercase">Caritas</h3>
              <div className="px-5 mt-3">
                <Link className="list-1 d-flex pt-2 ">
                  <span>
                    <IoCall />
                  </span>
                  111-222-446-785
                </Link>
                <Link className="list-1 d-flex pt-2 ">
                  <span className="mx-1">
                    <BsEnvelopeFill />
                  </span>
                  Caritasgiving@gmail.com
                </Link>
              </div>
            </div>
          </div>
          <div className="row float-end">
            <ul className="d-flex">
              <li className="m-2 fs-3 ">
                <Link to="" className="text-danger">
                  <BsFacebook />
                </Link>
              </li>
              <li className="m-2 fs-3 ">
                <Link to="" className="text-danger">
                  <FaInstagram />
                </Link>
              </li>
              <li className="m-2 fs-3 ">
                <Link to="" className="text-danger">
                  <AiOutlineTwitter />
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className=" bg-danger text-center text-white p-2 mt-5">
          <div className="part fs-5">All Right Reserved 2024</div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
