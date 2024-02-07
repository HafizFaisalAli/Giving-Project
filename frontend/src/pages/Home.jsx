import React from "react";
import zakatPic from "../images/ZakatPic.png";
import SliderPic1 from "../images/SliderPic1.png";
import SliderPic2 from "../images/SliderPic2.png";
import SliderPic3 from "../images/SliderPic3.png";
import SliderPic4 from "../images/SliderPic4.png";
import { Link } from "react-router-dom";
import headerPic from "../images/headerPic.png";

const Home = () => {
  const scrollToTop = () => {
    windows.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      <header className="bg-danger vh-100 mt-5 py-5">
        <div className="container">
          <div className="row mt-3">
            <div className="col d-flex align-items-center">
              <div className="mt-5 pt-4 mt-lg-0 pt-lg-0">
                <h1 className="text-light text-lg 1h-1">
                  Let's help people <br />
                  together
                </h1>
                <p className="text-light">
                  Donation is not the name of giving money to people, it is the
                  name of <br />
                  humanity. Today People's look forword to your help.
                </p>
                <div className="d-flex- flex-row mt-md-5 mt-4">
                  <Link to="/donate-zakat">
                    <button className="btn btn-light me-2 text-danger px-md-4">
                      Donate Zakat
                    </button>
                  </Link>
                  <Link to="/donate-tithe">
                    <button className="btn btn-light text-danger px-md-4">
                      Donate Tithe
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col d-lg-block d-none">
              <div className="px-4">
                <img
                  src={headerPic}
                  className="w-100 d-block"
                  alt="headerPic"
                />
              </div>
            </div>
          </div>
        </div>
      </header>
      {/*Zakat portion*/}
      <div className="container my-5">
        <h1 className="text-center pt-4 text-danger">
          What is Zakat and Why is it <br />
          obligatory on Muslims?
        </h1>
        <div className="row mt-5">
          <div className="col-lg-6">
            <p className="text-secondary mt-4">
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
              to="/zakat"
              className="btn btn-danger mb-3"
              onClick={scrollToTop}
            >
              Read more
            </Link>
          </div>
          <div className="col-lg-6">
            <div className="py-4">
              <img
                className="d-block w-100 rounded"
                src={zakatPic}
                alt="ZakatPic"
              />
            </div>
          </div>
        </div>
      </div>
      {/*carousel slider......*/}
      <div className="container my-3 mt-5">
        <div className="row">
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
                  <img
                    src={SliderPic1}
                    alt="SliderPic1"
                    className="d-block w-100 rounded"
                  />
                </div>
                <div className="carousel-item" data-bs-interval="3000">
                  <img
                    src={SliderPic2}
                    alt="SliderPic2"
                    className="d-block w-100 rounded"
                  />
                </div>
                <div className="carousel-item" data-bs-interval="3000">
                  <img
                    src={SliderPic3}
                    alt="SliderPic3"
                    className="d-block w-100 rounded"
                  />
                </div>
                <div className="carousel-item" data-bs-interval="3000">
                  <img
                    src={SliderPic4}
                    alt="SliderPic4"
                    className="d-block w-100 rounded"
                  />
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
      <div className="container my-5 py-5">
        <h1 className="text-center mt-5 mb-3 text-danger">What is Tithing?</h1>
        <div className="row setting">
          <div className="col-lg-6">
            <div className="py-4">
              <img className="d-block w-100 rounded" src={SliderPic2} alt="" />
            </div>
          </div>
          <div className="col-lg-6">
            <p className="mt-4">
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
              to="/tithing"
              className="btn btn-danger float-end mb-3"
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

export default Home;
