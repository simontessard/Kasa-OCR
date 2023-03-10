import './card.css'
import { NavLink } from 'react-router-dom'

function Card({ title, id, cover }) {
  return (
    <NavLink to={'/location/' + id} className="card">
      <span>{title}</span>
      <img src={cover} alt=""></img>
    </NavLink>
  )
}

Card.defaultProps = {
  title: '',
}

export default Card
