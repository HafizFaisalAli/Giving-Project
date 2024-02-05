import { useState, useEffect } from "react";
import apiClient from "../../services/apiservice";
import Loading from "../../components/Loading";

const TotalDonate = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    apiClient
      .get("/donate")
      .then((res) => setData(res.data))
      .catch((err) => {
        const serverError = err.response.data
          ? err.response.data.message
          : err.message;
        setError(serverError);
      })
      .finally(() => setLoading(false));
  }, []);

  const donate = data.donates;
  const filteredZakat = donate?.filter((item) => item.type === "Zakat");
  const filteredTithe = donate?.filter((item) => item.type === "Tithing");

  if (loading) return <Loading />;

  return (
    <>
      <div className="mt-5 py-5">
        <div className="container">
          <div className="row h-100 d-flex justify-content-center align-items-center">
            <div className="col-md-6">
              <div className="card shadow text-center">
                <div className="card-header bg-primary text-light">
                  <h2>Total Zakat</h2>
                </div>
                <div className="card-body my-5 py-5">
                  <h1>
                    {filteredZakat && (
                      <div>
                        Amount:{" "}
                        <span className="fw-light">
                          {filteredZakat.reduce(
                            (pre, cur) => (pre += cur.amount),
                            0
                          )}
                          PKR
                        </span>
                      </div>
                    )}
                  </h1>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card shadow text-center">
                <div className="card-header bg-primary text-light">
                  <h2>Total Tithing</h2>
                </div>
                <div className="card-body my-5 py-5">
                  <h1>
                    {filteredTithe && (
                      <div>
                        Amount:{" "}
                        <span className="fw-light">
                          {filteredTithe.reduce(
                            (pre, cur) => (pre += cur.amount),
                            0
                          )}
                          PKR
                        </span>
                      </div>
                    )}
                  </h1>
                </div>
              </div>
            </div>

            <div className="col-md-6 mt-md-3">
              <div className="card shadow text-center">
                <div className="card-header bg-primary text-light">
                  <h2>Total Donation</h2>
                </div>
                <div className="card-body my-5 py-5">
                  <h1>
                    {donate && (
                      <div>
                        Amount:{" "}
                        <span className="fw-light">
                          {donate.reduce((pre, cur) => (pre += cur.amount), 0)}
                          PKR
                        </span>
                      </div>
                    )}
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TotalDonate;
