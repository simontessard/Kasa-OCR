import './banner.css'

function Banner(props) {
  return (
    <div className="banner-component">
      <img src={props.image} alt={props.alt} />
      <h1> {props.imageText} </h1>
    </div>
  )
}

export default Banner
