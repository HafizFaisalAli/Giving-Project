import React from "react";

const Login = () => {
  return (
    <>
      <div className="bg-secondary login d-flex align-items-center">
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
                  <form action="">
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
                      />
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
