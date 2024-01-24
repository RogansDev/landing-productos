import React from "react";
import ButtomComponent from "./ButtomComponent";
import InputCustom from "./InputCustom";
import { Link } from "react-router-dom";

const FormCustom = () => {
  return (
    <div>
      <form>
        <div className="flex flex-col">
          <InputCustom
            name="nombre"
            placeholder="Nombre completo (Requerido) "
            required
            
          />
          <InputCustom
            name="nombre"
            placeholder="Correo electronico (Requerido) "
            required
            
          />
          <InputCustom
            name="nombre"
            placeholder="Celular / Telefono (Requerido) "
            required
            
          />
          <InputCustom
            name="nombre"
            placeholder="Ingresa Fecha de nacimiento"
            required
            
          />
          <div className="flex items-center gap-2 mb-2 mt-2">
            <input type="checkbox" name="" id="" className="w-4 h-4" />
            <article className="text-sm text-slate-700">
              Acepto los{" "}
              <Link className="text-black ">términos y condiciones</Link>
            </article>
          </div>
        </div>
      </form>
    </div>
  );
};

export default FormCustom;
