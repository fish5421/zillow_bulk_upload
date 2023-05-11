import { loadStripe } from '@stripe/stripe-js';

let stripePromise;
const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe(`${import.meta.env.VITE_REACT_APP_STRIPE_KEY}`);
  }
  return stripePromise;
};

export default getStripe;