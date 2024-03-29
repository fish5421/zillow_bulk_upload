import { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import axios from "redaxios";


import CardIcon from "../assets/react.svg";
// import ProductImage from "../images/product-image.jpg";

// import "../styles.css";

const Checkout = ({ isPurchaseDisabled, onClick }) => {
  const [stripeError, setStripeError] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const [isFileLoading, setFileLoading] = useState(false);
  const [fileIsSent, setFileIsSent] = useState(false);
  const [checkoutUrl, setCheckoutUrl] = useState('');

  const handleClick = async () => {
    try {
      setFileLoading(true);
      const result = await onClick();
      console.log("setLoader", result);
      if (result === false) {
        setFileLoading(false);
        return;
      }
      setFileLoading(false);
      setLoading(true);
      console.log("handleClick4", result);
      setFileIsSent(result[0]);
      // setStripeQuantity(Math.ceil(result[1]) - 1)
      let stripeQuantity = Math.ceil(result[1]) - 1;
      let userId = result[2];
      let filename = result[3];
      let email = result[4];

      console.log('testing_12',userId)
      //production
      const stripe_api = "https://7nhxfo2q0b.execute-api.us-east-1.amazonaws.com/default/myAWSLambdaStripe"

      //dev
      // const stripe_api = "https://s9qlazley1.execute-api.us-east-1.amazonaws.com/default/myAWStripeLamndaTest"

      // window.gtag('config', 'AW-877929943');

      // window.gtag('event', 'conversion', { 'send_to': 'AW-877929943/THVdCOya5fAYENfL0KID', 'value': stripeQuantity, 'currency': 'USD' });








      await axios
        .get(stripe_api, {
          params: {
            user_id: userId,
            quantity: stripeQuantity,
            filename: filename,
            email: email
          },
        })
        .then((response) => {
          // Redirect to the Checkout URL
          window.location.href = response.data.checkout_url;
        })
        .catch((error) => {
          console.error(error);
        });


      // console.log("handleClick1", fileIsSent);
    } catch (error) {
      console.log("handleClick2", error);
    }
  };

  // useEffect(() => {
  //   if (fileIsSent) {
  //     redirectToCheckout();
  //     setFileIsSent(false);
  //   }
  // }, [fileIsSent]);

  return (
    <div className="checkout">
      <a
        href="#_"
        className="relative inline-flex items-center px-12 py-3 overflow-hidden text-lg font-medium text-gray-200 border-2 border-green-900 rounded-full hover:text-white group hover:bg-gray-50 bg-green-800"
      >
        <span className="absolute left-0 block w-full h-0 transition-all bg-green-600 opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
        <span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease  border-green-100">
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            ></path>
          </svg>
        </span>
        {/* <span className="relative" onClick={handleClick}>
          {isLoading ? "Loading..." : "Purchase"}
        </span> */}
        <span
          className={`relative ${isPurchaseDisabled ? "cursor-not-allowed opacity-50" : ""
            }`}
          onClick={!isPurchaseDisabled ? handleClick : null}
        >
          {isLoading ? "Loading..." : "Purchase"}
        </span>
        {isFileLoading && (
          <div role="status">
            <svg
              aria-hidden="true"
              className="ml-4 w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="currentColor"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentFill"
              />
            </svg>
          </div>
        )}
      </a>
    </div>
  );
};

export default Checkout;
