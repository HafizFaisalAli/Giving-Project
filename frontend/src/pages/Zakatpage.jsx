import React from "react";
import { Link } from "react-router-dom";

import nisabimg from "../images/Untitled design (8).png";
import zakatrate from "../images/Untitled design (9).png";
const scrollToTop = () => {
  faWindows.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
const Zakatpage = () => {
  return (
    <>
      <div className="container mt-5 my-4 py-4 mt-5">
        <div className="row  mt-5 mx-auto">
          <div className="col-lg-12">
            <h1 className="text-center text-uppercase">What is Zakat?</h1>
            <div>
              <p className=" text-center mt-4">
                Zakat (zakaat, zakah) is one of the five pillars of Islam and a
                form of obligatory charity. This means that each Muslim is
                obliged to pay their Zakat throughout their lifetime, as long as
                they are eligible to do so. However, it can be a little
                difficult to know how to pay Zakat and fulfil this sacred duty
                without all the right information to hand. This is your one-stop
                for everything you need to know about how to pay Zakat! Firstly,
                there are two forms of Zakat that are required from every
                Muslim,Zakat and Zakat al-Fitr. This page focuses on facts about
                Zakat and how to pay it. To fulfil Zakat as a Muslim, means to
                give alms to those of the Muslim Ummah who are in need. Zakat is
                2.5% of the wealth of each Muslim in the world. It’s paid by
                every Muslim once a year as ordained by Allah, as a means of
                ensuring the re-distribution of wealth to those who need it,
                subhanAllah.
              </p>
              <div className="text-center mt-3">
                <Link
                  to="/ZakatCalculator"
                  className="btn btn-danger text-uppercase "
                  onClick={scrollToTop}
                  href=""
                >
                  Calculate your Zakat
                </Link>
              </div>

              <div className="navbarcolor">
                <h5 className="mt-4 p-4 text-center text-uppercase linespace">
                  And establish prayer and give Zakat, and whatever good you put
                  forward for yourselves – you will find it with Allah.” Qur’an
                  2:110
                </h5>
              </div>
            </div>
          </div>
        </div>
        <div className="row ">
          <div className="col-lg-12 ">
            <h1 className="text-uppercase  text-center mt-5">Zakat al-fitr</h1>
            <div>
              <p className="text-center mt-4">
                Zakat al-Fitr is a specific form of charity given at the end of
                Ramadan, the month of fasting in Islam. It is a mandatory
                charitable donation made by every Muslim, regardless of wealth
                or status. Zakat al-Fitr is calculated at a rate of one sale of
                food per person, which is approximately 3 kg of food It can be
                given in the form of cash, but it is traditionally given in the
                form of food. The purpose of Zakat al-Fitr is to ensure that
                everyone has enough to eat during the Eid al-Fitr celebration at
                the end of Ramadan.
              </p>
            </div>
          </div>
        </div>
        <div className="row ">
          <div className="col-lg-12">
            <h1 className="text-uppercase text-center  mt-5">
              Who is Eligible to pay Zakat?
            </h1>
            <div className=" text-center">
              <ul className="mt-4">
                <span className="fw-bold text-uppercase ">
                  There are four conditions that one must meet in order to be
                  eligible to pay Zakat:
                </span>
                <li className="mt-3">
                  A Muslim must have reached the age of puberty (according to
                  the Hanafi madhaab only).
                </li>
                <li>
                  A Muslim must have ownership of the Nisab (minimum amount of
                  wealth) for one lunar year before paying Zakat on it.
                </li>
                <li>
                  The wealth a Muslim owns must have the ability to increase.
                </li>
                <li>
                  The Muslim paying Zakat must be of sound mind. A Muslim must
                  only give Zakat to those who are eligible to receive it.
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <h1 className="text-uppercase text-center mt-5 ">
              When to pay zakat
            </h1>
            <div className="mt-3">
              <p className="text-center">
                You pay your Zakat when you have been in possession of the Nisab
                (the minimum amount of personal wealth) for one lunar year.
                <br />
                If you fall below the Nisab at any point throughout the year, or
                if you are in debt, you are not required to pay the Zakat until
                you have met or exceeded the Nisab again and have maintained it
                for one lunar year. This means that every Muslim pays their
                Zakat at different times of the year.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <h1 className="text-center mt-5 text-uppercase">
              Who is eligible to receive Zakat?
            </h1>
            <div className="text-center mt-3">
              <ul>
                <li>The poor</li>
                <li>The needy</li>
                <li>Administrators of Zakat</li>
                <li>
                  Those who have a reconciliation of heart (those who have
                  embraced Islam or are inclined to it).
                </li>
                <li>Those who have been enslaved</li>
                <li>Those in debt</li>
                <li>In the cause of God</li>
                <li>Travellers (including refugees)</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <h1 className="text-center text-uppercase mt-5">Types of zakat</h1>
          </div>
          <div className="mt-3 text-center">
            <span className="  ">
              Zakat is one of the five pillars of Islam and refers to the
              obligatory charitable contribution that Muslims make to help those
              in need. There are several types of zakat in Islam, including.
            </span>
            <ul className="text-justify mt-3">
              <li>zakat al-fitr</li>
              <li>zakat al-mal</li>
              <li>zakat al-fai</li>
              <li>zakat al-rikaz</li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <h1 className="text-center text-uppercase mt-5">Rules of zakat</h1>
            <div className="text-center mt-3">
              <p>
                Muslims are obligated to pay 2.5% of the total value of their
                wealth less any liabilities in zakat provided they reach nisab.
                <span className="fw-bold">
                  This is the threshold, which is the value of 87.48 grams of
                  gold or 612.36 grams of silver
                </span>
                . Some Muslim countries make zakat mandatory, just like taxes.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="mt-5">
              <img
                src={nisabimg}
                alt="Nisab rate"
                className="d-block w-100 "
                height={300}
                width={400}
              />
            </div>
          </div>
          <div className="col-lg-6  ">
            <h1 className="text-uppercase text-center  mt-4">Nisab Zakat</h1>
            <div>
              <p className="text-center mt-3">
                Zakat is obligatory on Muslims who have reached the minimum
                threshold of wealth, known as "nisab." The nisab is calculated
                based on the current value of gold or silver and represents the
                minimum amount of wealth a Muslim must possess before zakat
                becomes obligatory.Nisab, which is equal to 85 grams of 24k
                gold, is the minimum amount of wealth one must have before they
                are liable to pay zakat. The nisab amount listed is based on the
                latest available report to us ( This number may change daily
                depending on fluctuations in the gold exchange rate).
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container mt-5">
        <div className="row">
          <div className="col-lg-6">
            <h1 className="text-uppercase text-center  mt-4">Zakat ratet</h1>
            <div className="mt-5">
              <p className="text-center">
                Zakat is to be paid on Silver in Pure form or Jewellery,
                Utensils, Decorative items and all household items including
                crockery, cutlery made of silver at 2.5% of the prevailing
                market rates.zakat is to be paid on Silver in Pure form or
                Jewellery, Utensils, Decorative items and all household items
                including crockery, cutlery made of silver at 2.5% of the
                prevailing market rates.zakat should be paid at 2.5% on all cash
                balance and bank balances in your savings, current or FD
                accounts. The amount technically should be in the bank for one
                year.
              </p>
            </div>
          </div>
          <div className="col-lg-6 ">
            <div>
              <img
                className=" mt-3 d-block w-100  "
                src={zakatrate}
                alt=""
                height={300}
                width={400}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Zakatpage;
