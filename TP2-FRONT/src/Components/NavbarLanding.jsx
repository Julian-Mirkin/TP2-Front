import './NavbarLanding.css';

const links = ['Hombre', 'Mujer', 'Talles'];

export default function Navbar() {
  return (
    <nav className='nav'>
      <span className="logo">BEGE</span>
      <ul className="links">
        {links.map((link) => (
          <li key="link">
            <a href={`#${link.toLowerCase()}`}>{link}</a>
            <img src='/Morfo_Azul.jfif'/>
          </li>
        ))}
      </ul>
    </nav>
  );
}
