import './card.css'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'

function Card({ title }) {
  return (
    <NavLink to="/location" className="card">
      <span>{title}</span>
    </NavLink>
  )
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
}

Card.defaultProps = {
  title: '',
}

export default Card
