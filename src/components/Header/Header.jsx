import { Link } from 'react-router-dom'
import './header.css'
import logo from '../../assets/logo.svg'

function Header() {
  return (
    <header>
      <img src={logo} alt="Logo" />
      <nav>
        <Link to="/">Accueil</Link>
        <Link to="/about">À propos</Link>
      </nav>
    </header>
  )
}

export default Header
