import './slideshow.css'
import Banner from '../../components/Banner/Banner'

function Slideshow(props) {
  return (
    <div>
      <Banner image={props.image[0]} alt={props.title} />
    </div>
  )
}

export default Slideshow
