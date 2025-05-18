import React from 'react';

interface AmountSelectorProps {
  amount: string;
  handleAmountSelect: (amount: number) => void;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const AmountSelector: React.FC<AmountSelectorProps> = ({
  amount,
  handleAmountSelect,
  handleChange,
}) => {
  const presetAmounts = [5, 10, 25, 50, 100, 200];

  return (
    <div className="mt-6">
      <label className="block text-sm font-medium text-gray-700 mb-3">
        Selecciona un monto o ingresa el que prefieras
      </label>

      <div className="grid grid-cols-3 gap-3 mb-4">
        {presetAmounts.map((presetAmount) => (
          <button
            key={presetAmount}
            type="button"
            onClick={() => handleAmountSelect(presetAmount)}
            className={`py-2 px-4 rounded-md border ${
              amount === presetAmount.toString()
                ? "bg-orange-500 border-orange-600 text-white"
                : "bg-white border-gray-300 text-gray-700 hover:bg-orange-50"
            } font-medium transition-colors`}
          >
            ${presetAmount}
          </button>
        ))}
      </div>

      <div>
        <label htmlFor="customAmount" className="sr-only">
          Monto personalizado
        </label>
        <div className="relative rounded-md shadow-sm">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <span className="text-gray-500 sm:text-sm">$</span>
          </div>
          <input
            type="number"
            id="amount"
            value={amount}
            onChange={handleChange}
            className="pl-7 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500"
            placeholder="Otro monto"
          />
        </div>
      </div>
    </div>
  );
};

export default AmountSelector; 