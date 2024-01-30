import React from 'react'
import { Link } from 'react-router-dom';
import Banner from '../../../public/img/renew.jpg';
import ModalRenewLg from '../sizes/modals/renew/ModalRenewLg';
import ModalRenewMd from '../sizes/modals/renew/ModalRenewMd';

const RenewModal = ({onClose}) => {



  return (
     <div className='flex overflow-hidden'>
       <section className='hidden md:block'>
         <ModalRenewLg />
       </section>
       <section className="md:hidden">
          <ModalRenewMd />
       </section>
     </div>
  )
}

export default RenewModal;
