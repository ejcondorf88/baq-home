// src/components/WelcomeModal.tsx
import React, { useState } from "react";
import { Dialog } from "@headlessui/react";

const WelcomeModal = () => {
  const [open, setOpen] = useState(true);

  return (
    <Dialog open={open} onClose={setOpen} className="relative z-50">
      {/* Fondo oscuro */}
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />

      {/* Contenido del modal */}
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <Dialog.Panel className="mx-auto max-w-sm rounded bg-white p-6 shadow-lg">
          <Dialog.Title className="text-xl font-bold text-orange-500">
            ¡Bienvenido!
          </Dialog.Title>
          <Dialog.Description className="mt-2">
            Gracias por visitar el Banco de Alimentos de Quito.
          </Dialog.Description>
          <button
            onClick={() => setOpen(false)}
            className="mt-4 bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600"
          >
            Entendido
          </button>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
};

export default WelcomeModal;
