import React, { useState } from 'react';
import { SlArrowDown, SlArrowUp } from "react-icons/sl";

const Acordeon = ({ secciones }) => {
  const [seccionAbierta, setSeccionAbierta] = useState(null);

  const toggleSeccion = (index) => {
    setSeccionAbierta(seccionAbierta === index ? null : index);
  };

  return (
    <div className="max-w-screen-xl mx-auto">
      <div className="rounded-md overflow-hidden mb-4 w-full">
        {secciones.map((seccion, index) => (
          <div key={index} className="border mb-4">
            <div
              className="p-4 cursor-pointer flex justify-between items-center rounded-md"
              onClick={() => toggleSeccion(index)}
            >
              <span className="">{seccion.titulo}</span>
              <span className='pl-5'>{seccionAbierta === index ? <SlArrowUp /> : <SlArrowDown />}</span>
            </div>
            {seccionAbierta === index && (
              <div className="p-4">
                <p>{seccion.contenido}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Acordeon;
