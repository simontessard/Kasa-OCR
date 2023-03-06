import './slideshow.css'

function Slideshow(props) {
  return (
    <div className="banner-component">
      <img src={props.image} alt="Falaise" />
    </div>
  )
}

export default Slideshow
