import './slideshow.css'
import React from 'react'
import image from '../../assets/arrow.svg'

class Slideshow extends React.Component {
  constructor(props) {
    super(props)

    this.arrowForward = this.arrowForward.bind(this)
    this.arrowBackward = this.arrowBackward.bind(this)

    this.state = {
      index: 0,
      pictures: props.image,
      image: props.image[0],
      title: props.title,
      date: new Date(),
    }
  }

  arrowForward() {
    if (this.state.index + 1 === this.state.pictures.length) {
      this.setState({
        index: 0,
      })
    } else {
      this.setState({
        index: this.state.index + 1,
      })
    }
  }

  arrowBackward() {
    if (this.state.index - 1 === -1) {
      this.setState({
        index: this.state.pictures.length - 1,
      })
    } else {
      this.setState({
        index: this.state.index - 1,
      })
    }
  }

  render() {
    return (
      <div className="slideshow">
        <img
          className="slideshow-img"
          src={this.state.pictures[this.state.index]}
          alt={this.state.title}
        ></img>
        <span>
          {this.state.index + 1} / {this.state.pictures.length}{' '}
        </span>
        <img
          className="slideshow-arrow"
          src={image}
          onClick={this.arrowForward}
          alt=""
        ></img>
        <img
          className="slideshow-arrow"
          src={image}
          onClick={this.arrowBackward}
          alt=""
        ></img>
      </div>
    )
  }
}

export default Slideshow
