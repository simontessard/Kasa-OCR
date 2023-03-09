import './card.css'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'

function Card({ title, id }) {
  return (
    <NavLink to={'/location/' + id} className="card">
      <span>{title}</span>
      <div className="card-filter"></div>
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
