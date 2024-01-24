import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const dateBirthdata = ({ name, placeholder, value, required }) => {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleChange = (event) => {
    setSelectedDate(event.target.value);
  };

  return (
    <div className="relative flex flex-col items-center">
      <div>
        <label
          htmlFor={name}
          className="relative right-[6.7rem] top-3 bg-white text-sm"
        >
          {placeholder}
        </label>
      </div>
        <DatePicker
          id={name}
          selected={selectedDate}
          onChange={(date) => setSelectedDate(date)}
          className="w-[28rem] px-4 py-3 bg-white rounded-md shadow-sm border-2 border-black "
          required={required}
        />
        <div className="absolute top-2 left-2">
          <svg
            className="w-4 h-4 text-gray-500"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 9l6 6 6-6"
            />
          </svg>
        </div>
    </div>
  );
};

export default dateBirthdata;