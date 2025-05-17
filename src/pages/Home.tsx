import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import Header from "../components/ui/Header";
import Hero from "../components/ui/Hero";
import CallToAction from "../components/ui/CallToAction";

Modal.setAppElement("#root");

const Home: React.FC = () => {
  const [showModal, setShowModal] = useState(false);

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
        className="modal-content"
        overlayClassName="modal-overlay"
      >
        <h2>¡Bienvenido!</h2>
        <p>Gracias por visitar nuestro sitio.</p>
        <button onClick={() => setShowModal(false)}>Cerrar</button>
      </Modal>
    </div>
  );
};

export default Home;
