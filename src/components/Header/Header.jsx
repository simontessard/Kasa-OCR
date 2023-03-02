import { Link } from 'react-router-dom'
import './header.css'

function Header() {
  return (
    <header>
      <nav>
        <Link to="/">Accueil</Link>
        <Link to="/about">À propos</Link>
      </nav>
    </header>
  )
}

export default Header
