import { Link } from "react-router-dom";
import LogoPic from "../images/givingLogo.png";
import {
  FaFacebook,
  FaInstagram,
  FaSkype,
  FaXTwitter,
  FaTiktok,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <>
      <footer className="navbarcolor shadow">
        <div className="container py-5">
          <div className="row">
            <div className="col-md-6">
              <Link to="/" className="navbar-brand text-danger fs-3">
                <img
                  src={LogoPic}
                  alt="getfollowerlogo"
                  width={190}
                  height={70}
                />{" "}
              </Link>
              <div className="pt-3 ps-1 ms-1">
                <p className="text-danger opacity-75">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Possimus, aut! Minima exercitationem iusto quibusdam aliquid
                  neque! Numquam vitae placeat non, doloremque deleniti
                  exercitationem distinctio commodi, laborum temporibus quae ea
                  molestias?
                </p>
              </div>
              <div className="d-flex ps-1 ms-1">
                <li>
                  <Link to="" className="pe-1 text-danger">
                    <FaFacebook className="fs-3 text-hover" />
                  </Link>
                </li>
                <li>
                  <Link to="" className="px-1 text-danger">
                    <FaInstagram className="fs-3 text-hover" />
                  </Link>
                </li>
                <li>
                  <Link to="" className="px-1 text-danger">
                    <FaSkype className="fs-3 text-hover" />
                  </Link>
                </li>
                <li>
                  <Link to="" className="px-1 text-danger">
                    <FaXTwitter className="fs-3 text-hover" />
                  </Link>
                </li>
                <li>
                  <Link to="" className="px-1 text-danger">
                    <FaTiktok className="fs-3 text-hover " />
                  </Link>
                </li>
              </div>
            </div>
            <div className="col">
              <div className="d-flex flex-row mt-3 float-end">
                <div className="text-center text-uppercase pe-md-5 text-danger">
                  <h1>Zakat</h1>
                  <Link to="" className="text-decoration-none text-danger">
                    <h5 className="opacity-75 text-hover">Zakat Foundation</h5>
                  </Link>
                </div>
                <div className="text-center text-uppercase ps-md-5 text-danger">
                  <h1>Tithe</h1>
                  <Link to="" className="text-decoration-none text-danger">
                    <h5 className="opacity-75 text-hover">
                      CARITAS FOUNDATION
                    </h5>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="py-2">
            <div className="float-end">
              <p className="text-danger fs-5 text-uppercase opacity-75">
                &copy;{new Date().getFullYear()} giving
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
