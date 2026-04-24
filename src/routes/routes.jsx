import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom"
import { Home } from "../index"

export function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </BrowserRouter>
    );
}