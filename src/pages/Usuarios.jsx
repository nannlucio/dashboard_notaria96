// src/pages/Usuarios.jsx
import React from "react";

export default function Usuarios() {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <section className="bg-white p-6 rounded-xl shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Administración de Usuarios</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 border rounded bg-gray-50">
            <p className="font-semibold">admin@notaria96.com</p>
            <p className="text-sm text-gray-600">Administrador</p>
          </div>
          <div className="p-4 border rounded bg-gray-50">
            <p className="font-semibold">asistente1@notaria96.com</p>
            <p className="text-sm text-gray-600">Asistente</p>
          </div>
        </div>
      </section>
    </div>
  );
}
