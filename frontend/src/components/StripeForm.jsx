import React, { useState } from "react";
import {
  useStripe,
  useElements,
  CardNumberElement,
  CardExpiryElement,
  CardCvcElement,
} from "@stripe/react-stripe-js";
import { useSelector, useDispatch } from "react-redux";
import apiClient from "../services/apiservice";
import { donateCreated } from "../redux/slices/newDante";
import { emptyDonate } from "../redux/slices/donateSlice";
const StripeForm = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const stripe = useStripe();
  const elements = useElements();
  const dispatch = useDispatch();
  const { donationInfo } = useSelector((state) => state.donate);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    if (elements == null) {
      return;
    }
    setLoading(true);
    const { paymentMethod, error } = await stripe.createPaymentMethod({
      element: elements.getElement(CardNumberElement),
    });
    if (error) {
      setError(error.message);
      setLoading(false);
      return;
    }
    const {
      id,
      card: { last4, brand },
    } = paymentMethod;
    const payment = {
      id,
      last4,
      brand,
    };

    try {
      const body = {
        donerInfo: donationInfo,
        paymentMethod: payment,
      };

      const { data } = await apiClient.post("/donate", body);
      console.log(data);
      dispatch(donateCreated(data)); 
      dispatch(emptyDonate());
    } catch (err) {
      if (err.response && err.response.data && err.response.data.message) {
        setError(err.response.data.message);
      } else {
        setError(err.message);
      }
      return;
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="card">
              <div className="card-body">
                <form onSubmit={handleSubmit}>
                  <div className="text-center mb-4 mt-2">
                    <h3 className="text-success">Pay Your Donation</h3>
                  </div>
                  <p className="text-center text-danger">{error} </p>
                  <div className="mt-2">
                    <label htmlFor="cardNumber" className="form-label">
                      Enter Card Number
                    </label>
                    <CardNumberElement
                      className="form-control"
                      id="cardNumber"
                    />
                  </div>
                  <div className="mt-2">
                    <label htmlFor="cardCvc" className="form-label">
                      Enter CVC Number
                    </label>
                    <CardCvcElement className="form-control" id="cardCvc" />
                  </div>
                  <div className="mt-2">
                    <label htmlFor="cardExp" className="form-label">
                      Enter Card Exp
                    </label>
                    <CardExpiryElement className="form-control" id="cardExp" />
                  </div>
                  <div className="d-grid mt-3">
                    <button className="btn btn-primary">
                      {loading ? "Loading...." : "Donate Now"}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StripeForm;
