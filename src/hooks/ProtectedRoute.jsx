import { Navigate, Outlet } from "react-router-dom";
import { useAuthStore } from "../store/AuthStore";

export const ProtectedRoute = ({ children, redirectTo = "/login" }) => {
    const { user, authLoading } = useAuthStore();

    if (authLoading) {
        return null;
    }

    if (user == null) {
        return <Navigate replace to={redirectTo} />;
    }

    return children ? children : <Outlet />;
}
