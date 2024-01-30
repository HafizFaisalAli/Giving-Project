import { Link } from "react-router-dom";
import { resetDonate } from "../redux/slices/newDante";
import { useDispatch, useSelector } from "react-redux";
import NotFound from "../components/NotFound";
import { FaCircleCheck } from "react-icons/fa6";
import { IoMdArrowRoundBack } from "react-icons/io";

const DonationDone = () => {
  const dispatch = useDispatch();
  const { newDonate } = useSelector((state) => state.doner);

  return (
    <>
      {newDonate ? (
        <div className="d-flex flex-column justify-content-center align-items-center vh-100">
          <div className="card shadow">
            <div className="card-body text-center">
              <h3>{newDonate.donerName}</h3>
              <p>
                Your {newDonate.donatetype} {newDonate.donateAmount} is
                Successfully Done
              </p>
              <FaCircleCheck className="fs-1 text-success" />
            </div>
          </div>
          <div className="mt-3 ">
            <Link
              to="/"
              onClick={() => dispatch(resetDonate())}
              className="text-decoration-none fs-4"
            >
              <IoMdArrowRoundBack /> Go Back
            </Link>{" "}
          </div>
        </div>
      ) : (
        <NotFound />
      )}
    </>
  );
};

export default DonationDone;
