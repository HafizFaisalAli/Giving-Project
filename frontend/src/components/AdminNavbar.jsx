import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { removeUserInfo } from "../redux/slices/authSlice";
import { FaBars } from "react-icons/fa";

const AdminNavbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogout = () => {
    dispatch(removeUserInfo());
    navigate("/");
  };
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-white fixed-top shadow">
        <div className="container">
          <Link
            to="/admin/dashboard"
            className="d-flex flex-row text-decoration-none text-dark"
          >
            <span className="fs-2">
              <FaBars />
            </span>
            <h2 className="pt-2 ps-2">Dashboard</h2>
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
            // tabindex="-1"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
                <Link
                  to="/admin/dashboard"
                  className="d-flex flex-row text-decoration-none"
                >
                  <span className="fs-2 text-dark">
                    <FaBars />
                  </span>
                  <h2 className="pt-2 ps-2 text-dark">Dashboard</h2>
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
              <ul className="navbar-nav justify-content-end fs-5 flex-grow-1 pe-3">
                <li className="nav-item">
                  <Link to="/" className="text-decoration-none">
                    <button
                      className="nav-link btn btn-outline px-3"
                      role="button"
                    >
                      Home
                    </button>
                  </Link>
                </li>
                <li className="nav-item" data-bs-dismiss="offcanvas">
                  <Link to="/admin/donatezakat" className="text-decoration-none">
                    <button
                      className="nav-link btn btn-outline px-3 text-purple-700"
                      role="button"
                    >
                      Zakat
                    </button>
                  </Link>
                </li>
                <li className="nav-item" data-bs-dismiss="offcanvas">
                  <Link to="/admin/donatetithe" className="text-decoration-none">
                    <button
                      className="nav-link btn btn-outline px-3"
                      role="button"
                    >
                      Tithe
                    </button>
                  </Link>
                </li>
                <li className="nav-item" data-bs-dismiss="offcanvas">
                  <Link to="/admin/total" className="text-decoration-none">
                    <button
                      className="nav-link btn btn-outline px-3"
                      role="button"
                    >
                      Total
                    </button>
                  </Link>
                </li>
                <li className="nav-item">
                  <button
                    className="nav-link btn btn-outline px-3 text-danger"
                    onClick={handleLogout}
                    role="button"
                  >
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default AdminNavbar;
