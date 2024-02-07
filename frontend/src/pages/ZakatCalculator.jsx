import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BiSolidDonateHeart } from "react-icons/bi";

const ZakatCalculator = () => {
  const [goldWeightInTola, setGoldWeightInTola] = useState("");
  const [silverWeightInTola, setSilverWeightInTola] = useState("");
  const [cashAmount, setCashAmount] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [resultGold, setResultGold] = useState("");
  const [resultSilver, setResultSilver] = useState("");
  const [resultCash, setResultCash] = useState("");

  const goldPrice = 17455;
  const silverPrice = 2286;
  const nisabOngold = 1424677.1;
  const nisabOnsilver = 1399374.9;

  const calculateZakat = () => {
    let errorMessages = "";

    const goldWeight = parseFloat(goldWeightInTola);
    const silverWeight = parseFloat(silverWeightInTola);
    const cashValue = parseFloat(cashAmount);

    if (goldWeight < 7.5) {
      errorMessages += "Gold weight must be at least 7.5 tolas.\n";
    }

    if (silverWeight < 52.5) {
      errorMessages += "Silver weight must be at least 52.5 tolas.\n";
    }

    if (cashValue < Math.max(nisabOngold, nisabOnsilver)) {
      errorMessages +=
        "Cash amount must be greater than or equal to the applicable nisab.\n";
    }

    setErrorMessage(errorMessages);

    if (goldWeight >= 7.5) {
      const goldWeightInGrams = goldWeight * 11.66;
      const goldValue = goldPrice * goldWeightInGrams;
      const zakatOnGold = 0.025 * goldValue;
      setResultGold("Zakat Amount\n Zakat on gold: " + zakatOnGold.toFixed(2));
    } else {
      setResultGold("");
    }

    if (silverWeight >= 52.5) {
      const silverWeightInGrams = silverWeight * 11.66;
      const silverValue = silverPrice * silverWeightInGrams;
      const zakatOnSilver = 0.025 * silverValue;
      setResultSilver("Zakat on silver: " + zakatOnSilver.toFixed(2) + "PKR");
    } else {
      setResultSilver("");
    }

    if (cashValue >= Math.max(nisabOngold, nisabOnsilver)) {
      const zakatOnCashAmount = 0.025 * cashValue;
      setResultCash("Zakat on Cash Amount: " + zakatOnCashAmount.toFixed(2));
    } else {
      setResultCash("");
    }
  };
  const handleCancel = () => {
    // Clear all the input fields and results
    setGoldWeightInTola("");
    setSilverWeightInTola("");
    setCashAmount("");
    setErrorMessage("");
    setResultGold("");
    setResultSilver("");
    setResultCash("");
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
            <div className="text-center my-3 pt-4">
              <h2>
                Zakat Calculator
                <BiSolidDonateHeart />
              </h2>
            </div>
            <form action="" className="mt-4" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="inputA" className="form-label">
                  Enter the weight of your gold in tola:
                </label>
                <input
                  className="form-control"
                  name="inputA"
                  type="number"
                  id="inputA"
                  value={goldWeightInTola}
                  onChange={(e) => setGoldWeightInTola(e.target.value)}
                />
              </div>
              <div className="mt-3">
                <label htmlFor="inputB" className="form-label">
                  Enter the weight of your silver in tola:
                </label>
                <input
                  className="form-control"
                  name="inputB"
                  id="inputB"
                  type="number"
                  value={silverWeightInTola}
                  onChange={(e) => setSilverWeightInTola(e.target.value)}
                />
              </div>
              <div className="mt-3">
                <label htmlFor="inputC" className="form-label">
                  Enter the Cash in hand:
                </label>
                <input
                  className="form-control"
                  name="inputC"
                  id="inputC"
                  type="number"
                  value={cashAmount}
                  onChange={(e) => setCashAmount(e.target.value)}
                />
              </div>
              <div className="float-end mt-3 ">
                <div className="d-flex">
                  <button
                    className="btn btn-sm btn-danger mx-1"
                    onClick={calculateZakat}
                  >
                    Calculate Zakat
                  </button>
                  <button
                    className="btn btn-sm btn-danger mx-1"
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
                {/* <h3>Zakat Amount</h3> */}

                <h5>{resultGold}</h5>

                <h6>{resultSilver}</h6>

                <h6>{resultCash}</h6>

                <h6 className="text-danger">{errorMessage}</h6>

                <div className="row d-grid mt-3 mx-auto">
                  <Link
                    to="/organization"
                    className=" btn btn-danger text-decoration-none text-light"
                  >
                    Donate Zakat
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

export default ZakatCalculator;
