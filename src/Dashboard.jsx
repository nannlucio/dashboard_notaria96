import React from "react";
import { FileText, CheckCircle, Users, BarChart2, Star, MessageCircle, Send, ShieldCheck } from "lucide-react";

export default function Dashboard() {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* CONTENIDO ACTUAL OMITIDO PARA BREVIDAD */}

      {/* Prototipo de Roles de Usuario */}
      <div className="bg-white p-6 rounded-xl shadow-md mt-10">
        <h2 className="text-2xl font-semibold mb-4">Roles de Usuario – Prototipo Funcional</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="border p-4 rounded-lg bg-gray-50">
            <ShieldCheck className="w-6 h-6 text-blue-600 mb-2" />
            <h3 className="text-lg font-semibold">Notario Titular</h3>
            <ul className="mt-2 text-sm text-gray-700 list-disc pl-5">
              <li>Visualiza y firma todos los trámites</li>
              <li>Gestiona usuarios y auditoría</li>
              <li>Autoriza cambios críticos</li>
            </ul>
          </div>
          <div className="border p-4 rounded-lg bg-gray-50">
            <ShieldCheck className="w-6 h-6 text-green-600 mb-2" />
            <h3 className="text-lg font-semibold">Asistente Notarial</h3>
            <ul className="mt-2 text-sm text-gray-700 list-disc pl-5">
              <li>Captura y edita datos de trámites</li>
              <li>Agenda citas y da seguimiento</li>
              <li>Interactúa con clientes</li>
            </ul>
          </div>
          <div className="border p-4 rounded-lg bg-gray-50">
            <ShieldCheck className="w-6 h-6 text-purple-600 mb-2" />
            <h3 className="text-lg font-semibold">Administrador del Sistema</h3>
            <ul className="mt-2 text-sm text-gray-700 list-disc pl-5">
              <li>Configura módulos y accesos</li>
              <li>Monitorea auditoría técnica</li>
              <li>Respaldos y actualizaciones</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}