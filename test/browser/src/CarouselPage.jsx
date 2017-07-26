import Component from 'inferno-component'

import ExampleSection from './Carousel/Example.jsx'

class CarouselPage extends Component {
  constructor (props) {
    super(props)
    
    this.state = {
      active: false
    }
  }

  componentDidMount () {
    setTimeout(() => {
      this.setState({
        active: true
      })
    }, 10)
  }

  render () {

    return (
      <div className={!this.state.active ? 'InfernoAnimation--noAnim' : ''}>
        <ExampleSection />
      </div>
    )
  }
}

export default CarouselPage
