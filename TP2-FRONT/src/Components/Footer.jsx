import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-brand">
          <img className="logo" src="/mini_logo.svg" alt="Viena Logo" />
          <h2>VIENA</h2>
          <p>Diseñamos experiencias que trascienden el tiempo.</p>
        </div>

        <div className="navegacion">
          <h3>Navegación</h3>
          <a href="/about">
            Sobre Nosotros
          </a>
          <a href="/contact">
            Contacto
          </a>
        </div>

        <div className="footer-social">
          <h3>Síguenos</h3>
          <div className="social-icons">
            <a href="https://www.instagram.com/tic_virgo/" target="_blank" rel="noreferrer">Instagram</a>
            <a href="https://facebook.com/JavierMileiEconomista/" target="_blank" rel="noreferrer">Facebook</a>
            <a href="https://x.com/TrumpDailyPosts/" target="_blank" rel="noreferrer">X</a>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2024 Viena. Todos los derechos reservados.</p>
      </div>

    </footer>
  );
}