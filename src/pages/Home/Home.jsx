import image from '../../assets/sea.png'
import './home.css'

function Home() {
  return (
    <div className="homePage">
      <img src={image} alt="Falaise" />
      <h1> Chez vous, partout et ailleurs </h1>
    </div>
  )
}

export default Home
