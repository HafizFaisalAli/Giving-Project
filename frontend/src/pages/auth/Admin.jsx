import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { removeUserInfo } from "../../redux/slices/authSlice";
import logo from "../../images/withoutbg.png";
import { FaBars } from "react-icons/fa6";
import NotFound from "../../components/NotFound";

const Admin = () => {
  const { userInfo } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogout = () => {
    dispatch(removeUserInfo());
    navigate("/");
  };
  return (
    <>
      {userInfo ? (
        <div className="container">
          <div className="row">
            <div className="col">
              <div>
                <button
                  Name="btn btn-primary"
                  className="btn border-0 shadow-none"
                  type="button"
                  data-bs-toggle="offcanvas"
                  data-bs-target="#offcanvasExample"
                  aria-controls="offcanvasExample"
                  aria-label="Toggle navigation"
                >
                  <div className="d-flex flex-row">
                    <span className="fs-2">
                      <FaBars />
                    </span>
                    <h2 className="pt-2 ps-2">Dashboard</h2>
                  </div>
                </button>
                <div
                  className="offcanvas offcanvas-start"
                  tabindex="-1"
                  id="offcanvasExample"
                  aria-labelledby="offcanvasExampleLabel"
                >
                  <div className="offcanvas-header">
                    <Link to="/" className="navbar-brand text-danger fs-4">
                      <img src={logo} alt=" Logo" height="50px" width="60px" />
                      Giving
                    </Link>
                    <button
                      type="button"
                      className="btn-close border-0 shadow-none me-3"
                      data-bs-dismiss="offcanvas"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div className="offcanvas-body">
                    <div className="ps-3 d-flex flex-column">
                      <Link
                        to="/"
                        className="text-decoration-none text-dark fs-5 mt-2"
                       
                      >
                        Home
                      </Link>
                      <Link
                        to=""
                        className="text-decoration-none text-dark fs-5 mt-3"
                        data-bs-dismiss="offcanvas"
                      >
                        Donate Zakat
                      </Link>
                      <Link
                        to=""
                        className="text-decoration-none text-dark fs-5 mt-3"
                        data-bs-dismiss="offcanvas"
                      >
                        Donate Tithe
                      </Link>
                      <Link
                        to=""
                        className="text-decoration-none text-dark fs-5 mt-3"
                        data-bs-dismiss="offcanvas"
                      >
                        Total Donation
                      </Link>
                      <Link
                        to=""
                        className="text-decoration-none text-danger fs-5 mt-3"
                        onClick={handleLogout}
                      >
                        Logout
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <NotFound />
      )}
    </>
  );
};

export default Admin;
