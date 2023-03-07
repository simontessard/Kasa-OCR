import './location.css'
import Slideshow from '../../components/Slideshow/Slideshow'
import data from '../../data/data.json'
import { useParams } from 'react-router-dom'

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
                    <div>
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
                  </div>
                  <span>{location.rating}</span>
                </div>
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
