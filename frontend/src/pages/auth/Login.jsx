import { useEffect, useState } from "react";
import apiClient from "../../services/apiservice";
import { tailspin } from "ldrs";
import { addUserInfo } from "../../redux/slices/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [serverError, setServerError] = useState("");
  const [loading, setLoading] = useState(false);
  tailspin.register();
  const { userInfo } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (userInfo && userInfo.email) {
      navigate("/admin/dashboard");
    }
  }, [userInfo, navigate]);

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
        setLoading(true);
        const { data } = await apiClient.post("/auth/login", {
          email,
          password,
        });
        dispatch(addUserInfo(data));
        console.log("Login successful:", data);
      } catch (err) {
        console.log(err);
        if (err.message) {
          setServerError("Invalid Email or Password.");
        }
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <div className="bg-secondary vh-100 d-flex align-items-center">
      <div className="container">
        <div className="row justify-content-center ">
          <div className="col-5 ">
            <div className="card">
              <div className="card-header">
                <div className="card-title text-center fs-4 text-secondary">
                  Login
                </div>
              </div>
              <div className="card-body">
                <div className="text-center text-danger">{serverError} </div>
                <form action="" onSubmit={handleSubmit}>
                  <div>
                    <label
                      htmlFor="email"
                      className="form-label text-secondary"
                    >
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
                    <div className="text-danger"> {errors.email}</div>
                  </div>
                  <div className="mt-2">
                    <label
                      htmlFor="password"
                      className="form-label text-secondary"
                    >
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
                  <div className="mt-3 mb-2">
                    <button className="btn btn-primary px-5">
                      {loading ? (
                        <l-tailspin
                          size="30"
                          stroke="5"
                          speed="0.9"
                          color="white"
                        ></l-tailspin>
                      ) : (
                        "Login"
                      )}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
