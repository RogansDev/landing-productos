import React, { useEffect, useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import GetUpProductMd from "../sizes/product/GetUpProductMd";
import GetUpProductLg from "../sizes/product/GetUpProductLg";

// import dateFns from "date-fns";

const GetUp = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <div className="flex overflow-hidden">
     <div className="hidden md:block">
       <GetUpProductLg />
     </div>
      <div className="md:hidden">
        <GetUpProductMd />
      </div>
    </div>
  );
};

export default GetUp;
