// src/pages/CRM.jsx
import React from "react";

export default function CRM() {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <section className="bg-white p-6 rounded-xl shadow-md">
        <h2 className="text-2xl font-semibold mb-4">CRM de Clientes</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm">
            <thead>
              <tr className="bg-gray-200">
                <th className="text-left p-2">Nombre</th>
                <th className="text-left p-2">Último Trámite</th>
                <th className="text-left p-2">Teléfono</th>
                <th className="text-left p-2">Estatus</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="p-2">Carlos Mendoza</td>
                <td className="p-2">Poder Notarial</td>
                <td className="p-2">55-1234-5678</td>
                <td className="p-2">Activo</td>
              </tr>
              <tr className="border-b">
                <td className="p-2">Laura Gómez</td>
                <td className="p-2">Compra-Venta</td>
                <td className="p-2">81-9876-4321</td>
                <td className="p-2">Inactivo</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
