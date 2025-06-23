// src/pages/PanelCliente.jsx
import React from "react";
import { FileText, Clock, CheckCircle, XCircle } from "lucide-react";

export default function PanelCliente() {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <section className="bg-white p-6 rounded-xl shadow-md max-w-3xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4">Seguimiento de Trámite</h2>

        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">Número de trámite:</label>
          <input
            type="text"
            placeholder="Ej. 2024-00123"
            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="bg-gray-50 border rounded-lg p-4 space-y-3">
          <div className="flex items-center space-x-3">
            <FileText className="text-blue-600" />
            <span className="text-gray-700">Tipo: Poder Notarial</span>
          </div>
          <div className="flex items-center space-x-3">
            <Clock className="text-yellow-600" />
            <span className="text-gray-700">Estado actual: En revisión por notario</span>
          </div>
          <div className="flex items-center space-x-3">
            <CheckCircle className="text-green-600" />
            <span className="text-gray-700">Última actualización: 21 de junio de 2025</span>
          </div>
          <div className="flex items-center space-x-3">
            <XCircle className="text-red-600" />
            <span className="text-gray-700">Documentación pendiente: Identificación del otorgante</span>
          </div>
        </div>
      </section>
    </div>
  );
}
