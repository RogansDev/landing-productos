import React, { useState } from "react";
import Banner from "../../../public/img/ElixirOne.jpg";
import Elixirmd from "../../../public/img/Elixirmd.jpg";
import { Link } from "react-router-dom";

const ElixirModal = ({ onClose }) => {


  return (
    <div className="fixed inset-0 flex items-center justify-center font-poppins">
    <div className="relative bg-white p-2 rounded shadow-md">
      <Link
        to="/"
        className="text-xl font-bold cursor-pointer absolute top-6 right-6 text-black"
        onClick={onClose}
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
            stroke="white"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M9.16992 14.8299L14.8299 9.16992"
            stroke="white"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M14.8299 14.8299L9.16992 9.16992"
            stroke="white"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </Link>
      {/* Contenido del modal */}
      <section>
        <img
          src={Banner}
          alt=""
          className="md:w-[40rem] md:h-[35rem] lg:w-[42rem] lg:h-[603px] object-cover z-10 hidden md:flex rounded-md"
        />
        <img 
           src={Elixirmd} 
           alt="" 
           className="md:hidden flex w-[504px] h-[693px] rounded-md"
        />
      </section>
      <section className=" absolute left-[3.5rem] top-[27rem] md:left-[20rem] md:top-[15rem] text-white ">
        <div className="md:flex md:flex-col hidden">
          <h2 className="text-4xl mb-2 leading-[50px]">
            ¡Gracias por <br /> confiar <br /> en Rogans!
          </h2>
          <p className="mb-9 text-sm">
            Experimenta la comodidad de recibir asesoría <br /> personalizada
            desde donde estés.
          </p>
          <Link to="/Elixir">
            <button
              onClick={onClose}
              className="flex items-center justify-center gap-4 bg-secondary-20 py-3 font-semibold text-white text-sm p-2 rounded-md w-[100%]"
            >
              <svg
                width="21"
                height="20"
                viewBox="0 0 21 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.16602 1.66699V4.16699"
                  stroke="#FCFCFC"
                  stroke-width="1.25"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M13.834 1.66699V4.16699"
                  stroke="#FCFCFC"
                  stroke-width="1.25"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M3.41602 7.5752H17.5827"
                  stroke="#FCFCFC"
                  stroke-width="1.25"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M18.8327 15.8333C18.8327 16.4583 18.6577 17.05 18.3493 17.55C17.7743 18.5167 16.716 19.1667 15.4993 19.1667C14.6577 19.1667 13.891 18.8583 13.3077 18.3333C13.0494 18.1167 12.8244 17.85 12.6494 17.55C12.341 17.05 12.166 16.4583 12.166 15.8333C12.166 13.9917 13.6577 12.5 15.4993 12.5C16.4993 12.5 17.391 12.9417 17.9993 13.6333C18.516 14.225 18.8327 14.9917 18.8327 15.8333Z"
                  stroke="#FCFCFC"
                  stroke-width="1.25"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M14.1992 15.8333L15.0242 16.6583L16.7992 15.0166"
                  stroke="#FCFCFC"
                  stroke-width="1.25"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M18 7.08366V13.6336C17.3917 12.942 16.5 12.5003 15.5 12.5003C13.6583 12.5003 12.1667 13.992 12.1667 15.8337C12.1667 16.4587 12.3417 17.0503 12.65 17.5503C12.825 17.8503 13.05 18.117 13.3083 18.3337H7.16667C4.25 18.3337 3 16.667 3 14.167V7.08366C3 4.58366 4.25 2.91699 7.16667 2.91699H13.8333C16.75 2.91699 18 4.58366 18 7.08366Z"
                  stroke="#FCFCFC"
                  stroke-width="1.25"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M10.4961 11.4167H10.5036"
                  stroke="#FCFCFC"
                  stroke-width="1.66667"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M7.41209 11.4167H7.41957"
                  stroke="#FCFCFC"
                  stroke-width="1.66667"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M7.41209 13.9167H7.41957"
                  stroke="#FCFCFC"
                  stroke-width="1.66667"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <h2>¡Haz clic aquí y reserva ahora!</h2>
            </button>
          </Link>
        </div>
        <div className="flex flex-col items-center md:hidden">
          <h2 className="text-3xl text-center md:text-4xl mb-2 leading-[40px]">
            ¡Gracias por confiar <br /> en Rogans!
          </h2>
          <p className="mb-9 md:text-sm text-lg text-center">
            Experimenta la comodidad de recibir asesoría <br /> personalizada
            desde donde estés.
          </p>
          <Link to="/Elixir">
            <button
              onClick={onClose}
              className="flex items-center justify-center gap-4 bg-secondary-20 py-3 font-semibold text-white text-sm p-2 rounded-md w-[100%]"
            >
              <svg
                width="21"
                height="20"
                viewBox="0 0 21 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.16602 1.66699V4.16699"
                  stroke="#FCFCFC"
                  stroke-width="1.25"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M13.834 1.66699V4.16699"
                  stroke="#FCFCFC"
                  stroke-width="1.25"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M3.41602 7.5752H17.5827"
                  stroke="#FCFCFC"
                  stroke-width="1.25"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M18.8327 15.8333C18.8327 16.4583 18.6577 17.05 18.3493 17.55C17.7743 18.5167 16.716 19.1667 15.4993 19.1667C14.6577 19.1667 13.891 18.8583 13.3077 18.3333C13.0494 18.1167 12.8244 17.85 12.6494 17.55C12.341 17.05 12.166 16.4583 12.166 15.8333C12.166 13.9917 13.6577 12.5 15.4993 12.5C16.4993 12.5 17.391 12.9417 17.9993 13.6333C18.516 14.225 18.8327 14.9917 18.8327 15.8333Z"
                  stroke="#FCFCFC"
                  stroke-width="1.25"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M14.1992 15.8333L15.0242 16.6583L16.7992 15.0166"
                  stroke="#FCFCFC"
                  stroke-width="1.25"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M18 7.08366V13.6336C17.3917 12.942 16.5 12.5003 15.5 12.5003C13.6583 12.5003 12.1667 13.992 12.1667 15.8337C12.1667 16.4587 12.3417 17.0503 12.65 17.5503C12.825 17.8503 13.05 18.117 13.3083 18.3337H7.16667C4.25 18.3337 3 16.667 3 14.167V7.08366C3 4.58366 4.25 2.91699 7.16667 2.91699H13.8333C16.75 2.91699 18 4.58366 18 7.08366Z"
                  stroke="#FCFCFC"
                  stroke-width="1.25"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M10.4961 11.4167H10.5036"
                  stroke="#FCFCFC"
                  stroke-width="1.66667"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M7.41209 11.4167H7.41957"
                  stroke="#FCFCFC"
                  stroke-width="1.66667"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M7.41209 13.9167H7.41957"
                  stroke="#FCFCFC"
                  stroke-width="1.66667"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <h2>¡Haz clic aquí y reserva ahora!</h2>
            </button>
          </Link>
        </div>
      </section>
    </div>
  </div>
  );
};

export default ElixirModal;

// md:h-[603px]