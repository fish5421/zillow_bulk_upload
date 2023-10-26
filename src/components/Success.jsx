import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";


function TransactionSuccessPage() {

  useEffect(() => {
    // Add this line to track the 'Purchase' event on page load
    qp('track', 'Purchase');
  }, []);

  
  return (
    <div>
      <Helmet>
        <script>
          {`
          {"gtag('event', 'conversion', {
          'send_to': 'AW-877929943/THVdCOya5fAYENfL0KID',
          'value': 1.0,
          'currency': 'USD'})";}
          `}
          
        </script>
      </Helmet>
      <div className="bg-gray-100 flex items-center justify-center h-screen">
        <div className="bg-white p-8 rounded shadow-lg">
          <h1 className="text-3xl font-bold mb-4">Transaction Successful</h1>
          <p className="mb-3 text-lg">
            Your transaction has been processed successfully. Thank you for your
            purchase!
          </p>
          <p className="mb-8">
            Please allow up to 1 hour for your file to be processed and sent to
            your email.
          </p>
          <Link
            to="/"
            className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded"
          >
            Return to Main Page
          </Link>
        </div>
      </div>
    </div>
  );
}

export default TransactionSuccessPage;
