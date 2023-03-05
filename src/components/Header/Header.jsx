import { NavLink } from 'react-router-dom'
import './header.css'
import logo from '../../assets/logo.svg'

function Header() {
  return (
    <header>
      <img src={logo} alt="Logo" />
      <nav>
        <NavLink
          className="no-underline"
          exact
          activeClassName="underline"
          to="/"
        >
          Accueil
        </NavLink>
        <NavLink
          className="no-underline"
          exact
          activeClassName="underline"
          to="/about"
        >
          À propos
        </NavLink>
      </nav>
    </header>
  )
}

export default Header
