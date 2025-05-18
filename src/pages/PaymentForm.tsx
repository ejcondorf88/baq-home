import React, { useState } from "react";
import Header from "../components/ui/Header";
import CallToAction from "../components/ui/CallToAction";
import CardDetails from "../components/payment/CardDetails";
import AmountSelector from "../components/payment/AmountSelector";
import RecurringDonation from "../components/payment/RecurringDonation";
import { usePaymentForm } from "../hooks/usePaymentForm";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

const PaymentForm: React.FC = () => {
  const {
    isRecurring,
    setIsRecurring,
    formData,
    handleChange,
    handleSubmit,
    handleAmountSelect,
  } = usePaymentForm();

  const [paymentMethod, setPaymentMethod] = useState<"card" | "paypal">("card");

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-grow bg-gray-50">
        {/* Banner superior con mensaje inspirador */}
        <div className="bg-gradient-to-r from-orange-600 to-orange-800 py-9 text-white">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold mb-4">TU DONACIÓN SALVA VIDAS</h1>
            <p className="text-xl max-w-2xl mx-auto">
              Tu donación se convierte en alimento para niños, mujeres
              gestantes, personas con capacidades especiales y adultos mayores
              sin recursos, mejorando así su calidad de vida.
            </p>
          </div>
        </div>

        {/* Contenedor principal */}
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Columna izquierda - Imagen y estadísticas */}
            <div className="space-y-8">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img
                  src="https://www.baq.ec/wp-content/uploads/2023/07/wb-baq-donar-img1.png"
                  alt="Donación BAQ"
                  className="w-full h-auto"
                />
                <div className="p-6">
                  <p className="text-gray-700">
                    <strong>
                      1 de 4 niños menores de 5 años en Ecuador tiene
                      desnutrición infantil crónica
                    </strong>
                    , una buena dieta es importante en los primeros mil días de
                    vida del niño.
                  </p>
                </div>
              </div>

              {/* Estadísticas */}
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  GRACIAS A TU AYUDA LOGRAMOS ESTOS RESULTADOS
                </h3>
                <div className="grid grid-cols-1 gap-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-orange-600">
                      + de 280,000
                    </div>
                    <p className="text-gray-600">
                      kilos de alimentos entregados cada mes
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-orange-600">
                      + 99,000
                    </div>
                    <p className="text-gray-600">usuarios atendidos</p>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-orange-600">
                      + 680
                    </div>
                    <p className="text-gray-600">voluntarios por mes</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Columna derecha - Formulario de pago */}
            <div className="bg-white rounded-xl shadow-2xl overflow-hidden">
              <div className="bg-gradient-to-r from-orange-500 to-orange-600 px-8 py-6 text-white">
                <h2 className="text-2xl font-bold">Realiza tu donación</h2>
                <p className="text-orange-100">
                  Tu generosidad alimenta esperanza
                </p>
              </div>

              <div className="p-8">
                {/* Selector de método de pago */}
                <div className="flex mb-6">
                  <button
                    className={`flex-1 py-2 px-4 text-center font-medium rounded-t-lg border-b-2 ${
                      paymentMethod === "card"
                        ? "border-orange-500 text-orange-500 bg-orange-50"
                        : "border-gray-200 text-gray-500 hover:bg-gray-100"
                    }`}
                    onClick={() => setPaymentMethod("card")}
                  >
                    Tarjeta
                  </button>
                  <button
                    className={`flex-1 py-2 px-4 text-center font-medium rounded-t-lg border-b-2 ${
                      paymentMethod === "paypal"
                        ? "border-orange-500 text-orange-500 bg-orange-50"
                        : "border-gray-200 text-gray-500 hover:bg-gray-100"
                    }`}
                    onClick={() => setPaymentMethod("paypal")}
                  >
                    PayPal
                  </button>
                </div>

                <div className="bg-orange-50 rounded-lg p-4 border-l-4 border-orange-500 mb-6">
                  <p className="text-orange-800 font-medium">
                    Tus datos están protegidos. Utilizamos tecnología de
                    encriptación avanzada para garantizar la seguridad de tu
                    información.
                  </p>
                </div>

                {paymentMethod === "card" ? (
                  <form className="space-y-6" onSubmit={handleSubmit}>
                    <CardDetails
                      formData={formData}
                      handleChange={handleChange}
                    />
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
                    <button
                      type="submit"
                      className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
                    >
                      {isRecurring
                        ? "Autorizar Donación Recurrente"
                        : "Realizar Donación"}
                    </button>
                  </form>
                ) : (
                  <PayPalScriptProvider options={{ clientId: "test" }}>
                    <div className="space-y-6">
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
                      <PayPalButtons
                        style={{ layout: "vertical" }}
                        createOrder={(data, actions) => {
                          return actions.order.create({
                            intent: "CAPTURE",
                            purchase_units: [
                              {
                                amount: {
                                  currency_code: "USD",
                                  value: formData.amount.toString(),
                                },
                              },
                            ],
                          });
                        }}
                        onApprove={async (data, actions) => {
                          if (actions.order) {
                            const details = await actions.order.capture();
                            const name =
                              details.payer?.name?.given_name || "Usuario";
                            alert(`Transaction completed by ${name}`);
                          }
                        }}
                      />
                    </div>
                  </PayPalScriptProvider>
                )}
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
