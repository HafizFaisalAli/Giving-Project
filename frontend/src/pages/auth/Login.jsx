import React, { useState } from "react";
import apiClient from "../../services/apiservice";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const validationSchema = () => {
    const newErrors = {};
    if (!email.includes("@")) {
      newErrors.email = "Please enter valid email.";
    } else if (email.length === 0) {
      newErrors.email = "Please enter your email first";
    } else if (password.length < 3) {
      newErrors.password = "Password most be at least 5 characters";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const isValid = validationSchema();
    if (isValid) {
      try {
        const response = await apiClient.post("/auth/login", {
          email,
          password,
        });
        console.log(response.data);
      } catch (err) {
        const message = err.response.data
          ? err.response.data.message
          : err.message;
        setErrors(message);
      }
    }
  };

  return (
    <>
      <div className="bg-secondary vh-100 d-flex align-items-center">
        <div className="container">
          <div className="row justify-content-center ">
            <div className="col-6 ">
              <div className="card">
                <div className="card-header">
                  <div className="card-title text-center fs-4 fw-bold">
                    Login
                  </div>
                </div>
                <div className="card-body">
                  <form action="" onSubmit={handleSubmit}>
                    <div className="text-danger"> {errors.email}</div>
                    <div>
                      <label htmlFor="email" className="form-label">
                        Email:
                      </label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Enter your email"
                        className="form-control"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                    <div className="mt-2">
                      <label htmlFor="password" className="form-label">
                        Password:
                      </label>
                      <input
                        type="password"
                        name="password"
                        id="password"
                        placeholder="Enter your password"
                        className="form-control"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                      <div className="text-danger"> {errors.password}</div>
                    </div>
                    <div className="d-grid mt-3 mb-2">
                      <button className="btn btn-primary ">Login</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
