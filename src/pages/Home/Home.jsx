import './home.css'
import Card from '../../components/Card/Card'
import Banner from '../../components/Banner/Banner'

function Home() {
  return (
    <div className="homePage">
      <Banner />
      <div className="cardContainer">
        <Card title="Titre de la location" />
        <Card title="Titre de la location" />
        <Card title="Titre de la location" />
      </div>
    </div>
  )
}

export default Home
