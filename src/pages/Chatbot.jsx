// src/pages/Chatbot.jsx
import React from "react";
import { MessageCircle, Send } from "lucide-react";

export default function Chatbot() {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <section className="bg-white p-6 rounded-xl shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Chatbot Notarial</h2>
        <div className="border rounded-lg p-4 bg-gray-50 space-y-4">
          <div className="flex items-start space-x-2">
            <MessageCircle className="text-blue-500" />
            <p className="bg-white p-2 rounded shadow text-sm">Hola, ¿qué trámite deseas iniciar hoy?</p>
          </div>
          <div className="flex items-start space-x-2 justify-end">
            <Send className="text-green-500" />
            <p className="bg-green-100 p-2 rounded shadow text-sm">Testamento</p>
          </div>
        </div>
      </section>
    </div>
  );
}
