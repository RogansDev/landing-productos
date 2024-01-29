import React from "react";
import GetUpMd from "../sizes/getup/GetUpMd";
import GetUpLg from "../sizes/getup/GetUpLg";

const GetUpItems = () => {
  return (
    <div className="flex overflow-hidden">
      <div className="hidden md:block">
        <GetUpLg />
      </div>
      <div className="md:hidden">
       <GetUpMd />
      </div>
    </div>
  );
};

export default GetUpItems;
