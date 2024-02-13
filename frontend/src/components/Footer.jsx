import { Link } from "react-router-dom";
import LogoPic from "../images/givingLogo.png";
import { FaXTwitter, FaFacebook, FaInstagram } from "react-icons/fa6";

const Footer = () => {
  const scrollToTop = () => {
    windows.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      <footer className="navbarcolor shadow">
        <div className="container py-lg-5 pt-5">
          <div className="row flex-lg-row flex-column-reverse">
            <div className="col-lg-6 mt-lg-0 mt-5">
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
                  Welcome to our platform, where individuals of all faiths come
                  together to fulfill their religious obligations through
                  charitable giving. We provide a trusted space for Muslims to
                  fulfill their Zakat and Christians to contribute their tithes,
                  fostering unity and compassion in our diverse community.
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
                    <FaXTwitter className="fs-3 text-hover" />
                  </Link>
                </li>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="d-flex flex-md-row flex-column mt-3 justify-content-around  float-lg-end">
                <div className="text-center text-uppercase pe-md-5 text-danger">
                  <h1>Zakat</h1>
                  <Link
                    to="/donate-zakat"
                    className="text-decoration-none text-danger"
                    onClick={() => scrollToTop()}
                  >
                    <h5 className="opacity-75 text-hover">Shaukat Khanum</h5>
                  </Link>
                </div>
                <div className="text-center text-uppercase ps-md-5 text-danger">
                  <h1>Tithe</h1>
                  <Link
                    to="/donate-tithe"
                    className="text-decoration-none text-danger"
                    onClick={() => scrollToTop()}
                  >
                    <h5 className="opacity-75 text-hover">
                      CARITAS FOUNDATION
                    </h5>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="py-2 mt-lg-0 mt-5">
            <div className="float-lg-end text-center">
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
