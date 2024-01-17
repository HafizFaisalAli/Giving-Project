import React from "react";
import zakatimg from "../images/Zakatgiving.jpg";
import Tithegive from "../images/Untitled design (1).png";
import oldage from "../images/Untitled design (2).png";
import zakatslide from "../images/Untitled design (3).png";
import zakatsliders from "../images/Untitled design.png";
import { Link } from "react-router-dom";
const scrollToTop = () => {
  windows.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
const Homepage = () => {
  return (
    <>
      <div className="header container-fluid mt-5 pt-4">
        <div className="text-center pt-5">
          <h1 className="text-danger pt-5 text-uppercase animate__animated animate__backInDown ">
            Welcome to Zakat and Tithing
          </h1>
          <p>
            “Giving is not just about making a donation. It is about making a
            difference.”
          </p>
        </div>
      </div>
      {/*Zakat portion*/}
      <div className="container mb-3">
        <h1 className="text-center mt-5 text-danger">About Zakat</h1>
        <div className="row ">
          <div className="col-lg-6">
            <h1 className="mt-4">What is Zakat?</h1>
            <p>
              Firstly, there are two forms of Zakat that are required from every
              Muslim, Zakat and Zakat al-Fitr. This page focuses on facts about
              Zakat and how to pay it. To fulfil Zakat as a Muslim, means to
              give alms to those of the Muslim Ummah who are in need. Zakat is
              2.5% of the wealth of each Muslim in the world. It’s paid by every
              Muslim once a year as ordained by Allah, as a means of ensuring
              the re-distribution of wealth to those who need it, subhanAllah.
            </p>
            <div className="navbarcolor">
              <p className="p-3">
                And establish prayer and give Zakat, and whatever good you put
                forward for yourselves – you will find it with Allah.” (Qur’an
                2:110)
              </p>
            </div>
            <Link
              to="/Zakatpage"
              className="btn btn-outline-danger mb-3  "
              onClick={scrollToTop}
            >
              Read more
            </Link>
          </div>
          <div className="col-lg-6">
            <div className="p-lg-5">
              <img
                className="d-block w-100 rounded"
                height={270}
                width={300}
                src={zakatimg}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      {/*carousel slider......*/}
      <div className="container my-3 mt-5">
        <div className="row mx-5">
          <div className="col-md-12 custom_slider">
            <div
              id="mycarousel"
              className="carousel slide"
              data-bs-ride="carousel"
            >
              <div className="carousel-indicators">
                <button
                  className="active"
                  data-bs-target="#mycarousel"
                  data-bs-slide-to="0"
                ></button>
                <button
                  data-bs-target="#mycarousel"
                  data-bs-slide-to="1"
                ></button>
                <button
                  data-bs-target="#mycarousel"
                  data-bs-slide-to="2"
                ></button>
                <button
                  data-bs-target="#mycarousel"
                  data-bs-slide-to="3"
                ></button>
              </div>
              <div className="carousel-inner">
                <div className="carousel-item active" data-bs-interval="3000">
                  <img src={Tithegive} alt=" " className="d-block w-100" />
                </div>
                <div className="carousel-item" data-bs-interval="3000">
                  <img src={oldage} alt=" " className="d-block w-100" />
                </div>
                <div className="carousel-item" data-bs-interval="3000">
                  <img src={zakatslide} alt=" " className="d-block w-100" />
                </div>
                <div className="carousel-item" data-bs-interval="3000">
                  <img src={zakatsliders} alt=" " className="d-block w-100" />
                </div>
              </div>
              <button
                className="carousel-control-prev"
                data-bs-target="#mycarousel"
                data-bs-slide="prev"
              >
                <span className="carousel-control-prev-icon"></span>
              </button>
              <button
                className="carousel-control-next"
                data-bs-target="#mycarousel"
                data-bs-slide="next"
              >
                <span className="carousel-control-next-icon"></span>
              </button>
            </div>
          </div>
        </div>
      </div>
      {/*Tithing portion*/}
      <div className="container mb-3">
        <h1 className="text-center mt-5 mb-3 text-danger">About Tithing</h1>
        <div className="row setting">
          <div className="col-lg-6">
            <div className="p-lg-5">
              <img
                className="d-block w-100 rounded"
                height={300}
                width={300}
                src={Tithegive}
                alt=""
              />
            </div>
          </div>
          <div className="col-lg-6">
            <h1 className="mt-4">What is Tithing?</h1>
            <p>
              First, let's start by answering the question "what is a tithe?"
              The definition comes from Hebrew and means "a tenth." A tithe is
              defined as a tenth of a person's income or property, given in
              support of the church. Tithing in the Bible refers to giving 10
              percent from your daily, monthly and annual income.
            </p>
            <div className="navbarcolor">
              <p className="p-3 text-justify ">
                and the Levite, because he has no portion nor inheritance with
                you, and the sojourner, and the fatherless, and the widow, who
                are within your gates, shall come, and shall eat and be
                satisfied; that Yahweh your God may bless you in all the work of
                your hand which you do. (Deuteronomy 14)
              </p>
            </div>
            <Link
              to="/Tithingpage"
              className="btn btn-outline-danger float-end mb-3"
              onClick={scrollToTop}
            >
              Read more
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Homepage;
