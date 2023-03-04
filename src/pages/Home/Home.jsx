import './home.css'
import Card from '../../components/Card/Card'
import Banner from '../../components/Banner/Banner'
import data from '../../data/data.json'

function Home() {
  return (
    <div className="homePage">
      <Banner />
      <div className="cardContainer">
        {data.map((profile, index) => (
          <Card key={profile.id} title={profile.title} />
        ))}
      </div>
    </div>
  )
}

export default Home
