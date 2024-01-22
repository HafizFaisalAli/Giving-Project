import React from "react";
import * as yop from "yup";

const validationSchema = yup.object().shape({
  email: yup
    .string()
    .required("Email is required.")
    .email("Please enter a valid email"),
  password: yup
    .string()
    .required("Password is required")
    .min(6, "Password should be atleast 6 charactor long")
    .max(20, "Password should be atmost 20 charactor long")
    .matches(/[a-z]/, "Password should contain atleast one lowercase")
    .matches(/[A-Z]/, "Password should contain atleast one uppercase")
    .matches(/[0-9]/, "Password should contain atleast one numaric"),
});
const Login = () => {
  const handleSubmit = (e) => {
     e.preventDefault();
     if (validationSchema){

     }
  };

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
                  <form action="" onSubmit={handleSubmit}>
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
