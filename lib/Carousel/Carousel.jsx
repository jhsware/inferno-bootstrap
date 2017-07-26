import Inferno from 'inferno';
import Component from 'inferno-component';
import classNames from 'classnames';
import { mapToCssModules } from '../utils';

class Carousel extends Component {

  constructor(props) {
    super(props);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.state = { direction: 'right' };
  }

  getChildContext() {
    return { direction: this.state.direction };
  }

  componentDidMount() {
    // Set up the cycle
    if (this.props.interval) {
      this.cycleInterval = setInterval(() => {
        if (!this.props.paused) {
          this.props.onShowNext();
        }
      }, parseInt(this.props.interval, 10));
    }

    if (this.props.keyboard) {
      document.addEventListener('keyup', this.handleKeyPress);
    }
  }

  componentWillReceiveProps(nextProps) {
    // Calculate the direction to turn
    if (this.props.activeIndex + 1 === nextProps.activeIndex) {
      this.setState({ direction: 'right' });
    } else if (this.props.activeIndex - 1 === nextProps.activeIndex) {
      this.setState({ direction: 'left' });
    } else if (this.props.activeIndex > nextProps.activeIndex) {
      this.setState({ direction: 'right' });
    } else {
      this.setState({ direction: 'left' });
    }
  }

  componentWillUnmount() {
    clearInterval(this.cycleInterval);
    document.removeEventListener('key', this.handleKeyPress);
  }

  handleKeyPress(evt) {
    if (this.props.keyboard && evt.keyCode === 37) {
      this.props.onShowPrevious();
    } else if (this.props.keyboard && evt.keyCode === 39) {
      this.props.onShowNext();
    }
  }

  render() {
    const { children, cssModule, activeIndex, animationPrefix, hoverStart, hoverEnd } = this.props;
    const outerClasses = mapToCssModules(classNames(
          'carousel',
          'slide'
      ), cssModule);

    const innerClasses = mapToCssModules(classNames(
          'carousel-inner'
      ), cssModule);


    const slidesOnly = children.every((child) => {
      return child.type && child.type.name === 'CarouselItem';
    });

    // Rendering only slides
    if (slidesOnly) {
      return (
        <div className={outerClasses} onMouseEnter={hoverStart} onMouseLeave={hoverEnd}>
          <div role="listbox" className={innerClasses}>
            {children[activeIndex]}
          </div>
        </div>
      );
    }

    // Rendering slides and controls
    if (children[0] instanceof Array) {
      const carouselItems = children[0];
      const controlLeft = children[1];
      const controlRight = children[2];

      return (
        <div className={outerClasses} onMouseEnter={hoverStart} onMouseLeave={hoverEnd}>
          <div role="listbox" className={innerClasses}>
            {carouselItems[activeIndex]}
          </div>
          {controlLeft}
          {controlRight}
        </div>
      );
    }

    // Rendering indicators, slides and controls
    const indicators = children[0];
    const carouselItems = children[1];
    const controlLeft = children[2];
    const controlRight = children[3];

    return (
      <div ref={(carousel) => { this.carousel = carousel; }} className={outerClasses} onMouseEnter={hoverStart} onMouseLeave={hoverEnd}>
        {indicators}
        <div role="listbox" className={innerClasses}>
          {carouselItems[activeIndex]}
        </div>
        {controlLeft}
        {controlRight}
      </div>
    );
  }

}

Carousel.defaultProps = {
  interval: 5000,
  hover: false,
  paused: false,
  keyboard: true
};

export default Carousel;
