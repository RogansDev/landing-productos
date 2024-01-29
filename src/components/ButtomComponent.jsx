import React, { useState } from "react";
import { Link } from "react-router-dom";

const ButtomComponent = ({ text, icon, color, size, className }) => {

  const [isDisabled, setIsDisabled] = useState(false);

  const handleClick = () => {
    setIsDisabled(true);
    // Aquí se puede realizar la acción del botón
    setIsDisabled(false);
  };

  return (
    <Link
    variant="contained"
    color={color}
    size={size}
    disabled={isDisabled}
    onClick={handleClick}
    className={className}
    
  >
    <icon name={icon} />
    {text}
  </Link>
  );
};

export default ButtomComponent;
