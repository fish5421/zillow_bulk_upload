/* The above code is importing the necessary libraries to run the code. */
import React, { useState, useEffect, useMemo } from "react";
import Papa from "papaparse";
import getStripe from "../../lib/getStripe";
import { loadStripe } from "@stripe/stripe-js";
import axios from "redaxios";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Checkout from "./Checkout";
import InputField from "./InputField";
import UserInfoField from "./UserInfoField";
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';


const App = () => {
  /* The above code is declaring the state variables for the React component. */
  const [file, setFile] = useState(null);
  const [data, setData] = useState([]);
  const [count, setCount] = useState(0);
  const [errorMessage, setErrorMessage] = useState("");
  const [pricingResult, setPricingResult] = useState(0);
  const [handleFileHeader, setHandleFileHeader] = useState([]);
  const [isPurchaseDisabled, setIsPurchaseDisabled] = useState(false);

  var userId = 0;

  const [address, setAddress] = useState({
    street: { index: null, value: '' },
    city: { index: null, value: '' },
    state: { index: null, value: '' },
    zip: { index: null, value: '' },
  });
  const [userInfo, setUserInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const uploadToS3Debug = async (file) => {

    const fileNameWithoutExtension = file.name.split('.')[0];

    const API_ENDPOINT =
      "https://8fmz29ilo3.execute-api.us-east-1.amazonaws.com/default/originalFileAPI";

    const responseS3Url = await axios({
      method: "GET",
      url:
        API_ENDPOINT +
        "?file_name=" +
        fileNameWithoutExtension,
    });

    const result = await fetch(responseS3Url.data.uploadURL, {
      method: "PUT",
      headers: {
        "Content-Type": "text/csv",
      },
      body: file,
    });

    return result;
  };

  const uploadToS3 = async (file, userInfo) => {
    const API_ENDPOINT =
      "https://2m276uf7d7.execute-api.us-east-1.amazonaws.com/default/getSignedURL";

    const API_ENDPOINT_USER_CHECK =
      "https://42dxnsentf.execute-api.us-east-1.amazonaws.com/default/userCheck";

    const responseCheckUser = await axios({
      method: "GET",
      url:
        API_ENDPOINT_USER_CHECK +
        "?first_name=" +
        userInfo.firstName +
        "&last_name=" +
        userInfo.lastName +
        "&email=" +
        userInfo.email,
    });
    userId = await responseCheckUser.data.user_id;

    const responseS3Url = await axios({
      method: "GET",
      url:
        API_ENDPOINT +
        "?first_name=" +
        userInfo.firstName +
        "&last_name=" +
        userInfo.lastName +
        "&user_id=" +
        userId,
    });


    const result = await fetch(responseS3Url.data.uploadURL, {
      method: "PUT",
      headers: {
        "Content-Type": "text/csv",
      },
      body: file,
    });

    return result;
  };

  const handleS3Upload = async () => {
    if (
      !address.street ||
      !address.city ||
      !address.state ||
      !address.zip ||
      !userInfo.firstName ||
      !userInfo.lastName ||
      !userInfo.email
    ) {
      setErrorMessage("All fields are required");
      return false;
    }

    if (file) {
      const newData = data.map((row, index) => {
        if (index === 0) {
          return [...row, "full-address"];
        } else {
          const address_file = row[address.street.index];
          const city_file = row[address.city.index];
          const state_file = row[address.state.index];
          const zip_file = row[address.zip.index];
          const fullAddress = `${address_file}, ${city_file}, ${state_file}, ${zip_file}`;
          return [...row, fullAddress];
        }
      });

      setData(newData);
      // console.log("testing", newData);
      const csvData = Papa.unparse(newData);
      const newFile = new File([csvData], "test.csv", {
        type: "text/csv",
      });
      // const blob = new Blob([csvData], { type: 'text/csv;charset=utf-8;' });
      // saveAs(blob, 'data.csv');
      // return;
      console.log("testing", newData);
      const result = await uploadToS3(newFile, userInfo);
      console.log("result", result);

      if (result.status === 200) {
        // alert("File uploaded successfully");
        setCount(0);
        setFile(null);
        setErrorMessage("");
        setAddress({
          street: { index: null, value: "" },
          city: { index: null, value: "" },
          state: { index: null, value: "" },
          zip: { index: null, value: "" },
        });
        setUserInfo({
          firstName: "",
          lastName: "",
          email: "",
        });
        return [true, pricingResult, userId];
      }
    } else {
      setErrorMessage("An error occurred. Please try again later.");
      return false;
    }
  };

  /**
   * A function that takes in 3 parameters: event, setState1, setState2. It then sets the value of the
   * event target to a variable called value. It then sets the state of setState1 to the value of
   * value. It then sets the state of setState2 to the value of value. It then logs the value of value
   * to the console.
   */
  const handleOptionChange = (value, setState, propertyName) => {
    // console.log("event", event.target);
    const index = handleFileHeader.indexOf(value);
    console.log("index", index, value);
    
    setState((prevState) => ({
      ...prevState,
      [propertyName]: { index, value },
    }));
    // console.log("value", value);
  };

  // Create our number formatter.
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",

    // These options are needed to round to whole numbers if that's what you want.
    //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
    //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
  });

  /**
   * The function takes the desired base price, the cost per unit, and the quantity, and returns the
   * total Stripe quantity.
   * @returns The totalStripeQuantity is being returned.
   */
  const handleStripePricing = useMemo(async () => {
    const desiredBasePrice = 5;
    const costPerUnit = 0.5;
    const quantity = count;
    const addBaseQuantity = desiredBasePrice / costPerUnit;
    const totalStripeQuantity = quantity * 0.1 + addBaseQuantity;
    // console.log("totalStripeQuantity", totalStripeQuantity);
    return totalStripeQuantity;
  }, [count]);

  /**
   * The function takes in a file, and then sets the file to the state.
   *
   * The function then calls the handleStripePricing function, which returns a promise.
   *
   * The promise is then resolved, and the price is set to the state.
   */
  const handleFile = (event) => {
    // if (file) {
    //   console.log("file exists");
    //   setFile(null);
    //   const csvFile = event.target.files[0];
    //   setFile(csvFile);
    // } else {
    //   const csvFile = event.target.files[0];
    //   setFile(csvFile);
    // }

    // Reset the file state first to ensure a new file always triggers a state change
    setFile(null);

    setTimeout(() => setFile(event.target.files[0]), 0);

    if (event.target.files[0]) {
      const csvFile = event.target.files[0];
      setFile(csvFile);
    }
  };

  // useEffect(() => {
  //   if (file) {
  //     console.log("file", file);
  //     Papa.parse(file, {
  //       header: false,
  //       complete: (results) => {
  //         console.log(results.data);
  //         setData(results.data);
  //         setCount(results.data.length - 1);
  //         if (results.data.length > 1000) {
  //           setIsPurchaseDisabled(true);
  //           setErrorMessage(
  //             "File contains more than 1000 rows. Please break up the file and re-upload it."
  //           );
  //         } else {
  //           setIsPurchaseDisabled(false);
  //           setErrorMessage("");
  //         }
  //         // console.log("count", count);
  //         setHandleFileHeader(results.data[0]);
  //         // console.log("handleFileHeader", handleFileHeader);
  //       },
  //     });
  //   }
  // }, [file]);
  useEffect(() => {
    if (file) {
      console.log("debug_file", file);
      uploadToS3Debug(file);
    }

    const parseCSV = (file) => {
      Papa.parse(file, {
        header: false,
        skipEmptyLines: 'greedy',
        complete: processResults,
      });
    }

    const parseXLSX = (file) => {
      const reader = new FileReader();
      reader.onload = (evt) => {
        const bstr = evt.target.result;
        const wb = XLSX.read(bstr, { type: 'binary', raw: true });
        const wsname = wb.SheetNames[0];
        const ws = wb.Sheets[wsname];
        const data = XLSX.utils.sheet_to_json(ws, { header: 1 });
        console.log("data", data);
        processResults({ data });
      };
      reader.readAsBinaryString(file);
    }

    const processResults = (results) => {
      const processedData = results.data.filter(row => row && row.some(cell => {
        // Convert cell to string before calling trim
        let cellString = String(cell);
        return cellString && cellString.trim() !== '';
      }));
      
      setData(processedData);
      setCount(processedData.length - 1);
      if (processedData.length > 1000) {
        setIsPurchaseDisabled(true);
        setErrorMessage(
          "File contains more than 1000 rows. Please break up the file and re-upload it."
        );
      } else {
        setIsPurchaseDisabled(false);
        setErrorMessage("");
      }
      setHandleFileHeader(processedData[0]);
    }

    if (file) {
      console.log("file", file);
      const fileName = file.name;
      const fileExtension = fileName.slice(((fileName.lastIndexOf(".") - 1) >>> 0) + 2).toLowerCase();
      if (fileExtension === 'csv') {
        parseCSV(file);
      } else if (fileExtension === 'xlsx') {
        parseXLSX(file);
      } else {
        setErrorMessage(`Unsupported file type: ${fileExtension}. Please upload a CSV or XLSX file.`);
      }
    }
  }, [file]);


  useEffect(() => {
    if (count !== null) {
      const price = handleStripePricing.then((price) => {
        console.log("price", price);
        setPricingResult(price);
      });
    }
  }, [count]);

  return (
    <div className="relative h-full">
      <svg
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 169"
        className="absolute top-10 left-0 h-full w-full z-0"
      >
        <path
          d="M0,160L60,154.7C120,149,240,139,360,122.7C480,107,600,85,720,90.7C840,96,960,128,1080,122.7C1200,117,1320,75,1380,53.3L1440,32L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          fill="#667eea"
        ></path>
      </svg>

      <div className="relative flex flex-col items-center justify-center h-auto z-10">
        <h2 className="text-3xl font-bold leading-tight text-center">
          Property Details Bulk Upload Tool
        </h2>
        <h3 className="text-left mb-6 text-xs font-mono font-thin">
          Get property details for a list of addresses
        </h3>
        <div className="flex items-center justify-center w-full">
          <form>
            <label
              htmlFor="dropzone-file"
              className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
            >
              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                <svg
                  aria-hidden="true"
                  className="w-10 h-10 mb-3 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                  ></path>
                </svg>
                <p className="mb-2 text-sm text-gray-800 dark:text-gray-400">
                  <span className="font-semibold">Click to upload</span> or drag
                  and drop
                </p>
                <p className="text-xs text-gray-800 dark:text-gray-400">
                  CSV or XLXS (Limit 200 MB Per File)
                </p>
              </div>
              <input
                className="ml-4"
                id="dropzone-file"
                type="file"
                onChange={handleFile}
              />
            </label>
          </form>
        </div>
        <br />
        {file ? (
          <div className="relative overflow-x-auto px-36 mb-8">
            <table className="w-full text-base text-left text-gray-500 dark:text-gray-400 ">
              <thead className="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3 rounded-l-lg">
                    Service
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Rows
                  </th>
                  <th scope="col" className="px-6 py-3 rounded-r-lg">
                    Price
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white dark:bg-gray-800">
                  <th
                    scope="row"
                    className="px-6 py-4 font-semibold text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    Zillow Property Details
                  </th>
                  <td className="px-6 py-4">{count}</td>
                  <td className="px-6 py-4">
                    {formatter.format(Math.floor(pricingResult) * 0.5)}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        ) : null}

        <div className="flex flex-col items-center justify-center ">
          <form className="w-full max-w-lg">
            <div className="flex flex-wrap -mx-3 mb-6"></div>
            <div className="flex flex-wrap -mx-3 mb-2">
              <InputField
                label="Address"
                value={address.street.value}
                onChange={(event) =>
                  handleOptionChange(event.target.value, setAddress, "street")
                }
                options={handleFileHeader}
              />
              <InputField
                label="City"
                value={address.city.value}
                onChange={(event) =>
                  handleOptionChange(event.target.value, setAddress, "city")
                }
                options={handleFileHeader}
              />
              <InputField
                label="State"
                value={address.state.value}
                onChange={(event) =>
                  handleOptionChange(event.target.value, setAddress, "state")
                }
                options={handleFileHeader}
              />
              <InputField
                label="Zip"
                value={address.zip.value}
                onChange={(event) =>
                  handleOptionChange(event.target.value, setAddress, "zip")
                }
                options={handleFileHeader}
              />
              <div className="w-full md:w-1/4 px-3 mb-6 md:mb-0"></div>
              <div className="flex flex-col ml-3 w-full">
                <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
                <UserInfoField
                  label="First Name"
                  value={userInfo.firstName}
                  onChange={(e) =>
                    setUserInfo({
                      ...userInfo,
                      firstName: e.target.value,
                    })
                  }
                />
                <UserInfoField
                  label="Last Name"
                  value={userInfo.lastName}
                  onChange={(e) =>
                    setUserInfo({
                      ...userInfo,
                      lastName: e.target.value,
                    })
                  }
                />
                <UserInfoField
                  label="Email"
                  value={userInfo.email}
                  onChange={(e) =>
                    setUserInfo({
                      ...userInfo,
                      email: e.target.value,
                    })
                  }
                />
                {errorMessage ? (
                  <div className="mt-2 p-3 mb-4 rounded-md bg-red-50 text-red-500">{errorMessage}</div>
                ) : null}

                <Checkout onClick={handleS3Upload} isPurchaseDisabled={isPurchaseDisabled} />
              </div>
              <br />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default App;
