// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import CRM from "./pages/CRM";
import Chatbot from "./pages/Chatbot";
import Usuarios from "./pages/Usuarios";
import Auditoria from "./pages/Auditoria";
import Roles from "./pages/Roles";
import PanelCliente from "./pages/PanelCliente";

export default function App() {
  return (
    <Router>
      <div className="p-4 bg-blue-800 text-white flex gap-4">
        <Link to="/">Dashboard</Link>
        <Link to="/crm">CRM</Link>
        <Link to="/chatbot">Chatbot</Link>
        <Link to="/usuarios">Usuarios</Link>
        <Link to="/auditoria">Auditoría</Link>
        <Link to="/roles">Roles</Link>
        <Link to="/panel-cliente">Panel Cliente</Link>
      </div>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/crm" element={<CRM />} />
        <Route path="/chatbot" element={<Chatbot />} />
        <Route path="/usuarios" element={<Usuarios />} />
        <Route path="/auditoria" element={<Auditoria />} />
        <Route path="/roles" element={<Roles />} />
        <Route path="/panel-cliente" element={<PanelCliente />} />
      </Routes>
    </Router>
  );
}
