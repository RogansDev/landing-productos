import React, { useState } from "react";

const ButtomComponent = ({ text, icon, color, size, className }) => {

  const [isDisabled, setIsDisabled] = useState(false);

  const handleClick = () => {
    setIsDisabled(true);
    // Aquí se puede realizar la acción del botón
    setIsDisabled(false);
  };

  return (
    <button
    variant="contained"
    color={color}
    size={size}
    disabled={isDisabled}
    onClick={handleClick}
    className={className}
    
  >
    <icon name={icon} />
    {text}
  </button>
  );
};

export default ButtomComponent;
