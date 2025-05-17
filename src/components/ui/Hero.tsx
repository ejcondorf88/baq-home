// src/components/HeroBanner.tsx
import React from "react";

const HeroBanner = () => {
  return (
    <section className="relative">
      <img
        src="https://www.baq.ec/wp-content/uploads/2023/02/WB_BAQ_Banner-Home_V1-scaled.jpg "
        alt="Familia feliz comiendo"
        className="w-full h-[500px] object-cover"
      />
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="absolute inset-0 flex items-center justify-center text-white text-center px-4 sm:px-0">
        <p className="text-xl md:text-2xl">
          ¡Bienvenido al Banco de Alimentos Quito!
        </p>
      </div>
    </section>
  );
};

export default HeroBanner;
