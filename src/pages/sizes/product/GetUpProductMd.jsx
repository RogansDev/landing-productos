import React from "react";
import Banner from "../../../../public/img/getup-back.jpg";
import { Link } from "react-router-dom";
import ButtomComponent from "../../../components/ButtomComponent";

const GetUpProductMd = () => {
  return (
    <div className="h-auto">
      <div>
        <img src={Banner} alt="" />
      </div>
      <section className="flex flex-col gap-3 mx-auto p-1">
        <form
          action=""
          className="flex flex-col items-center justify-center gap-8 p-5 relative right-10"
        >
          {/* inout normal */}
          <section className="relative flex flex-col">
            <input
              type="text"
              className="border border-slate-400 py-3 rounded-md  w-[370px]"
            />
            <label
              htmlFor=""
              className="flex flex-col bg-white h-6 px-2 absolute -top-3 left-5"
            >
              nombres
            </label>
          </section>
          {/* email */}
          <section className="relative flex flex-col">
            <input
              type="text"
              className="border border-slate-400 py-3 rounded-md  w-[440px]"
            />
            <label
              htmlFor=""
              className="flex flex-col bg-white h-6 px-2 absolute -top-3 left-5"
            >
              correo
            </label>
          </section>
          {/* celular */}
          <section className="relative flex flex-col">
            <input
              type="text"
              className="border border-slate-400 py-3 rounded-md  w-[440px]"
            />
            <label
              htmlFor=""
              className="flex flex-col bg-white h-6 px-2 absolute -top-3 left-5"
            >
              Celular / Telefono
            </label>
          </section>
          {/* fecha de nacimiento */}
          <section className="">
            <input
              type="datetime-local"
              className="border border-slate-400 py-3 rounded-md  w-[440px]"
            />
            <label
              htmlFor=""
              className="flex flex-col bg-white h-6 px-3 absolute -top-3 left-5 text-black"
            >
              Celular / Telefono
            </label>
          </section>
          <div className="flex items-center gap-2 mb-2 mt-2">
            <input type="checkbox" name="" id="" className="w-4 h-4" />
            <article className="text-sm text-slate-700">
              Acepto los{" "}
              <Link className="text-black ">términos y condiciones</Link>
            </article>
          </div>
          <ButtomComponent
            text="Agenda tu asesoría médica virtual gratis "
            icon="check"
            color="green"
            size="lg"
            className="bg-secondary-40 py-3 px-4 rounded-md text-white"
          />
        </form>
      </section>
      {/* sobre mas informacion */}
      <section className="flex items-center justify-around gap-7">
        <Link className="flex items-center justify-center gap-2">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.74935 17.167C6.99935 17.917 8.49935 18.3337 9.99935 18.3337C14.5827 18.3337 18.3327 14.5837 18.3327 10.0003C18.3327 5.41699 14.5827 1.66699 9.99935 1.66699C5.41602 1.66699 1.66602 5.41699 1.66602 10.0003C1.66602 11.5003 2.08268 12.917 2.74935 14.167L2.10646 16.6396C1.91174 17.3886 2.60494 18.0654 3.349 17.8528L5.74935 17.167Z"
              stroke="black"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M13.75 12.3737C13.75 12.5087 13.72 12.6475 13.6561 12.7825C13.5923 12.9175 13.5096 13.045 13.4007 13.165C13.2167 13.3675 13.0139 13.5137 12.7848 13.6075C12.5595 13.7012 12.3153 13.75 12.0525 13.75C11.6694 13.75 11.26 13.66 10.8281 13.4762C10.3962 13.2925 9.96432 13.045 9.53618 12.7337C9.10428 12.4187 8.69492 12.07 8.30433 11.6837C7.9175 11.2937 7.56823 10.885 7.25651 10.4575C6.94855 10.03 6.70068 9.6025 6.52041 9.17875C6.34014 8.75125 6.25 8.3425 6.25 7.9525C6.25 7.6975 6.29507 7.45375 6.3852 7.22875C6.47534 7 6.61805 6.79 6.8171 6.6025C7.05746 6.36625 7.32036 6.25 7.59827 6.25C7.70343 6.25 7.80859 6.2725 7.90248 6.3175C8.00013 6.3625 8.0865 6.43 8.15411 6.5275L9.02541 7.75375C9.09301 7.8475 9.14184 7.93375 9.17564 8.01625C9.20944 8.095 9.22822 8.17375 9.22822 8.245C9.22822 8.335 9.20193 8.425 9.14935 8.51125C9.10053 8.5975 9.02917 8.6875 8.93903 8.7775L8.65361 9.07375C8.61229 9.115 8.59352 9.16375 8.59352 9.22375C8.59352 9.25375 8.59727 9.28 8.60478 9.31C8.61605 9.34 8.62732 9.3625 8.63483 9.385C8.70243 9.50875 8.81885 9.67 8.9841 9.865C9.1531 10.06 9.33337 10.2587 9.52867 10.4575C9.73147 10.6562 9.92676 10.84 10.1258 11.0087C10.3211 11.1737 10.4826 11.2862 10.6103 11.3537C10.6291 11.3612 10.6516 11.3725 10.6779 11.3837C10.7079 11.395 10.738 11.3987 10.7718 11.3987C10.8356 11.3987 10.8845 11.3762 10.9258 11.335L11.2112 11.0537C11.3051 10.96 11.3952 10.8887 11.4816 10.8437C11.568 10.7912 11.6544 10.765 11.7482 10.765C11.8196 10.765 11.8947 10.78 11.9773 10.8137C12.06 10.8475 12.1463 10.8962 12.2402 10.96L13.4833 11.8412C13.581 11.9087 13.6486 11.9875 13.6899 12.0812C13.7275 12.175 13.75 12.2687 13.75 12.3737Z"
              fill="black"
            />
          </svg>
          <p>¿Tienes dudas?</p>
        </Link>
        <Link
          to="/GetupDetails"
          className="flex items-center justify-center gap-2"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.33268 5.00033H11.666C13.3327 5.00033 13.3327 4.16699 13.3327 3.33366C13.3327 1.66699 12.4993 1.66699 11.666 1.66699H8.33268C7.49935 1.66699 6.66602 1.66699 6.66602 3.33366C6.66602 5.00033 7.49935 5.00033 8.33268 5.00033Z"
              stroke="black"
              stroke-width="1.25"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M13.3333 3.34961C16.1083 3.49961 17.5 4.52461 17.5 8.33294V13.3329C17.5 16.6663 16.6667 18.3329 12.5 18.3329H7.5C3.33333 18.3329 2.5 16.6663 2.5 13.3329V8.33294C2.5 4.53294 3.89167 3.49961 6.66667 3.34961"
              stroke="black"
              stroke-width="1.25"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <p>¿Quiéres saber más sobre Elixir?</p>
        </Link>
      </section>
    </div>
  );
};

export default GetUpProductMd;
