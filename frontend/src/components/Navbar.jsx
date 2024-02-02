import React from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../images/withoutbg.png";
import Button from "../components/Button";
import { useSelector } from "react-redux";

const Navbar = () => {
  const { userInfo } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <nav className="navbar fixed-top navbar-expand-lg navbar-light navbarcolor ">
        <div className="container">
          <Link to="/" className="navbar-brand text-danger fs-4">
            <img src={logo} alt=" Logo" height="50px" width="60px" />
            Giving
          </Link>
          <button
            className="navbar-toggler shadow-none border-0"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon "></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav justify-content-center  flex-grow-1">
              <li className="nav-item">
                <Link
                  to="/"
                  className="nav-link text-danger mx-2"
                  onClick={scrollToTop}
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/Aboutus"
                  className="nav-link text-danger mx-2"
                  onClick={scrollToTop}
                >
                  AboutUs
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/Zakatpage"
                  className="nav-link text-danger mx-2"
                  onClick={scrollToTop}
                  aria-current="page"
                >
                  Zakat
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/Tithingpage"
                  className="nav-link text-danger mx-2"
                  onClick={scrollToTop}
                  aria-current="page"
                >
                  Tithing
                </Link>
              </li>
              {userInfo ? (
                <li className="nav-item">
                  <Link
                    to="/admin/dashboard"
                    className="nav-link text-danger mx-2"
                    onClick={scrollToTop}
                    aria-current="page"
                  >
                    Dashboard
                  </Link>
                </li>
              ) : (
                <li></li>
              )}
            </ul>
            <Button />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
