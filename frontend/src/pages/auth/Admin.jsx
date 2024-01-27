import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { removeUserInfo } from "../../redux/slices/authSlice";

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
      <div className="container d-flex  mt-5 pt-5  ">
        <div className="row ">
          <div className="col-md-3 ">
            <div>
              <Link to="/">
                <button className="btn btn-primary px-4 ">Home</button>
              </Link>
            </div>
            <div className="mt-3">
              <Link to="/">
                <button className="btn btn-primary px-4">Zakat</button>
              </Link>
            </div>
            <div className="mt-3">
              <Link to="/">
                <button className="btn btn-primary px-4">Tithing</button>
              </Link>
            </div>
            <div className="mt-5 pt-5">
              <Link to="/">
                <button className="btn btn-primary  "> Donations</button>
              </Link>
            </div>
            <div className="mt-4">
              <button className="btn btn-danger px-4" onClick={handleLogout}>
                Logout
              </button>
            </div>
          </div>
          <div className="col-md-9"></div>
        </div>
      </div>
      {/* <div>
        <div className="container">
          <div className="row">
            <div className="col-md-12 bg-danger"></div>
          </div>
          <Link to="/">
            <button className="btn btn-danger">Home</button>
          </Link>
          <div className="container">
            <div className="row">
              <div className="col">
                <h1>{userInfo.name}</h1>
                <h1>{userInfo.email}</h1>
              </div>
            </div>
            <div className="row">
              <button onClick={handleLogout}>Logout</button>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default Admin;
