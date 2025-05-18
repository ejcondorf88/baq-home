import React from 'react';

interface CardDetailsProps {
  formData: {
    cardNumber: string;
    expiry: string;
    cvv: string;
    name: string;
  };
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const CardDetails: React.FC<CardDetailsProps> = ({ formData, handleChange }) => {
  return (
    <>
      <div>
        <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700">
          Número de Tarjeta
        </label>
        <input
          type="text"
          id="cardNumber"
          value={formData.cardNumber}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500"
          placeholder="1234 5678 9012 3456"
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label htmlFor="expiry" className="block text-sm font-medium text-gray-700">
            Fecha de Expiración
          </label>
          <input
            type="text"
            id="expiry"
            value={formData.expiry}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500"
            placeholder="MM/AA"
          />
        </div>
        <div>
          <label htmlFor="cvv" className="block text-sm font-medium text-gray-700">
            CVV
          </label>
          <input
            type="text"
            id="cvv"
            value={formData.cvv}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500"
            placeholder="123"
          />
        </div>
      </div>

      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
          Nombre en la Tarjeta
        </label>
        <input
          type="text"
          id="name"
          value={formData.name}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500"
          placeholder="Juan Pérez"
        />
      </div>
    </>
  );
};

export default CardDetails; 