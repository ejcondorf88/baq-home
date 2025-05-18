import React from "react";
import Header from "../components/ui/Header";
import CallToAction from "../components/ui/CallToAction";
import CardDetails from "../components/payment/CardDetails";
import AmountSelector from "../components/payment/AmountSelector";
import RecurringDonation from "../components/payment/RecurringDonation";
import { usePaymentForm } from "../hooks/usePaymentForm";

const PaymentForm: React.FC = () => {
  const {
    isRecurring,
    setIsRecurring,
    formData,
    handleChange,
    handleSubmit,
    handleAmountSelect,
  } = usePaymentForm();

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-grow bg-gray-50">
        {/* Banner superior con mensaje inspirador */}
        <div className="bg-gradient-to-r from-orange-600 to-orange-800 py-16 text-white">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold mb-4">Tu apoyo cambia vidas</h1>
            <p className="text-xl max-w-2xl mx-auto">
              Cada donación nos acerca más a un Ecuador sin hambre. Gracias por
              ser parte de este cambio.
            </p>
          </div>
        </div>

        {/* Contenedor del formulario con diseño mejorado */}
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-xl mx-auto bg-white rounded-xl shadow-2xl overflow-hidden">
            {/* Encabezado del formulario */}
            <div className="bg-gradient-to-r from-orange-500 to-orange-600 px-8 py-6 text-white">
              <h2 className="text-2xl font-bold">Realiza tu donación</h2>
              <p className="text-orange-100">Tu generosidad alimenta esperanza</p>
            </div>

            {/* Cuerpo del formulario */}
            <div className="p-8">
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="bg-orange-50 rounded-lg p-4 border-l-4 border-orange-500 mb-6">
                  <p className="text-orange-800 font-medium">
                    Tus datos están protegidos. Utilizamos tecnología de
                    encriptación avanzada para garantizar la seguridad de tu
                    información.
                  </p>
                </div>

                <CardDetails formData={formData} handleChange={handleChange} />

                <AmountSelector
                  amount={formData.amount}
                  handleAmountSelect={handleAmountSelect}
                  handleChange={handleChange}
                />

                <RecurringDonation
                  isRecurring={isRecurring}
                  setIsRecurring={setIsRecurring}
                  formData={formData}
                  handleChange={handleChange}
                />

                {/* Botón de envío con mejora visual */}
                <button
                  type="submit"
                  className="w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-md shadow-sm text-lg font-medium text-white bg-orange-500 hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 transition-colors"
                >
                  {isRecurring ? "Autorizar Donación Recurrente" : "Realizar Donación"}
                  <svg
                    className="ml-2 h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </button>

                {/* Mensaje de seguridad */}
                <div className="flex items-center justify-center text-sm text-gray-500 mt-4">
                  <svg
                    className="h-4 w-4 mr-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                    />
                  </svg>
                  Pago 100% seguro y encriptado
                </div>
              </form>
            </div>
          </div>

          {/* Información adicional */}
          <div className="max-w-xl mx-auto mt-10 bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              ¿Por qué donar al Banco de Alimentos Quito?
            </h3>
            <div className="space-y-4">
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-orange-500 text-white">
                    <svg
                      className="h-6 w-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                      />
                    </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-gray-900">Impacto directo</h4>
                  <p className="mt-2 text-gray-600">
                    El 100% de tu donación se destina a programas de alimentación
                    para familias vulnerables.
                  </p>
                </div>
              </div>

              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-orange-500 text-white">
                    <svg
                      className="h-6 w-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
                      />
                    </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-gray-900">Transparencia</h4>
                  <p className="mt-2 text-gray-600">
                    Publicamos informes periódicos para que puedas ver cómo se
                    utilizan los fondos.
                  </p>
                </div>
              </div>

              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-orange-500 text-white">
                    <svg
                      className="h-6 w-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                      />
                    </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-gray-900">Alcance nacional</h4>
                  <p className="mt-2 text-gray-600">
                    Operamos en todo Ecuador, llegando a las comunidades más
                    necesitadas del país.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <CallToAction />
      </main>
    </div>
  );
};

export default PaymentForm;
