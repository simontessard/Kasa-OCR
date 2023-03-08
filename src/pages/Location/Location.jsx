import './location.css'
import Slideshow from '../../components/Slideshow/Slideshow'
import data from '../../data/data.json'
import { useParams } from 'react-router-dom'
import star from '../../assets/star.svg'
import Collapse from '../../components/Collapse/Collapse'

function Location() {
  let { id } = useParams()
  return (
    <>
      {data.map((location, i) => {
        if (location.id === id) {
          return (
            <div>
              <Slideshow image={location.pictures} title={location.title} />
              <div className="location-information">
                {' '}
                <div className="location-information-left">
                  <div>
                    <h2> {location.title} </h2>
                    <p> {location.location} </p>
                    <div className="tag-container">
                      {' '}
                      {location.tags.map((tag, i) => {
                        return <span className="location-tag"> {tag} </span>
                      })}{' '}
                    </div>
                  </div>
                </div>
                <div className="location-information-right">
                  <div className="location-host">
                    <span>{location.host.name}</span>
                    <span class="dot"></span>
                  </div>
                  <div className="stars-container">
                    {' '}
                    {Array.apply(null, { length: location.rating }).map(
                      (e, i) => (
                        <img
                          src={star}
                          className="location-star rating"
                          alt=""
                          key={i}
                        />
                      )
                    )}
                    {Array.apply(null, { length: 5 - location.rating }).map(
                      (e, i) => (
                        <img
                          src={star}
                          className="location-star"
                          alt=""
                          key={i}
                        />
                      )
                    )}
                  </div>
                </div>
              </div>
              <div className="collapse-container">
                <Collapse title="Description" content={location.description} />
                <Collapse
                  title="Équipements"
                  content={
                    <>
                      {location.equipments.map((equipement, i) => {
                        return (
                          <>
                            {' '}
                            {equipement} <br />{' '}
                          </>
                        )
                      })}
                    </>
                  }
                />
              </div>
            </div>
          )
        } else {
          return <div> </div>
        }
      })}
    </>
  )
}

export default Location
