import React, { useState } from "react";
import { BiDonateHeart } from "react-icons/bi";
import { Link } from "react-router-dom";

const TithCalculator = () => {
  const [dailyIncome, setDailyIncome] = useState("");
  const [monthlyIncome, setMonthlyIncome] = useState("");
  const [yearlyIncome, setYearlyIncome] = useState("");
  const [dailyTithe, setDailyTithe] = useState("");
  const [monthlyTithe, setMonthlyTithe] = useState("");
  const [yearlyTithe, setYearlyTithe] = useState("");

  const calculateTithes = () => {
    const dailyIncomeValue = parseFloat(dailyIncome);
    const monthlyIncomeValue = parseFloat(monthlyIncome);
    const yearlyIncomeValue = parseFloat(yearlyIncome);

    const calculatedDailyTithe = calculateTithe(dailyIncomeValue);
    const calculatedMonthlyTithe = calculateTithe(monthlyIncomeValue);
    const calculatedYearlyTithe = calculateTithe(yearlyIncomeValue);

    setDailyTithe(calculatedDailyTithe.toFixed(2));
    setMonthlyTithe(calculatedMonthlyTithe.toFixed(2));
    setYearlyTithe(calculatedYearlyTithe.toFixed(2));
  };

  const calculateTithe = (income) => {
    if (isNaN(income) || income <= 0) {
      return 0;
    } else {
      // Calculate the tithe (10% of the income)
      const tithe = income * 0.1;
      return tithe;
    }
  };

  const handleCancel = () => {
    setDailyIncome("");
    setMonthlyIncome("");
    setYearlyIncome("");
    setDailyTithe("-");
    setMonthlyTithe("-");
    setYearlyTithe("");
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <div className="mt-5">.</div>
      <div className="container my-5">
        <div className="row justify-content-center">
          <div className="col-md-5 navbarcolor calculator rounded-5 px-5">
            <div className="text-center my-3 pt-4 ">
              <h2>
                Tithing Calculator
                <BiDonateHeart />
              </h2>
            </div>
            <form action="" className="mt-4" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="inputA" className="form-label">
                  Daily Income
                </label>
                <input
                  className="form-control"
                  name="inputA"
                  type="number"
                  id="inputA"
                  value={dailyIncome}
                  onChange={(e) => setDailyIncome(e.target.value)}
                />
              </div>
              <div className="mt-3">
                <label htmlFor="inputB">Monthly Income </label>
                <input
                  className="form-control"
                  name="inputB"
                  id="inputB"
                  type="number"
                  value={monthlyIncome}
                  onChange={(e) => setMonthlyIncome(e.target.value)}
                />
              </div>

              <div className="mt-3">
                <label htmlFor="inputC"> Yearly Income</label>
                <input
                  className="form-control"
                  name="inputC"
                  type="number"
                  id="inputC"
                  value={yearlyIncome}
                  onChange={(e) => setYearlyIncome(e.target.value)}
                />
              </div>
              <div className="float-end mt-3 ">
                <div className="d-flex">
                  <button
                    className="btn btn-sm btn-outline-danger mx-1"
                    onClick={calculateTithes}
                  >
                    Calculate Tithes
                  </button>
                  <button
                    className="btn btn-sm btn-outline-danger mx-1"
                    type="reset"
                    onClick={handleCancel}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </form>
            <div className="ms-2 my-5 py-3">
              <div className="row">
                <h6>Daily Tithe: {dailyTithe}</h6>
                <h6>Monthly Tithe: {monthlyTithe}</h6>
                <h6>yearly Tithe: {yearlyTithe}</h6>

                <div className="row d-grid mt-3 mx-auto">
                  <Link
                    to="/donate-tithe"
                    className=" btn btn-danger text-decoration-none text-light"
                  >
                    Donate Tithe
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TithCalculator;
