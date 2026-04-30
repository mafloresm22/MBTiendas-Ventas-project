import { Routes, Route } from "react-router-dom";
import { Home, Login } from "../index";
import { ProtectedRoute } from "../hooks/ProtectedRoute";

export function AppRoutes() {
  return (
    <Routes>
      <Route element={<ProtectedRoute />}>
        <Route path="/" element={<Home />} />
        <Route path="/pos" element={<div>Vender (POS) - Página en construcción</div>} />
        <Route path="/kardex" element={<div>Kardex - Página en construcción</div>} />
        <Route path="/reportes" element={<div>Reportes - Página en construcción</div>} />
        <Route path="/configurar" element={<div>Configuración - Página en construcción</div>} />
      </Route>

      {/* Rutas Públicas */}
      <Route path="/login" element={<Login />} />

      <Route path="*" element={<div>Página no encontrada</div>} />
    </Routes>
  );
}
