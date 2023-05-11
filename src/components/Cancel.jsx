import React from "react";
import { Link } from "react-router-dom";

function CancelPage() {
  return (
    <div className="bg-gray-100 flex items-center justify-center h-screen">
      <div className="bg-white p-8 rounded shadow-lg">
        <h1 className="text-3xl font-bold mb-4">Cancellation Confirmation</h1>
        <p className="mb-8">
          Your cancellation has been processed successfully.
        </p>
        <Link to="/" className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded">
          Return to Main Page
        </Link>
      </div>
    </div>
  );
}

export default CancelPage;