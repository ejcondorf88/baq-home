import { useState } from "react";

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
  identify: string;
  email: string;
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
    identify: "",
    email: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const baseData = {
      cardDetails: {
        cardNumber: formData.cardNumber,
        expiry: formData.expiry,
        cvv: formData.cvv,
        name: formData.name,
      },
      amount: formData.amount,
      paymentMethod: "card",
    };

    if (isRecurring) {
      const recurringData = {
        ...baseData,
        fullName: formData.name,
        email: formData.email,
        identify: formData.identify,
        frequency: formData.frequency,
        cardDetails: {
          cardNumber: formData.cardNumber,
          expiry: formData.expiry,
          cvv: formData.cvv,
          name: formData.name,
        },
      };

      console.log("➡️ Enviando donación recurrente:", recurringData);
      // Aquí podrías hacer un fetch o axios.post al backend
    } else {
      console.log("➡️ Enviando donación única:", baseData);
      // Aquí enviar solo monto y método
    }

    alert("¡Gracias por tu donación!");
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
