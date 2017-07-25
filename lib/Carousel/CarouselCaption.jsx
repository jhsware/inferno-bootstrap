import Inferno from 'inferno';
import classNames from 'classnames';
import { mapToCssModules } from '../utils';

const CarouselCaption = (props) => {
  const { captionHeader, captionText, cssModule } = props;
  const classes = mapToCssModules(classNames(
        'carousel-caption',
        'd-none',
        'd-md-block'
    ), cssModule);

  return (
    <div className={classes}>
      <h3>{captionHeader}</h3>
      <p>{captionText}</p>
    </div>
  );
};

export default CarouselCaption;
