import React, { useState, useEffect } from "react";
import jsPDF from "jspdf";

interface RecurringDonationProps {
  isRecurring: boolean;
  setIsRecurring: (value: boolean) => void;
  formData: {
    bankName: string;
    accountNumber: string;
    accountType: string;
    creditCard: string;
    expiration: string;
    frequency: string;
    amount: string;
    fullName: string;
    ci: string;
    email: string;
    contractNumber: string;
  };
  handleChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
}

const RecurringDonation: React.FC<RecurringDonationProps> = ({
  isRecurring,
  setIsRecurring,
  formData,
  handleChange,
}) => {
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [currentDate, setCurrentDate] = useState({
    day: "",
    month: "",
    year: "",
    formatted: "",
  });

  // Set current date on component mount
  useEffect(() => {
    const now = new Date();
    const day = now.getDate().toString().padStart(2, "0");
    const month = (now.getMonth() + 1).toString().padStart(2, "0");
    const year = now.getFullYear().toString();
    const monthNames = [
      "Enero",
      "Febrero",
      "Marzo",
      "Abril",
      "Mayo",
      "Junio",
      "Julio",
      "Agosto",
      "Septiembre",
      "Octubre",
      "Noviembre",
      "Diciembre",
    ];

    setCurrentDate({
      day,
      month,
      year,
      formatted: `${day} de ${monthNames[now.getMonth()]} de ${year}`,
    });
  }, []);

  const getFrequencyText = (frequency: string) => {
    switch (frequency) {
      case "monthly":
        return "Mensual";
      case "quarterly":
        return "Trimestral";
      case "biannual":
        return "Semestral";
      case "yearly":
        return "Anual";
      default:
        return "Mensual";
    }
  };

  const generatePDF = () => {
    const doc = new jsPDF();
    /* const logoHeight = 15;*/
    const margin = 20;
    let y = 20;

    // Estilo para títulos
    const setTitleStyle = () => {
      doc.setFont("helvetica", "bold");
      doc.setFontSize(16);
      doc.setTextColor(0, 128, 128); // Color teal
    };

    // Estilo para subtítulos
    const setSubtitleStyle = () => {
      doc.setFont("helvetica", "bold");
      doc.setFontSize(12);
      doc.setTextColor(0, 0, 0);
    };

    // Estilo para texto normal
    const setNormalStyle = () => {
      doc.setFont("helvetica", "normal");
      doc.setFontSize(11);
      doc.setTextColor(0, 0, 0);
    };

    // Agregar título centrado y fecha
    setTitleStyle();
    doc.text(
      "AUTORIZACIÓN DE DÉBITO RECURRENTE",
      doc.internal.pageSize.getWidth() / 2,
      y,
      { align: "center" }
    );
    y += 15;

    // Agregar fecha automáticamente
    setNormalStyle();
    doc.text(`QUITO, ${currentDate.formatted}`, margin, y);
    y += 15;

    // Información del banco
    setSubtitleStyle();
    doc.text(`Señores:`, margin, y);
    setNormalStyle();
    doc.text(`${formData.bankName.toUpperCase()}`, margin + 40, y);
    y += 10;

    // Información del solicitante
    setNormalStyle();
    doc.text(
      `Yo, ${formData.fullName.toUpperCase()}, portador de la cédula de identidad No. ${
        formData.ci
      },`,
      margin,
      y
    );
    y += 7;

    doc.text("autorizo expresamente que se debite:", margin, y);
    y += 12;

    // Checkbox para método de débito
    const checkboxSize = 4;

    // Tarjeta de crédito (solo si hay datos)
    if (formData.creditCard) {
      doc.rect(margin, y - 3, checkboxSize, checkboxSize, "S");
      doc.text("✓", margin + 1, y);
      doc.text(
        `TARJETA DE CRÉDITO No.: ${formData.creditCard}`,
        margin + 10,
        y
      );
      y += 7;
      if (formData.expiration) {
        doc.text(`EXPIRACIÓN: ${formData.expiration}`, margin + 10, y);
        y += 7;
      }
    }

    // Cuenta bancaria (solo si hay datos)
    if (formData.accountNumber) {
      doc.rect(margin, y - 3, checkboxSize, checkboxSize, "S");
      doc.text("✓", margin + 1, y);
      doc.text(
        `CUENTA ${formData.accountType.toUpperCase()} No.: ${
          formData.accountNumber
        }`,
        margin + 10,
        y
      );
      y += 12;
    }

    // Monto y frecuencia
    setSubtitleStyle();
    doc.text("AUTORIZACIÓN DE DÉBITO:", margin, y);
    y += 7;

    setNormalStyle();
    doc.text(`Monto: $${formData.amount} USD`, margin, y);
    y += 7;

    doc.text(`Frecuencia: ${getFrequencyText(formData.frequency)}`, margin, y);
    y += 7;

    doc.text(`Correo electrónico: ${formData.email}`, margin, y);
    y += 12;

    // Texto legal
    doc.text(
      "El valor correspondiente al monto indicado será destinado a favor del Banco de Alimentos Quito,",
      margin,
      y
    );
    y += 7;

    doc.text(
      "organización sin fines de lucro que trabaja para reducir el hambre y la desnutrición en el país.",
      margin,
      y
    );
    y += 12;

    doc.text(
      "Me comprometo a mantener los fondos suficientes en la cuenta o los pagos al día de la tarjeta",
      margin,
      y
    );
    y += 7;

    doc.text(
      "mencionada para cubrir la presente autorización. Para cancelar esta autorización, debo notificar",
      margin,
      y
    );
    y += 7;

    doc.text(
      "por escrito al Banco de Alimentos Quito con al menos 30 días de anticipación.",
      margin,
      y
    );
    y += 12;

    doc.text(
      "Eximo al banco y/o emisores de la tarjeta de toda responsabilidad por los débitos realizados",
      margin,
      y
    );
    y += 7;

    doc.text("en virtud de la presente autorización.", margin, y);
    y += 20;

    // Firma
    doc.line(margin, y, margin + 70, y);
    y += 7;
    doc.text(`Firma: ${formData.fullName}`, margin, y);
    y += 7;
    doc.text(`CI: ${formData.ci}`, margin, y);
    y += 7;

    if (formData.contractNumber) {
      doc.text(`No. Contrato: ${formData.contractNumber}`, margin, y);
    }

    // Agregar pie de página
    const pageHeight = doc.internal.pageSize.getHeight();
    setNormalStyle();
    doc.setFontSize(9);
    doc.text(
      "Banco de Alimentos Quito - Donación Recurrente",
      doc.internal.pageSize.getWidth() / 2,
      pageHeight - 10,
      { align: "center" }
    );

    doc.save("autorizacion_debito_bancodeAlimentos.pdf");
  };

  const handleFinalize = () => {
    if (isAuthorized) {
      alert(
        "¡Gracias por autorizar el débito automático! Su apoyo ayudará a muchas familias."
      );
      setIsRecurring(false); // Cierra el modal
    } else {
      alert("Debe autorizar el débito automático para continuar.");
    }
  };

  return (
    <>
      {/* Checkbox para activar el modal */}
      <div className="flex items-center p-4 bg-green-50 border border-green-200 rounded-lg mb-4">
        <input
          type="checkbox"
          id="recurring"
          checked={isRecurring}
          onChange={(e) => setIsRecurring(e.target.checked)}
          className="h-5 w-5 text-green-600 focus:ring-green-500 border-gray-300 rounded"
        />
        <div className="ml-3">
          <label
            htmlFor="recurring"
            className="block text-sm font-medium text-green-900"
          >
            Quiero ser un donador recurrente
          </label>
          <p className="text-xs text-green-700 mt-1">
            Su apoyo continuo permite que el Banco de Alimentos Quito planifique
            a largo plazo
          </p>
        </div>
      </div>

      {/* Modal */}
      {isRecurring && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-md p-6 relative">
            {/* Botón de cerrar */}
            <button
              className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 text-xl"
              onClick={() => setIsRecurring(false)}
            >
              ✕
            </button>

            <h3 className="text-lg font-medium text-green-800 mb-2 flex items-center">
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

            <p className="text-sm text-green-700 mb-4">
              Su aporte continuo garantiza alimentos para familias vulnerables.
              Gracias por su compromiso.
            </p>

            <div className="space-y-4">
              {/* Fecha automática - Solo mostrar */}
              <div className="p-3 bg-green-50 rounded-md">
                <p className="text-sm text-green-800">
                  Fecha de autorización:{" "}
                  <strong>{currentDate.formatted}</strong>
                </p>
              </div>

              {/* Nombre del Banco */}
              <div>
                <label
                  htmlFor="bankName"
                  className="block text-sm font-medium text-gray-700"
                >
                  Nombre del Banco *
                </label>
                <select
                  id="bankName"
                  value={formData.bankName}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                  required
                >
                  <option value="">Seleccione un banco</option>
                  <option value="Banco Pichincha">Banco Pichincha</option>
                  <option value="Banco Guayaquil">Banco Guayaquil</option>
                  <option value="Banco Produbanco">Banco Produbanco</option>
                  <option value="Banco Bolivariano">Banco Bolivariano</option>
                  <option value="Banco Internacional">
                    Banco Internacional
                  </option>
                  <option value="Banco del Pacífico">Banco del Pacífico</option>
                  <option value="Banco Solidario">Banco Solidario</option>
                  <option value="Otro">Otro</option>
                </select>
              </div>

              {/* Tipo de Cuenta + Número */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="accountType"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Tipo de Cuenta
                  </label>
                  <select
                    id="accountType"
                    value={formData.accountType}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                  >
                    <option value="Ahorros">Ahorros</option>
                    <option value="Corriente">Corriente</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="accountNumber"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Número de Cuenta
                  </label>
                  <input
                    type="text"
                    id="accountNumber"
                    value={formData.accountNumber}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                    placeholder="Número de cuenta"
                  />
                </div>
              </div>

              {/* Tarjeta de Crédito + Expiración */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="creditCard"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Tarjeta de Crédito
                  </label>
                  <input
                    type="text"
                    id="creditCard"
                    value={formData.creditCard}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                    placeholder="XXXX-XXXX-XXXX-XXXX"
                  />
                </div>

                <div>
                  <label
                    htmlFor="expiration"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Expiración
                  </label>
                  <input
                    type="text"
                    id="expiration"
                    value={formData.expiration}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                    placeholder="MM/AA"
                  />
                </div>
              </div>

              {/* Monto y Frecuencia */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="amount"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Monto (USD) *
                  </label>
                  <input
                    type="text"
                    id="amount"
                    value={formData.amount}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                    placeholder="10.00"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="frequency"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Frecuencia *
                  </label>
                  <select
                    id="frequency"
                    value={formData.frequency}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                    required
                  >
                    <option value="monthly">Mensual</option>
                    <option value="quarterly">Trimestral</option>
                    <option value="biannual">Semestral</option>
                    <option value="yearly">Anual</option>
                  </select>
                </div>
              </div>

              {/* Datos Personales */}
              <div>
                <label
                  htmlFor="fullName"
                  className="block text-sm font-medium text-gray-700"
                >
                  Nombre completo *
                </label>
                <input
                  type="text"
                  id="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="ci"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Cédula de Identidad *
                  </label>
                  <input
                    type="text"
                    id="ci"
                    name="ci"
                    value={formData.ci}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Correo Electrónico *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                    required
                  />
                </div>
              </div>
            </div>

            {/* Información del uso de fondos */}
            <div className="mt-4 p-3 bg-green-50 rounded-md text-xs text-green-800">
              <p className="font-medium">¿Cómo usamos su donación?</p>
              <ul className="list-disc pl-4 mt-1 space-y-1">
                <li>$10 alimentan a una familia por una semana</li>
                <li>
                  $40 proporcionan alimentos para un mes a una familia
                  vulnerable
                </li>
                <li>$100 apoyan a nuestros programas de nutrición infantil</li>
              </ul>
            </div>

            {/* Autorización */}
            <div className="flex items-start space-x-2 mt-4 p-3 border border-green-200 rounded-md">
              <input
                type="checkbox"
                id="authorization"
                checked={isAuthorized}
                onChange={(e) => setIsAuthorized(e.target.checked)}
                className="h-4 w-4 mt-1 text-green-600 focus:ring-green-500 border-gray-300 rounded"
              />
              <label htmlFor="authorization" className="text-sm text-gray-700">
                Autorizo expresamente el débito automático recurrente a favor
                del Banco de Alimentos Quito según la información proporcionada.
                Entiendo que puedo cancelar esta autorización con 30 días de
                anticipación por escrito.
              </label>
            </div>

            {/* Botones de acciones */}
            <div className="mt-6 space-y-2">
              <button
                onClick={generatePDF}
                disabled={!isAuthorized}
                className={`w-full py-2 px-4 rounded flex items-center justify-center ${
                  isAuthorized
                    ? "bg-green-600 hover:bg-green-700"
                    : "bg-gray-300"
                } text-white transition`}
              >
                <svg
                  className="w-4 h-4 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
                Descargar autorización en PDF
              </button>

              <button
                onClick={handleFinalize}
                disabled={!isAuthorized}
                className={`w-full py-2 px-4 rounded flex items-center justify-center ${
                  isAuthorized ? "bg-blue-600 hover:bg-blue-700" : "bg-gray-300"
                } text-white transition`}
              >
                <svg
                  className="w-4 h-4 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                Finalizar y aceptar
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default RecurringDonation;
