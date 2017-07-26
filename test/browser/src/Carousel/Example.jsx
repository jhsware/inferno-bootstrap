import Component from "inferno-component"
import { Section, Stage, Scene } from '../components.jsx'

import Carousel from '../../../../lib/Carousel/Carousel.jsx';
import CarouselItem from '../../../../lib/Carousel/CarouselItem.jsx';
import CarouselIndicators from '../../../../lib/Carousel/CarouselIndicators.jsx';
import CarouselControl from '../../../../lib/Carousel/CarouselControl.jsx';
import CarouselCaption from '../../../../lib/Carousel/CarouselCaption.jsx';

const items = [
    { src: 'http://www.telegraph.co.uk/content/dam/Travel/hotels/europe/cyprus/alexander-the-great-cyprus-p.jpg', altText: 'Some text here', header: 'Do this now', caption: '1. What an amazing day!' },
    { src: 'http://www.aquabluhotel.gr/wp-content/uploads/2016/04/drz-aqua-1106-copy.jpg', altText: 'More text here', header: 'Do this later', caption: '2. Another amazing day!' },
    { src: 'http://www.luxuryhotelexperts.com/images/showcase/luxury_hotels_920/qualia_great_barrier_reef_04.jpg', altText: 'Final text here', header: 'Do this never', caption: '3. The last amazing day!' }
];

export default class Example extends Component {
  constructor () {
    super()
    this.state = {
      activeIndex: 0
    }

    this.doShowNext = this.doShowNext.bind(this)
    this.doShowPrevious = this.doShowPrevious.bind(this)
  }

  doShowNext () {
    this.setState({
      activeIndex: (this.state.activeIndex + 1) % items.length
    })    
  }

  doShowPrevious () {
    this.setState({
      activeIndex: this.state.activeIndex > 0 ? this.state.activeIndex - 1 : items.length - 1
    })    
  }

  render () {
    return (
      <Section>
        <h2 onClick={this.doShowNext}>Carousel Examples</h2>
        <Stage>
          <Scene>
            <Carousel activeIndex={this.state.activeIndex} onShowNext={this.doShowNext} onShowPrevious={this.doShowPrevious} interval="100000">
              {items.map((item, index) => (
                <CarouselItem key={index} src={item.src} altText={item.altText}>
                  <CarouselCaption captionHeader={item.header} captionText={item.caption} />
                </CarouselItem>
              ))}
            </Carousel>
          </Scene>
        </Stage>
      </Section>
    )
  }
}
