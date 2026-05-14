import '../Components/Landing.css'
import Navbar from "../Components/NavbarLanding";
import { Link } from "react-router";
import Footer from '../Components/Footer';

export default function LandingPage() {
  return (
    <><Navbar />

      <section className="hero">

        <Link to="/hombre" className="hero-side">
          <img className="heroImg" src="/landing_hombre.jpg" alt="Ropa Hombre" />
          <div className="hero-overlay">
            <h2 className="genero">Hombre</h2>
            <span className="hero-divider" />
            <span className="coleccion">ver colección</span>
          </div>
        </Link>

        <Link to="/mujer" className="hero-side">
          <img className="heroImg" src="/landing_mujer.jpg" alt="Ropa Mujer" />
          <div className="hero-overlay">
            <h2 className="genero">Mujer</h2>
            <span className="hero-divider" />
            <span className="coleccion">ver colección</span>
          </div>
        </Link>

      </section>
      <Footer />
    </>
  );
}
