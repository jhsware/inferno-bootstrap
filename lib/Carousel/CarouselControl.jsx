import Inferno from 'inferno';
import classNames from 'classnames';
import { mapToCssModules } from '../utils';

const CarouselControl = (props) => {
  const { direction, onClickHandler, cssModule, directionText } = props;

  const anchorClasses = mapToCssModules(classNames(
     `carousel-control-${direction}`
    ), cssModule);

  const iconClasses = mapToCssModules(classNames(
        `carousel-control-${direction}-icon`
    ), cssModule);

  const screenReaderClasses = mapToCssModules(classNames(
        'sr-only'
    ), cssModule);


  return (
    <a
      className={anchorClasses} role="button" onClick={(e) => {
        e.preventDefault();
        onClickHandler();
      }}
    >
      <span className={iconClasses} aria-hidden="true" />
      <span className={screenReaderClasses}>{directionText || direction}</span>
    </a>
  );
};

export default CarouselControl;
