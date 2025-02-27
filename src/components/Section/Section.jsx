import React from "react";
import MainButtom from "../Buttom/MainButtom";
import { Link } from "react-router-dom";

const Section = ({ greeting, info }) => {
  return (
    <>
      <section className="flex flex-col md:flex-row items-center justify-center p-5">
        <div className="secc-text md:w-1/2 md:mr-8 text-center md:text-left">
          <h1 className="text-3xl md:text-4xl font-bold">{greeting}</h1>
          <p className="text-base md:text-lg mt-3 mb-3 md:mt-5">{info}</p>
          <Link to={"/"}>
            <MainButtom
              greeting={"Ver todos los productos"}
              className="flex justify-center items-center gap-2 w-60 py-3 px-4 bg-red-700 text-white text-md font-bold border border-red-500 rounded-md ease-in-out duration-150 shadow-slate-600 hover:bg-white hover:text-red-500 lg:m-0 md:px-6"
            />
          </Link>
        </div>
        <img
          className="imagen-seccion w-full md:w-2/5 mt-5 md:mt-0"
          src="../public/Logos/logoSection.png"
          alt="imagen-seccion"
        />
      </section>
    </>
  );
};

export default Section;
