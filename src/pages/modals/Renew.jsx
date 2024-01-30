import React from 'react'
import { Link } from 'react-router-dom';
import Banner from '../../../public/img/renew.jpg';
import ModalRenewLg from '../sizes/modals/renew/ModalRenewLg';

const RenewModal = ({onClose}) => {



  return (
     <div className='flex overflow-hidden'>
       <section className='hidden md:block'>
         <ModalRenewLg />
       </section>
     </div>
  )
}

export default RenewModal;
