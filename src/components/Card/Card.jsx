import './card.css'
import { NavLink } from 'react-router-dom'

function Card({ title, id }) {
  return (
    <NavLink to={'/location/' + id} className="card">
      <span>{title}</span>
      <div className="card-filter"></div>
    </NavLink>
  )
}

Card.defaultProps = {
  title: '',
}

export default Card
