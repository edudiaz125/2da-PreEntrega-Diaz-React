import React from "react";
import CartWidget from "../CartWidget/CartWidget";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <nav className="bg-red-100	flex items-center justify-between flex-wrap p-1 ">
        <NavLink to={"/"}>
          <img
            src="../public/Logos/logoSoundTech.png"
            alt="logo"
            className="w-72"
          />
        </NavLink>

        <div className="w-full hidden lg:flex lg:items-center lg:w-auto">
          <div className="text-base items-center lg:flex-grow">
            <NavLink
              to={"categoria/guitarras"}
              className="block mt-4 lg:inline-block lg:mt-0 text-zinc-700  active:scale-110 active:font-black m-4"
            >
              Guitarras
            </NavLink>

            <NavLink
              to={"categoria/bajos"}
              className="block mt-4 lg:inline-block lg:mt-0 text-zinc-700  active:scale-110 active:font-black m-4"
            >
              Bajos
            </NavLink>

            <NavLink
              to={"categoria/teclados"}
              className="block mt-4 lg:inline-block lg:mt-0 text-zinc-700  active:scale-110 active:font-black m-4"
            >
              Teclados
            </NavLink>

            <NavLink
              to={"categoria/percusion"}
              className="block mt-4 lg:inline-block lg:mt-0 text-zinc-700  active:scale-110 active:font-black m-4"
            >
              Percusion
            </NavLink>

            <CartWidget />
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
