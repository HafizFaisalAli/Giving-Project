import React from "react";
import { Link } from "react-router-dom";
const scrollToTop = () => {
  windows.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
const button = () => {
  return (
    <>
      <Link to="/organization">
        <button className="btn btn-danger px-3" onClick={scrollToTop}>
          DonateNow
        </button>
      </Link>
    </>
  );
};

export default button;
