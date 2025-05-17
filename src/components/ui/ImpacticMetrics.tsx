import React from "react";
import { Card } from "primereact/card";
import type { ImpactMetric } from "../../types/baq.types";

const ImpactMetrics: React.FC = () => {
  const metrics: ImpactMetric[] = [
    { title: "Kilos Entregados", value: "0" },
    { title: "Personas Beneficiadas", value: "+0 (C/Mes)" },
    { title: "Voluntarios", value: "+0 (2024)" },
  ];

  return (
    <section className="p-8 bg-gray-100">
      <h2 className="text-2xl font-bold mb-4 text-center">Nuestro Impacto</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 container mx-auto">
        {metrics.map((metric, index) => (
          <Card key={index} className="p-4 bg-white shadow-md rounded-lg">
            <h3 className="text-xl font-semibold">{metric.title}</h3>
            <p className="text-2xl">{metric.value}</p>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default ImpactMetrics;
