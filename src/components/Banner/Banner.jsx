import image from '../../assets/sea.png'
import './banner.css'

function Banner() {
  return (
    <div className="homePage-title">
      <img src={image} alt="Falaise" />
      <h1> Chez vous, partout et ailleurs </h1>
    </div>
  )
}

export default Banner
