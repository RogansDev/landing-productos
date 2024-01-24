import React, { useState } from "react";

const InputCustom = ({ name, placeholder, value, required }) => {
  const [inputValue, setInputValue] = useState(value);

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div className="flex flex-col items-center">
      <label htmlFor={name} className="relative right-[6.7rem] top-3 bg-white text-sm">
        {placeholder}
      </label>
      <input
        id={name}
        value={inputValue}
        onChange={handleChange}
        type="text"
        className="w-[28rem] px-4 py-3 bg-white rounded-md shadow-sm border-2 border-black "
        required={required}
      />
    </div>
  );
};

export default InputCustom;
