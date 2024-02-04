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
      <nav className="navbar navbar-expand-lg fixed-top navbarcolor shadow">
        <div className="container">
          <Link to="/" className="navbar-brand text-danger fs-3">
            <img src={logo} alt="getfollowerlogo" width={50} /> Giving
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
                  <img src={logo} alt="getfollowerlogo" width={50} /> Giving
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
              <ul className="navbar-nav justify-content-end fs-5 flex-grow-1 pt-2 ">
                <li
                  className="nav-item"
                  data-bs-dismiss="offcanvas"
                  onClick={scrollToTop}
                >
                  <Link to="/" className="text-decoration-none">
                    <button
                      className="nav-link btn btn-outline px-3 text-danger"
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
                  <Link to="/Aboutus" className="text-decoration-none">
                    <button
                      className="nav-link btn btn-outline px-3 text-danger"
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
                  <Link to="/Zakatpage" className="text-decoration-none">
                    <button
                      className="nav-link btn btn-outline px-3 text-danger"
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
                  <Link to="/Tithingpage" className="text-decoration-none">
                    <button
                      className="nav-link btn btn-outline px-3 text-danger"
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
                        className="nav-link btn btn-outline px-3 text-danger"
                        role="button"
                      >
                        Dashboard
                      </button>
                    </Link>
                  </li>
                ) : (
                  <li></li>
                )}
                 <li
                  className="nav-item mt-1 ms-3"
                  data-bs-dismiss="offcanvas"
                  onClick={scrollToTop}
                >
                  <Link to="/organization" className="nav-lik text-decoration-none">
                    <button
                      className="btn btn-danger px-3"
                      role="button"
                    >
                      Donation
                    </button>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
