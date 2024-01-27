import StripeForm from "./StripeForm";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(
  "pk_test_51O6R8vFOGND1xdESFP9dYlO67fmWRIijZuYOYXGmhH3YBqyFBaKBkZKL8ByAyOta8ssdveQMnIJDIhbxMFM1pM8B00wYB2F7cg"
);

const StripeContainer = () => {
  return (
    <Elements stripe={stripePromise}>
      <StripeForm />
    </Elements>
  );
};

export default StripeContainer;