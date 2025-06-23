// src/pages/Auditoria.jsx
import React from "react";

export default function Auditoria() {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <section className="bg-white p-6 rounded-xl shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Auditoría de Actividades</h2>
        <ul className="text-sm space-y-2 text-gray-700">
          <li>🕒 10:02 - El usuario <strong>asistente1</strong> creó un trámite de Compraventa</li>
          <li>🕒 10:15 - El usuario <strong>admin</strong> actualizó los datos del cliente Laura Gómez</li>
          <li>🕒 11:05 - El notario <strong>titular</strong> firmó el trámite #00124</li>
        </ul>
      </section>
    </div>
  );
}
