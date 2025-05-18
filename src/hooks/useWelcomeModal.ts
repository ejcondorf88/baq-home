import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const useWelcomeModal = () => {
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setShowModal(true);
  }, []);

  const handlePaymentClick = () => {
    setShowModal(false);
    navigate('/payment');
  };

  return {
    showModal,
    setShowModal,
    handlePaymentClick,
  };
}; 