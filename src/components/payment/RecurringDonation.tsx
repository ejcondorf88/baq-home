import React from 'react';

interface RecurringDonationProps {
  isRecurring: boolean;
  setIsRecurring: (value: boolean) => void;
  formData: {
    bankName: string;
    accountNumber: string;
    clabe: string;
    frequency: string;
  };
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
}

const RecurringDonation: React.FC<RecurringDonationProps> = ({
  isRecurring,
  setIsRecurring,
  formData,
  handleChange,
}) => {
  return (
    <>
      <div className="flex items-center p-4 bg-gray-50 rounded-lg">
        <input
          type="checkbox"
          id="recurring"
          checked={isRecurring}
          onChange={(e) => setIsRecurring(e.target.checked)}
          className="h-5 w-5 text-teal-600 focus:ring-teal-500 border-gray-300 rounded"
        />
        <label htmlFor="recurring" className="ml-3 block text-sm font-medium text-gray-900">
          Quiero ser un donador recurrente
        </label>
      </div>

      {isRecurring && (
        <div className="border border-teal-200 rounded-lg p-6 bg-teal-50">
          <h3 className="text-lg font-medium text-teal-800 mb-4 flex items-center">
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            Autorización de Cargo Recurrente
          </h3>

          <p className="text-sm text-teal-700 mb-4">
            Tu apoyo continuo nos permite planificar a largo plazo y garantizar la
            sostenibilidad de nuestros programas.
          </p>

          <div className="space-y-4">
            <div>
              <label htmlFor="bankName" className="block text-sm font-medium text-gray-700">
                Nombre del Banco
              </label>
              <input
                type="text"
                id="bankName"
                value={formData.bankName}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500"
                placeholder="Ej: BBVA, Santander, etc."
              />
            </div>

            <div>
              <label htmlFor="accountNumber" className="block text-sm font-medium text-gray-700">
                Número de Cuenta
              </label>
              <input
                type="text"
                id="accountNumber"
                value={formData.accountNumber}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500"
                placeholder="Número de cuenta bancaria"
              />
            </div>

            <div>
              <label htmlFor="clabe" className="block text-sm font-medium text-gray-700">
                CLABE Interbancaria
              </label>
              <input
                type="text"
                id="clabe"
                value={formData.clabe}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500"
                placeholder="18 dígitos"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="frequency" className="block text-sm font-medium text-gray-700">
                  Frecuencia
                </label>
                <select
                  id="frequency"
                  value={formData.frequency}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500"
                >
                  <option value="monthly">Mensual</option>
                  <option value="quarterly">Trimestral</option>
                  <option value="yearly">Anual</option>
                </select>
              </div>
            </div>

            <div className="bg-white p-4 rounded-md border border-teal-100 mt-2">
              <p className="text-xs text-gray-700">
                Al continuar, autorizo a <strong>Banco de Alimentos Quito</strong> a
                realizar cargos recurrentes según la frecuencia seleccionada. Esta
                autorización permanecerá vigente hasta que notifique su cancelación
                por escrito con al menos 5 días hábiles de anticipación.
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default RecurringDonation; 