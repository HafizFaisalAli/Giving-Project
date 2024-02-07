import React from "react";
import { Link } from "react-router-dom";
import { CiCalculator2 } from "react-icons/ci";
import { FcDonate } from "react-icons/fc";
import { HiInformationCircle } from "react-icons/hi";
import AboutTopPic from "../images/AboutTopPic.png";
import caritas from "../images/Caritasimage.png";
import zakatfoundation from "../images/Zakatfoundation.png";
const scrollToTop = () => {
  windows.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
const About = () => {
  return (
    <>
      <div className="container-fluid px-0 py-4 mt-5 mx-0 overflow-hidden">
        <div className="row px-0 mt-md-0 mt-4">
          <img
            src={AboutTopPic}
            className="d-block w-100"
            alt="About Top Pic"
          />
        </div>
      </div>
      <div className="container mt-md-3">
        <div className="row">
          <div className="col-lg-12">
            <div className="">
              <div className="text-uppercase text-center mt-md-5 animate__animated animate_fade">
                <h1 className="text-lg text-danger">About</h1>
              </div>
              <h5 className="text-center mt-4">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis,
                rerum repudiandae <br /> soluta harum quis et odio aspernatur
                sed laboriosam perferendis <br /> error quod molestiae itaque
                numquam expedita? <br /> Perspiciatis ab perferendis at!
              </h5>
              <div className="text-center mt-4">
                <p className="text-secondary">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Consequuntur nihil aliquam <br /> culpa voluptas, illum facere
                  nostrum commodi
                </p>
                <div className="my-md-5">
                  <Link
                    to="/organization"
                    className="btn btn-danger text-uppercase px-md-5 px-3"
                    onClick={scrollToTop}
                  >
                    Donate now
                  </Link>
                </div>
                <h1 className="text-uppercase text-danger text-center mt-md-5 pt-5">
                  Our processes
                </h1>
                <div className="row mt-4">
                  <div className="col-lg-4">
                    <CiCalculator2 size={100} />
                    <div className="mt-3">
                      <p className="text-secondary">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quia aspernatur excepturi soluta. Harum id incidunt
                        provident officiis in fuga voluptas odit!
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <FcDonate size={100} />
                    <div className="mt-3">
                      <p className="text-secondary">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quia aspernatur excepturi soluta. Harum id incidunt
                        provident officiis in fuga voluptas odit!
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <HiInformationCircle size={100} />
                    <div className="mt-3">
                      <p className="text-secondary">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quia aspernatur excepturi soluta. Harum id incidunt
                        provident officiis in fuga voluptas odit!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row my-md-5 py-md-5 py-2">
          <h3 className="text-uppercase text-center text-lg text-danger mb-5">
            Organization <br />
            where you donate
          </h3>
          {/**Zakat foundation portion */}
          <div className="row mt-md-4">
            <div className="col-lg-6">
              <h2 className="text-uppercase text-danger text-center">
                Zakat foundation
              </h2>
              <div className="mt-4 text-justify">
                <p className="text-secondary">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Placeat atque, tenetur deserunt omnis ab harum suscipit
                  maiores sint nostrum sapiente quidem est nobis hic nisi qui
                  vel iure exercitationem eius. Lorem ipsum dolor, sit amet
                  consectetur adipisicing elit. Provident voluptates voluptatum
                  iure eius vel, ipsa soluta perspiciatis reiciendis deserunt
                  nisi incidunt. Magni nisi magnam optio alias ratione labore
                  doloribus inventore.
                </p>
              </div>
              <Link
                to="/organization"
                className="btn btn-danger p-2 mt-md-2 mb-md-0 mb-3"
                onClick={scrollToTop}
              >
                View Organization
              </Link>
            </div>
            <div className="col-lg-6 ps-lg-5">
              <div className="img-fluid d-block w-100 ">
                <img
                  className="d-block w-100 rounded"
                  height={270}
                  width={300}
                  src={zakatfoundation}
                  alt=""
                />
              </div>
            </div>
          </div>
          {/**Zakat foundation portion end */}

          {/*Tithing caritas portion*/}
          <div className="row flex-lg-row flex-column-reverse mt-5 pt-5">
            <div className="col-lg-6 mb-lg-0 mb-5">
              <div className="img-fluid d-block w-100 ">
                <img
                  className="d-block w-100 rounded pe-lg-5"
                  height={270}
                  width={300}
                  src={caritas}
                  alt=""
                />
              </div>
            </div>
            <div className="col-lg-6">
              <h2 className="text-uppercase text-danger text-center">
                CARITAS FOUNDATION
              </h2>
              <div className="mt-4 text-justify">
                <p className="text-secondary">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Placeat atque, tenetur deserunt omnis ab harum suscipit
                  maiores sint nostrum sapiente quidem est nobis hic nisi qui
                  vel iure exercitationem eius. Lorem ipsum dolor, sit amet
                  consectetur adipisicing elit. Provident voluptates voluptatum
                  iure eius vel, ipsa soluta perspiciatis reiciendis deserunt
                  nisi incidunt. Magni nisi magnam optio alias ratione labore
                  doloribus inventore.
                </p>
              </div>
              <Link
                to="/organization"
                className="btn btn-danger p-2 mt-lg-2 float-lg-end mb-lg-0 mb-3"
                onClick={scrollToTop}
              >
                View Organization
              </Link>
            </div>
          </div>
          {/*Caritas portion end*/}
        </div>
      </div>
    </>
  );
};

export default About;
