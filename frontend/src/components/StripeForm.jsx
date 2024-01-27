import React, { useState } from "react";
import {
  useStripe,
  useElements,
  CardNumberElement,
  CardExpiryElement,
  CardCvcElement,
} from "@stripe/react-stripe-js";

const StripeForm = () => {
  const [error, setError] = useState(null);
  const [Loading, setStripe] = useState(false);
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = (e) => {
    e.preventDefault();
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
                    <button className="btn btn-primary">Pay Now</button>
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
