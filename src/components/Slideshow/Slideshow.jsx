import './slideshow.css'
import Banner from '../../components/Banner/Banner'

function Slideshow(props) {
  return (
    <div>
      <Banner image={props.image[0]} />
    </div>
  )
}

export default Slideshow
