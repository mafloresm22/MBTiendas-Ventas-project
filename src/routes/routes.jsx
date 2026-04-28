import {
    Routes,
    Route
} from "react-router-dom"
import { Home, Login } from "../index"

export function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/pos" element={<div>Vender (POS) - Página en construcción</div>} />
            <Route path="/kardex" element={<div>Kardex - Página en construcción</div>} />
            <Route path="/reportes" element={<div>Reportes - Página en construcción</div>} />
            <Route path="/configurar" element={<div>Configuración - Página en construcción</div>} />
            <Route path="*" element={<div>Página no encontrada</div>} />
        </Routes>
    );
}