import { Navigate } from "react-router";
import { useAuth } from "../Context/AuthContext";

export default function ProtectedRoute({ children }) {
  const { user, loading } = useAuth();

  if (loading) {
    return <p>Cargando sesion...</p>;
  }

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return children;
}
