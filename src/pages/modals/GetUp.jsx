import React from "react";
import { Link } from "react-router-dom";
import Banner from '../../../public/img/saludsex.jpg'
import ModalGetUpLg from "../sizes/modals/getup/ModalGetUpLg";
import ModalGetUpMd from "../sizes/modals/getup/ModalGetUpMd";


const GetUpModal = ({ onClose }) => {
  return (
   <div className="flex overflow-hidden">
     <div className="hidden md:block">
       <ModalGetUpLg />
     </div>
     <div className="md:hidden">
      <ModalGetUpMd />
     </div>
   </div>
  );
};

export default GetUpModal;
