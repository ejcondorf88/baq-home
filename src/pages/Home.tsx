import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import { QRCodeSVG } from "qrcode.react";
import Header from "../components/ui/Header";
import Hero from "../components/ui/Hero";
import CallToAction from "../components/ui/CallToAction";

Modal.setAppElement("#root");

const Home: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [donationType, setDonationType] = useState<'one-time' | 'recurring'>('one-time');

  useEffect(() => {
    setShowModal(true);
  }, []);

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
        className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gradient-to-br from-white to-teal-50 rounded-lg p-8 shadow-xl max-w-md w-full mx-4"
        overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
        contentLabel="Modal de Bienvenida"
      >
        <div className="text-center">
          <h2 className="text-3xl font-bold text-teal-700 mb-4">¡Apoya Nuestra Causa!</h2>
          <p className="text-gray-600 mb-6">Escanea el código QR para realizar tu donación</p>
          
          <div className="bg-white p-4 rounded-lg shadow-md mb-6 inline-block">
            <QRCodeSVG 
              value="https://tu-link-de-donacion.com" 
              size={200}
              level="H"
              includeMargin={true}
            />
          </div>

          <div className="mb-6">
            <div className="flex justify-center space-x-4 mb-4">
              <button
                onClick={() => setDonationType('one-time')}
                className={`px-4 py-2 rounded-lg transition-colors duration-200 ${
                  donationType === 'one-time'
                    ? 'bg-teal-600 text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                Donación Única
              </button>
              <button
                onClick={() => setDonationType('recurring')}
                className={`px-4 py-2 rounded-lg transition-colors duration-200 ${
                  donationType === 'recurring'
                    ? 'bg-teal-600 text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                Donación Recurrente
              </button>
            </div>
            
            {donationType === 'recurring' && (
              <div className="text-sm text-gray-600">
                <p>Con la donación recurrente, apoyas nuestra causa de manera continua.</p>
                <p className="mt-2">Puedes cancelar en cualquier momento.</p>
              </div>
            )}
          </div>

          <button
            onClick={() => setShowModal(false)}
            className="bg-teal-500 hover:bg-teal-600 text-white font-semibold py-2 px-6 rounded-lg transition-colors duration-200"
          >
            Cerrar
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default Home;
