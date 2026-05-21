import './NavbarLanding.css';
import {Link} from 'react-router'

const links = ['Hombre', 'Mujer', 'Talles'];

export default function Navbar() {
  return (
    <nav className='nav'>
      <Link to='/home'><img className="logo" src="/mini_logo.svg" /></Link>
    </nav>
  );
}
