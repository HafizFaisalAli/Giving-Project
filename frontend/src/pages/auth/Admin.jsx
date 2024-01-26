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
      <div>
        <div className="row">
          <div className="col-1 bg-danger"></div>
        </div>
        <Link to="/">
          <button className="btn btn-primary">Home</button>
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
    </>
  );
};

export default Admin;
