import React from "react";

import { Link } from "react-router-dom";
import tithebymoney from "../images/Untitled design (2).png";
import oldage from "../images/Untitled design (3).png";
import tithbyfood from "../images/Untitled design (6).png";
const scrollToTop = () => {
  faWindows.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
const Tithingpage = () => {
  return (
    <>
      <div className="container  mt-5 my-4 py-4 ">
        <div className="row mt-5">
          <h1 className="text-center text-uppercase ">What is Tithing?</h1>
          <div className="col-lg-12">
            <div className="mt-2 text-center">
              <p>
                First, let's start by answering the question "what is a tithe?"
                The definition comes from Hebrew and means "a tenth." A tithe is
                defined as a tenth of a person's income or property, given in
                support of the church. Tithing in the Bible refers to giving 10
                percent from your daily, monthly and annual income.
              </p>
              <div className="text-center mt-4">
                <Link
                  to="/TithCalculator"
                  className="btn btn-danger text-uppercase"
                  onClick={scrollToTop}
                >
                  calculate your Tithe
                </Link>
              </div>
              <div className="navbarcolor p-3 text-uppercase text-center mt-4 ">
                <p>
                  and the Levite, because he has no portion nor inheritance with
                  you, and the sojourner, and the fatherless, and the widow, who
                  are within your gates, shall come, and shall eat and be
                  satisfied; that Yahweh your God may bless you in all the work
                  of your hand which you do. (Deuteronomy 14)
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <h1 className="text-uppercase text-center mt-5">Types of Tithing</h1>
          <div className="col-lg-4">
            <div className="mt-5">
              <img src={tithebymoney} alt="" className="img-fluid" />
            </div>
            <div className="text-justify mt-5">
              <p>
                Tithing by money is a common form of giving practiced by many
                individuals. It means giving 10 percent from your daily, monthly
                and annual income. It involves setting aside a specific portion
                of one's income, whether it's from monthly salaries, daily
                wages, or any other sources, to donate to the church or
                religious organization.
              </p>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="mt-5">
              <img src={tithbyfood} alt="" className="img-fluid" />
            </div>
            <div className="text-justify mt-5">
              <p>
                Tithing by food is a unique way of giving, particularly for
                farmers or individuals involved in agriculture. they offer a
                portion of their agricultural produce, Instead of giving money,
                such as crops, fruits, or vegetables, to the church. This
                donated food is then used to feed the needy people and support
                community members.
              </p>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="mt-5">
              <img src={oldage} alt="" className="img-fluid" />
            </div>
            <div className="text-justify mt-5">
              <p>
                Some individuals, like dedicated church members or healthcare
                professionals, offer their time, skills,and efforts to serve
                others in need. This could include volunteering at the church,
                supporting elderly members, assisting in community outreach
                projects, or caring for those in hospitals or old age homes.
              </p>
            </div>
          </div>
        </div>
        <div className="row ">
          <h1 className="text-center text-uppercase mt-5">Division of Tithe</h1>
          <div className="col-lg-4 mt-5">
            <h2 className="text-uppercase">Tithing to the Church</h2>
            <div className="mt-4">
              <p>
                Tithing to the church involves giving a portion of one's income
                to support the religious community. This contribution helps in
                maintaining the church building, funding religious activities,
                providing pastoral care, and supporting various ministries that
                benefit the congregation and the community.
                <span className="text-uppercase fw-bold ">
                  Supporting Religious Activities and Ministries
                </span>
              </p>
            </div>
          </div>
          <div className="col-lg-4 mt-5">
            <h2 className="text-uppercase">Tithing to the Levites</h2>
            <div className="mt-4">
              <p>
                The Levites were a specific group of individuals in biblical
                times who served in religious roles and did not inherit lands
                like other tribes. Tithing to the Levites involves setting aside
                a portion of one's income to support the religious leaders,
                pastors, and other individuals dedicated to serving the church.
                <span className="text-uppercase fw-bold">
                  Supporting Those Who Serve the Church
                </span>
              </p>
            </div>
          </div>
          <div className="col-lg-4 mt-5">
            <h2 className="text-uppercase">Tithing to the passenger</h2>
            <div className="mt-4">
              <p>
                Tithing to the stranger or traveler refers to giving a portion
                of one's income to support those in need who are passing through
                or visiting the area. It emphasizes the importance of
                hospitality and providing for the needs of strangers.
                <span className="text-uppercase fw-bold ">
                  Extending Hospitality
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className="row ">
          <div className="col-lg-4 mt-5">
            <h2 className="text-uppercase">Tithing to the Widow</h2>
            <div className="mt-4">
              <p>
                Tithing to the widow involves giving a portion of one's income
                to support widows, who are often among the vulnerable members of
                society. This act of giving helps widows who may face financial
                challenges after losing their spouse.
                <span className="text-uppercase fw-bold ">
                  Caring for the Vulnerable
                </span>
              </p>
            </div>
          </div>
          <div className="col-lg-4 mt-5">
            <h2 className="text-uppercase">Tithing to the Orphan</h2>
            <div className="mt-4">
              <p>
                Tithing to the orphan involves giving a portion of one's income
                to support children who have lost their parents and may be in
                need of care and assistance.
                <span className="text-uppercase fw-bold">
                  Supporting Parentless Children
                </span>
              </p>
            </div>
          </div>
          <div className="col-lg-4 mt-5">
            <h2 className="text-uppercase">
              Tithing for Personal Use(Optional)
            </h2>
            <div className="mt-4">
              <p>
                This type of tithing allows individuals who give their tithes
                from outside their city to set aside a portion for their own
                use.
                <span className="text-uppercase fw-bold ">
                  Optional for Those Giving Tithes from Outside Their City
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <h1 className="text-uppercase text-center mt-5">When we can give?</h1>
          <div className="col-lg-4">
            <h2 className="mt-3">Daily Basis</h2>
            <div>
              <p>
                A construction worker, Mark, earns his income on a daily basis.
                Each day after work, he sets aside 10% of his daily earnings as
                his tithe.
              </p>
            </div>
          </div>
          <div className="col-lg-4">
            <h2 className="mt-3">Monthly Basis</h2>
            <div>
              <p>
                Monthly tithing is one of the most common practices. Many people
                set aside a specific portion of their monthly income to give as
                a tithe to their church or religious organization.
              </p>
            </div>
          </div>
          <div className="col-lg-4">
            <h2 className="mt-3">Yearly Basis</h2>
            <div>
              <p>
                Some individuals prefer to calculate their tithes on a yearly
                basis. They sum up their total income for the year and set aside
                a percentage as their tithe, which they give annually.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12 mt-5">
            <h1 className="text-uppercase text-center">
              Who can receive Tithe
            </h1>
            <div className="text-center mt-3">
              <p>
                Tithing can be given to any type of religious persons. In
                Christianity, tithing is an expression of love and compassion
                that knows no religious boundaries. It encourages believers to
                extend help and support to people of all faiths.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tithingpage;
