import React from "react";

const InputField = ({ label, value, onChange, options }) => {
  return (
    <div className="w-full md:w-1/4 px-3 mb-6 md:mb-0">
      <label
        className="block uppercase tracking-wide text-gray-100 text-xs font-bold mb-2"
        htmlFor={label}
      >
        {label}
      </label>
      <select
        className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
        value={value}
        onChange={onChange}
        id={label}
      >
        <option value="">Select</option>
        {/* You can also pass the options as a prop to the component */}
        {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
      </select>
    </div>
  );
};

export default InputField;
