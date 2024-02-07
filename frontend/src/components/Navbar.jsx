import React from "react";
import { Link, useNavigate } from "react-router-dom";
import LogoPic from "../images/givingLogo.png";
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
      <nav className="navbar navbar-expand-lg fixed-top navbarcolor shadow">
        <div className="container">
          <Link to="/" className="navbar-brand text-danger fs-3">
            <img src={LogoPic} alt="getfollowerlogo" width={190} height={70} />{" "}
          </Link>
          <button
            className="navbar-toggler shadow-none border-0"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="offcanvas offcanvas-start"
            tabIndex="-1"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
                <Link to="/" className="navbar-brand text-danger fs-3">
                  <img
                    src={LogoPic}
                    alt="getfollowerlogo"
                    width={190}
                    height={70}
                  />{" "}
                </Link>
              </h5>
              <button
                type="button"
                className="btn-close shadow-none border-0"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-center fs-5 flex-grow-1 pt-2">
                <li
                  className="nav-item"
                  data-bs-dismiss="offcanvas"
                  onClick={scrollToTop}
                >
                  <Link to="/" className="text-decoration-none">
                    <button
                      className="nav-link btn btn-outline px-3 text-danger text-uppercase"
                      role="button"
                    >
                      Home
                    </button>
                  </Link>
                </li>
                <li
                  className="nav-item"
                  data-bs-dismiss="offcanvas"
                  onClick={scrollToTop}
                >
                  <Link to="/about" className="text-decoration-none">
                    <button
                      className="nav-link btn btn-outline px-3 text-danger text-uppercase"
                      role="button"
                    >
                      About
                    </button>
                  </Link>
                </li>
                <li
                  className="nav-item"
                  data-bs-dismiss="offcanvas"
                  onClick={scrollToTop}
                >
                  <Link to="/zakat" className="text-decoration-none">
                    <button
                      className="nav-link btn btn-outline px-3 text-danger text-uppercase"
                      role="button"
                    >
                      Zakat
                    </button>
                  </Link>
                </li>
                <li
                  className="nav-item"
                  data-bs-dismiss="offcanvas"
                  onClick={scrollToTop}
                >
                  <Link to="/tithing" className="text-decoration-none">
                    <button
                      className="nav-link btn btn-outline px-3 text-danger text-uppercase"
                      role="button"
                    >
                      Tithe
                    </button>
                  </Link>
                </li>
                {userInfo ? (
                  <li className="nav-item">
                    <Link
                      to="/admin/dashboard"
                      className="text-decoration-none"
                    >
                      <button
                        className="nav-link btn btn-outline px-3 text-danger text-uppercase"
                        role="button"
                      >
                        Dashboard
                      </button>
                    </Link>
                  </li>
                ) : (
                  <li></li>
                )}
              </ul>
              <li
                className="nav-item mt-2 ms-3"
                data-bs-dismiss="offcanvas"
                onClick={scrollToTop}
              >
                <Link
                  to="/organization"
                  className="nav-lik text-decoration-none"
                >
                  <button
                    className="btn btn-danger btn-lg px-3 text-uppercase"
                    role="button"
                  >
                    Donation
                  </button>
                </Link>
              </li>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
