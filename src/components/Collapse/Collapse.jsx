import './collapse.css'
import { useState } from 'react'
import arrow from '../../assets/arrow.svg'

function Collapse(props) {
  const [open, setOPen] = useState(false)

  const toggle = () => {
    setOPen(!open)
  }

  return (
    <div className="collapse-elements">
      <div onClick={toggle} className="button-bar">
        <button>{props.title}</button>
        <img src={arrow} alt="Falaise" />
      </div>
      {open && (
        <div className="toggle">
          <h4>{props.content}</h4>
        </div>
      )}
    </div>
  )
}

export default Collapse
