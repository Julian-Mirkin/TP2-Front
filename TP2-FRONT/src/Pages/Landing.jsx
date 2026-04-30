import Button from "../Components/Button";
import '../Components/hero.css'
import Navbar from "../Components/NavbarLanding";

export default function LandingPage() {
    return (
        <>
          <Navbar />
    
          <section className="hero">
            
            <div className="hero-side">
              <img className="heroImg" src="/landing_hombre.jpg" alt="Ropa Hombre" />
              <div className="hero-overlay">
                <h2 className="hero-label">Hombre</h2>
                <Button href="/hombre">Ver colección</Button>
              </div>
            </div>

            <div className="hero-side">
              <img className="heroImg" src="/landing_mujer.jpg" alt="Ropa Mujer" />
              <div className="hero-overlay">
                <h2 className="hero-label">Mujer</h2>
                <Button href="/mujer">Ver colección</Button>
              </div>
            </div>

          </section>
        </>
      );
}