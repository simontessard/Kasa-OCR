import image from '../../assets/sea.png'
import './home.css'
import Card from '../../components/Card/Card'
import styled from 'styled-components'

const HomeTitle = styled.h1`
  color: white;
  font-family: 'Montserrat';
  font-weight: 500;
  font-size: 48px;
  margin: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

function Home() {
  return (
    <div className="homePage">
      <div className="homePage-title">
        <img src={image} alt="Falaise" />
        <HomeTitle> Chez vous, partout et ailleurs </HomeTitle>
      </div>
      <div className="cardContainer">
        <Card title="Titre de la location" />
        <Card title="Titre de la location" />
        <Card title="Titre de la location" />
      </div>
    </div>
  )
}

export default Home
