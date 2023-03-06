import image from '../../assets/sea.png'
import './banner.css'

function Banner() {
  return (
    <div className="banner-component">
      <img src={image} alt="Falaise" />
      <h1> Chez vous, partout et ailleurs </h1>
    </div>
  )
}

export default Banner
