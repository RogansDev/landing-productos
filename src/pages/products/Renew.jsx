import React from 'react';
import { Link } from "react-router-dom";
import FormCustom from "../../components/FormCustom";
import ButtomComponent from "../../components/ButtomComponent";
import Logo from "../../../public/img/logoby.png";
import Banner from "../../../public/img/renew2.jpg";
import RenewProductLg from '../sizes/product/RenewProductLg';
import RenewProductMd from '../sizes/product/RenewProductMd';

const Renew = () => {
  return (
    <div className="flex overflow-hidden">
      <section className='className="hidden md:block "'>
        <RenewProductLg />
      </section>
      <section className="md:hidden">
         <RenewProductMd />
      </section>
    </div>
  )
}

export default Renew;
