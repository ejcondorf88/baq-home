import React from "react";
import Modal from "react-modal";
import Header from "../components/ui/Header";
import Hero from "../components/ui/Hero";
import CallToAction from "../components/ui/CallToAction";
import QRCode from "../components/ui/QrCode";
import { useWelcomeModal } from "../hooks/useWelcomeModal";

Modal.setAppElement("#root");

const Home: React.FC = () => {
  const { showModal, setShowModal, handlePaymentClick } = useWelcomeModal();

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-grow">
        <Hero />
        <CallToAction />
      </main>

      <Modal
        isOpen={showModal}
        onRequestClose={() => setShowModal(false)}
        className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gradient-to-br from-white to-orange-50 rounded-lg p-8 shadow-xl max-w-md w-full mx-4"
        overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
        contentLabel="Modal de Bienvenida"
      >
        <div className="text-center">
          <h2 className="text-3xl font-bold text-orange-700 mb-4">
            ¡Apoya Nuestra Causa!
          </h2>
          <p className="text-gray-600 mb-2">
            Realiza tu donación de manera segura
          </p>

          <div className="my-6">
            <p className="text-sm text-gray-500 mb-2">
              Escanea el código QR para realizar tu donación
            </p>
            <QRCode />
          </div>

          <div className="border-t border-gray-200 pt-4">
            <p className="text-sm text-gray-500 mb-4">O si prefieres:</p>
            <button
              onClick={handlePaymentClick}
              className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
            >
              Pago con Tarjeta
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Home;
