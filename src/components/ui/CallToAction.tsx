// src/components/CallToAction.tsx
import React from "react";

const CallToAction = () => {
  return (
    <section className="bg-orange-500 py-10 text-white text-center">
      <h1 className="text-4xl mb-4">
        ¡DONAR ES IGUAL A INVERTIR
        <br />
        EN UN ECUADOR SIN HAMBRE, ÚNETE!
      </h1>
      <p className="mb-6">
        El sistema de gestión BAQ es integral y la participación de otros
        actores es indispensable: empresas privadas, organizaciones sociales,
        instituciones educativas, organismos internacionales, empresa pública,
        colectivos y voluntarios. Ser el puente entre la abundancia y la
        carencia de alimentos.
      </p>
      <div className="flex flex-col md:flex-row justify-center gap-4">
        <button className="bg-white text-orange-500 px-4 py-2 rounded-lg hover:bg-orange-100">
          ¿QUIERES DONAR ALIMENTOS?
        </button>
        <button className="bg-white text-orange-500 px-4 py-2 rounded-lg hover:bg-orange-100">
          ¿QUIERES DONAR DINERO?
        </button>
        <button className="bg-white text-orange-500 px-4 py-2 rounded-lg hover:bg-orange-100">
          ¿QUIERES SER VOLUNTARIO?
        </button>
      </div>
    </section>
  );
};

export default CallToAction;
