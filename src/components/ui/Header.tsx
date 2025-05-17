// src/components/Header.tsx
import React from "react";
import { useState } from "react";

const Header = () => {
  const [language] = useState("ES");

  return (
    <header className="bg-white shadow-md p-4 flex justify-between items-center">
      <div className="flex items-center space-x-2">
        <a href="/" className="text-orange-500 font-bold text-xl">
          Banco de Alimentos Quito
        </a>
      </div>
      <nav>
        <button className="focus:outline-none">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </nav>
      <div>
        <button className="focus:outline-none">
          <img
            src="https://www.baq.ec/wp-content/uploads/2023/02/WB_Baq_Logo-blanco.png "
            alt="Bandera"
            className="h-6 w-6"
          />
          <span className="ml-2">{language}</span>
        </button>
      </div>
    </header>
  );
};

export default Header;
