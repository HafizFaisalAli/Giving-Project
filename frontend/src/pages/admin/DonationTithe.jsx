import { useState, useEffect } from "react";
import apiClient from "../../services/apiservice";
import { FaCheckCircle } from "react-icons/fa";
import { MdCancel } from "react-icons/md";
import Loading from "../../components/Loading";

const DonationTithe = () => {
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
  const filteredTithe = donate?.filter((item) => item.type === "Tithing");

  if (loading) return <Loading />;
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="h-100 mt-5 pt-5">
            <h1 className="text-center mt-5">Tithing</h1>
            <div className="my-5 border">
              <div className="d-flex flex-row justify-content-between border py-3 bg-primary text-light">
                <h3 className="ps-5 ms-4">DonateID</h3>
                <h3 className="">Total Donate</h3>
                <h3 className="pe-5 me-5">IsPaid</h3>
              </div>
              <div className="accordion-min-height scroll-style-none border-bottom">
                {filteredTithe?.map(
                  (
                    {
                      fullName,
                      email,
                      amount,
                      type,
                      org,
                      isPaid,
                      _id,
                      createdAt,
                    },
                    index
                  ) => (
                    <div
                      className="accordion"
                      id={`accordionExample${index}`}
                      key={_id}
                    >
                      <div className="accordion-item border-0 border-top border-1">
                        <h2 className="accordion-header p-0 m-0">
                          <button
                            className="accordion-button bg-white fs-5 shadow-none"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target={`#collapse${index}`}
                            aria-expanded="true"
                            aria-controls={`collapse${index}`}
                          >
                            <div className="d-flex flex-row justify-content-between w-100">
                              <span className="ps-5">{_id}</span>
                              <span className="pe-5 me-5">{amount} PKR</span>
                              <span className="pe-5 me-5">
                                {isPaid ? (
                                  <FaCheckCircle className="text-success" />
                                ) : (
                                  <MdCancel className="text-danger" />
                                )}
                              </span>
                            </div>
                          </button>
                        </h2>
                        <div
                          id={`collapse${index}`}
                          className="accordion-collapse collapse"
                          data-bs-parent={`#accordionExample${index}`}
                        >
                          <div className="accordion-body ">
                            <div className="row">
                              <div className="col text-purple-800">
                                <h3 className="border-bottom border-dark pb-2">
                                  Donation Info
                                </h3>
                                <div>
                                  <span className="fw-bold pe-2">Type:</span>{" "}
                                  {type}
                                </div>
                                <div>
                                  <span className="fw-bold pe-2">
                                    Organization:
                                  </span>{" "}
                                  {org}
                                </div>
                                <div>
                                  <span className="fw-bold pe-2 ">Amount:</span>
                                  {amount} PKR
                                </div>
                              </div>
                              <div className="col text-purple-800">
                                <h3 className="border-bottom border-dark pb-2">
                                  Doner Info
                                </h3>
                                <div>
                                  <span className="fw-bold pe-2">Name:</span>{" "}
                                  {fullName}
                                </div>
                                <div>
                                  <span className="fw-bold pe-2">Email:</span>{" "}
                                  {email}
                                </div>

                                <div className="mt-4">
                                  <span className="fw-bold pe-2 fs-6">
                                    Time & Date:{" "}
                                    <span className="fw-light">
                                      {" "}
                                      {createdAt}
                                    </span>
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DonationTithe;
