import StripeForm from "./StripeForm";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(
  "pk_test_51Odyx7IchGlJTdF3r4A09tI59XLrhPHo8sqNi4JN8ugDkmacmL5sy2MBF5xuB82gxws7faIw1iVsiUofNp3IQVpl000T4yPAYL"
);

const StripeContainer = () => {
  return (
    <Elements stripe={stripePromise}>
      <StripeForm />
    </Elements>
  );
};

export default StripeContainer;