import './card.css'
import PropTypes from 'prop-types'
import styled from 'styled-components'

function Card({ title }) {
  return (
    <div className="card">
      <span>{title}</span>
    </div>
  )
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
}

Card.defaultProps = {
  title: '',
}

export default Card
