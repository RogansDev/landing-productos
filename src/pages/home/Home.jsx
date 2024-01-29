import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import ElixirModal from "../modals/Elixir";
import GetUpModal from "../modals/GetUp";

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeOpen = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="flex flex-col gap-4 p-5">
      <h2>Bienvenidos a home</h2>
      <section className="flex flex-row flex-wrap items-center justify-center gap-4">
        <article className="border-2 border-sky-500 w-1/2 h-24 rounded-md bg-blue-200">
          <Link
            to="/ElixirModal"
            onClick={openModal}
            className="text-center text-3xl py-6 font-semibold uppercase tracker-md relative left-[18rem]"
          >
            Elixir
          </Link>
          {isModalOpen && <ElixirModal onClose={closeOpen} />}
        </article>
        <article className="border-2 border-sky-500 w-1/2 h-24 rounded-md bg-blue-200">
          <Link
            to="/GetUpModal"
            onClick={openModal}
            className="text-center text-3xl py-6 font-semibold uppercase tracker-md relative left-[18rem]"
          >
            Get up
          </Link>
          {/* {isModalOpen && <GetUpModal onClose={closeOpen} />} */}
        </article>
        <article className="border-2 border-sky-500 w-1/2 h-24 rounded-md bg-blue-200">
        <Link
            to="/RenewModal"
            onClick={openModal}
            className="text-center text-3xl py-6 font-semibold uppercase tracker-md relative left-[18rem]"
          >
            Renew
          </Link>
          {isModalOpen && <ElixirModal onClose={closeOpen} />}
        </article>
        <article className="border-2 border-sky-500 w-1/2 h-24 rounded-md bg-blue-200">
        <Link
            to="/TonicModal"
            onClick={openModal}
            className="text-center text-3xl py-6 font-semibold uppercase tracker-md relative left-[18rem]"
          >
            Tonic
          </Link>
          {isModalOpen && <ElixirModal onClose={closeOpen} />}
        </article>
        <article className="border-2 border-sky-500 w-1/2 h-24 rounded-md bg-blue-200">
          <h2 className="text-center text-3xl py-6 font-semibold uppercase tracker-md">
            Roger
          </h2>
        </article>
        <article className="border-2 border-sky-500 w-1/2 h-24 rounded-md bg-blue-200">
          <h2 className="text-center text-3xl py-6 font-semibold uppercase tracker-md">
            Rogans 101
          </h2>
        </article>
      </section>
    </div>
  );
};

export default Home;
