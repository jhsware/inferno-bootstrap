import Inferno from 'inferno';
import Component from 'inferno-component';
import classNames from 'classnames';
import { mapToCssModules } from '../utils';
import { animateOnAdd, animateOnRemove } from 'inferno-animation/dist/animatedComponent';
import CarouselCaption from './CarouselCaption.jsx';

class CarouselItem extends Component {

  constructor(props) {
    super(props);
    this.state = { animation: ['active'] };
  }

  componentDidMount() {
    const classes = this.context.direction === 'right' ?
      'carousel-item-next carousel-item-left' :
      'carousel-item-prev carousel-item-right';

    const self = this
    animateOnAdd(this, {
      start: classes,
      active: '',
      end: ''
    }, () => {
      self.setState({
        animation: ['active']
      })
    })
  }

  componentWillUnmount() {
    this.slide.dispatchEvent(new CustomEvent('slide.bs.carousel'));

    const classes = this.context.direction === 'right' ?
      'carousel-item-left' :
      'carousel-item-right';
    
    const self = this
    animateOnRemove(this, {
      start: '',
      active: 'active',
      end: classes
    }, (node) => {
      // Component didLeave
      node.dispatchEvent(new CustomEvent('slid.bs.carousel'));
    })
  }

  render() {
    const { src, altText, children, cssModule } = this.props;
    const classes = mapToCssModules(classNames(
        'd-block',
        'img-fluid'
    ), cssModule);

    const itemClasses = mapToCssModules(classNames('carousel-item', ...this.state.animation), cssModule);

    return (
      <div className={itemClasses} ref={(slide) => { this.slide = slide; }}>
        <img className={classes} src={src} alt={altText} />
        {children}
      </div>
    );
  }
}

export default CarouselItem;
