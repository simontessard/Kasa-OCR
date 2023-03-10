import './location.css'
import Slideshow from '../../components/Slideshow/Slideshow'
import data from '../../data/data.json'
import { useParams } from 'react-router-dom'
import star from '../../assets/star.svg'
import Collapse from '../../components/Collapse/Collapse'
import Error from '../../components/Error/Error'

function Location() {
  let { id } = useParams()
  let idExists = false

  data.map((location, i) => {
    if (location.id === id) {
      idExists = true
    }
    return idExists
  })

  if (idExists) {
    return (
      <>
        {data.map((location, i) => {
          if (location.id === id) {
            return (
              <div key={i}>
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
                          return (
                            <span key={i} className="location-tag">
                              {' '}
                              {tag}{' '}
                            </span>
                          )
                        })}{' '}
                      </div>
                    </div>
                  </div>
                  <div className="location-information-right">
                    <div className="location-host">
                      <span>{location.host.name}</span>
                      <span className="dot"></span>
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
                  <Collapse
                    title="Description"
                    content={location.description}
                  />
                  <Collapse
                    title="??quipements"
                    content={
                      <>
                        {location.equipments.map((equipement, i) => {
                          return (
                            <span key={i}>
                              {equipement} <br />
                            </span>
                          )
                        })}
                      </>
                    }
                  />
                </div>
              </div>
            )
          } else {
            return ''
          }
        })}
      </>
    )
  } else {
    return <Error />
  }
}

export default Location
