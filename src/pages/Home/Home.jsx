import './home.css'
import Card from '../../components/Card/Card'
import Banner from '../../components/Banner/Banner'
import data from '../../data/data.json'
import image from '../../assets/sea.png'

function Home() {
  return (
    <div className="homePage">
      <Banner
        image={image}
        imageText="Chez vous, partout et ailleurs"
        alt="Falaise"
      />
      <div className="cardContainer">
        {data.map((profile, index) => (
          <Card key={profile.id} title={profile.title} id={profile.id} />
        ))}
      </div>
    </div>
  )
}

export default Home
