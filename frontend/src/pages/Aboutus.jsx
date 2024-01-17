import React from "react";
import { Link } from "react-router-dom";
import { CiCalculator2 } from "react-icons/ci";
import { FcDonate } from "react-icons/fc";
import { HiInformationCircle } from "react-icons/hi";
import caritas from "../images/Caritasimage.png";

import zakatfoundation from "../images/Zakatfoundation.png";
const scrollToTop = () => {
  windows.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
const Aboutus = () => {
  return (
    <>
      <div className=" topimage container-fluid py-4 mt-5"></div>
      <div className="container mt-3">
        <div className="row">
          <div className="col-lg-12">
            <div className="">
              <div className="text-uppercase text-center mt-5 animate__animated animate_fade">
                <h1>About Us</h1>
              </div>
              <h5 className="text-center mt-4 ">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis,
                rerum repudiandae soluta harum quis et odio aspernatur sed
                laboriosam perferendis error quod molestiae itaque numquam
                expedita? Perspiciatis ab perferendis at!
              </h5>
              <div className="text-center mt-4">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Consequuntur nihil aliquam culpa voluptas, illum facere
                  nostrum commodi
                </p>
                <div className="mt-4">
                  <Link
                    to="/organization"
                    className="btn btn-danger text-uppercase px-5 "
                    onClick={scrollToTop}
                  >
                    Donate now
                  </Link>
                </div>
                <h1 className="text-uppercase text-center mt-5">
                  Our processes
                </h1>
                <div className="row mt-4">
                  <div className="col-lg-4 animate__animated ">
                    <CiCalculator2 size={100} />
                    <div className="mt-3">
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quia aspernatur excepturi soluta. Harum id incidunt
                        provident officiis in fuga voluptas odit!
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-4 animate__animated ">
                    <FcDonate size={100} />
                    <div className="mt-3">
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quia aspernatur excepturi soluta. Harum id incidunt
                        provident officiis in fuga voluptas odit!
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-4 animate__animated ">
                    <HiInformationCircle size={100} />
                    <div className="mt-3">
                      <p className="">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quia aspernatur excepturi soluta. Harum id incidunt
                        provident officiis in fuga voluptas odit!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row mt-5 bgcolour my-4 py-4 px-2">
                <div className="col-lg-12">
                  <h3 className="text-uppercase text-center p-4">
                    Organization where you donate
                  </h3>
                </div>
                {/**Zakat foundation portion */}
                <div className="row mt-4">
                  <div className="col-lg-6">
                    <h2 className="text-uppercase text-muted text-center">
                      Zakat foundation
                    </h2>
                    <div className="mt-4 text-justify">
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Placeat atque, tenetur deserunt omnis ab harum suscipit
                        maiores sint nostrum sapiente quidem est nobis hic nisi
                        qui vel iure exercitationem eius. Lorem ipsum dolor, sit
                        amet consectetur adipisicing elit. Provident voluptates
                        voluptatum iure eius vel, ipsa soluta perspiciatis
                        reiciendis deserunt nisi incidunt. Magni nisi magnam
                        optio alias ratione labore doloribus inventore.
                      </p>
                    </div>
                    <Link
                      to="/organization"
                      className="btn btn-outline-danger p-2 mt-2"
                      onClick={scrollToTop}
                    >
                      View Organization
                    </Link>
                  </div>
                  <div className="col-lg-6 ">
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
                <div className="row mt-5">
                  <div className="col-lg-6">
                    <div className="img-fluid d-block w-100 ">
                      <img
                        className="d-block w-100 rounded"
                        height={270}
                        width={300}
                        src={caritas}
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="col-lg-6 ">
                    <h2 className="text-uppercase text-muted text-center">
                      Zakat foundation
                    </h2>
                    <div className="mt-4 text-justify">
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Placeat atque, tenetur deserunt omnis ab harum suscipit
                        maiores sint nostrum sapiente quidem est nobis hic nisi
                        qui vel iure exercitationem eius. Lorem ipsum dolor, sit
                        amet consectetur adipisicing elit. Provident voluptates
                        voluptatum iure eius vel, ipsa soluta perspiciatis
                        reiciendis deserunt nisi incidunt. Magni nisi magnam
                        optio alias ratione labore doloribus inventore.
                      </p>
                    </div>
                    <Link
                      to="/organization"
                      className="btn btn-outline-danger p-2 mt-2 float-end"
                      onClick={scrollToTop}
                    >
                      View Organization
                    </Link>
                  </div>
                </div>
                {/*Caritas portion end*/}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Aboutus;
