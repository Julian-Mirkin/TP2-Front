import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router";
import { useAuth } from "../Context/AuthContext";
import "./page.css";

export default function AuthPage({ mode = "login" }) {
  const [isRegisterMode, setIsRegisterMode] = useState(mode === "register");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { user, loading, signIn, signUp } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    setIsRegisterMode(mode === "register");
  }, [mode]);

  useEffect(() => {
    if (!loading && user) {
      navigate("/home", { replace: true });
    }
  }, [loading, user, navigate]);

  async function handleSubmit(event) {
    event.preventDefault();

    setIsSubmitting(true);
    setMessage("");
    setError("");

    const authResponse = isRegisterMode
      ? await signUp(email, password)
      : await signIn(email, password);

    if (authResponse.error) {
      setError(authResponse.error.message);
      setIsSubmitting(false);
      return;
    }

    if (isRegisterMode) {
      setMessage("Cuenta creada. Revisa tu email para confirmar tu cuenta.");
    } else {
      setMessage("Sesion iniciada correctamente.");
      navigate("/home", { replace: true });
    }

    setIsSubmitting(false);
  }

  return (
    <div className="authPage">
      <form className="authCard" onSubmit={handleSubmit}>
        <h1>{isRegisterMode ? "Crear cuenta" : "Iniciar sesion"}</h1>

        <label htmlFor="authEmail">Email</label>
        <input
          id="authEmail"
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
        />

        <label htmlFor="authPassword">Contrasena</label>
        <input
          id="authPassword"
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          minLength={6}
          required
        />

        <button className="defaultButton" type="submit" disabled={isSubmitting}>
          {isSubmitting
            ? "Procesando..."
            : isRegisterMode
            ? "Registrarme"
            : "Ingresar"}
        </button>

        {message && <p className="authMessage">{message}</p>}
        {error && <p className="authError">{error}</p>}

        <div className="authSwitch">
          {isRegisterMode ? "Ya tienes cuenta?" : "No tienes cuenta?"}
          <Link to={isRegisterMode ? "/login" : "/register"}>
            {isRegisterMode ? "Iniciar sesion" : "Registrarme"}
          </Link>
        </div>
      </form>
    </div>
  );
}
