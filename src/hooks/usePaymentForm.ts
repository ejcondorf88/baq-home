import { useState } from 'react';

interface PaymentFormData {
  cardNumber: string;
  expiry: string;
  cvv: string;
  name: string;
  bankName: string;
  accountNumber: string;
  clabe: string;
  frequency: string;
  amount: string;
}

export const usePaymentForm = () => {
  const [isRecurring, setIsRecurring] = useState(false);
  const [formData, setFormData] = useState<PaymentFormData>({
    cardNumber: "",
    expiry: "",
    cvv: "",
    name: "",
    bankName: "",
    accountNumber: "",
    clabe: "",
    frequency: "monthly",
    amount: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Datos del formulario:", formData);
    // Aquí iría la lógica para procesar el pago
    alert("¡Gracias por tu donación! Tu pago ha sido procesado.");
  };

  const handleAmountSelect = (amount: number) => {
    setFormData({
      ...formData,
      amount: amount.toString(),
    });
  };

  return {
    isRecurring,
    setIsRecurring,
    formData,
    handleChange,
    handleSubmit,
    handleAmountSelect,
  };
}; 