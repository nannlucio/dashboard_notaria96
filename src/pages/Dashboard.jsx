// src/pages/Dashboard.jsx
import React from "react";
import { FileText, CheckCircle, BarChart2, Star } from "lucide-react";

export default function Dashboard() {
  return (
    <div className="p-6 bg-gray-100 min-h-screen space-y-10">
      <section className="bg-white p-6 rounded-xl shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Dashboard General</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="p-4 bg-blue-100 rounded-lg flex items-center space-x-4">
            <FileText className="text-blue-600" />
            <div>
              <p className="text-sm text-gray-600">Trámites en Proceso</p>
              <p className="text-lg font-bold">24</p>
            </div>
          </div>
          <div className="p-4 bg-green-100 rounded-lg flex items-center space-x-4">
            <CheckCircle className="text-green-600" />
            <div>
              <p className="text-sm text-gray-600">Finalizados Hoy</p>
              <p className="text-lg font-bold">8</p>
            </div>
          </div>
          <div className="p-4 bg-yellow-100 rounded-lg flex items-center space-x-4">
            <BarChart2 className="text-yellow-600" />
            <div>
              <p className="text-sm text-gray-600">Ingresos del Mes</p>
              <p className="text-lg font-bold">$128,500</p>
            </div>
          </div>
          <div className="p-4 bg-purple-100 rounded-lg flex items-center space-x-4">
            <Star className="text-purple-600" />
            <div>
              <p className="text-sm text-gray-600">Clientes Premium</p>
              <p className="text-lg font-bold">5</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
