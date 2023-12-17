import React from "react";
import { NavLink } from "react-router-dom";
import "../index.css"
import uleam from "../pages/uleam.png"
import "./navbar.css"


function Navbar() {
  return (
    <div>
      <nav className="flex items-center justify-between bg-gray-800 h-20 shadow-2xl">
        <div className="logo">  
          <h1 className="text-white ml-4 cursor-pointer text-2xl"><img src={uleam} alt="" className="" /></h1>
        </div>
        <ul className="flex">
          <li>
            <NavLink
              className="text-white mr-4 bg-gray-500 pt-4 p-4 pr-5 pl-5 hover:bg-gray-600 transition-all rounded"
              to="/home"
            >
              <i className="fas fa-home"></i> Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className="text-white mr-4 bg-gray-500 pt-4 p-4 pr-5 pl-5 hover:bg-gray-600 transition-all rounded"
              to="/mispublicaciones"
            >
              <i className="fas fa-question"></i> Mis Publicaciones
            </NavLink>
          </li>
          <li>
            <NavLink
              className="text-white mr-4 bg-gray-500 pt-4 p-4 pr-5 pl-5 hover:bg-gray-600 transition-all rounded"
              to="publicar"
            >
              <i className="fas fa-reply"></i> Publicar
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
