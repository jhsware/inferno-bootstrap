import Inferno from 'inferno';
import classNames from 'classnames';
import { mapToCssModules } from '../utils';

const defaultProps = {
  el: 'div'
};

const CardImgOverlay = (props) => {
  const {
    className,
    cssModule,
    el: El,
    ...attributes
  } = props;
  const classes = mapToCssModules(classNames(
    className,
    'card-img-overlay'
  ), cssModule);

  return (
    <El {...attributes} className={classes} />
  );
};

CardImgOverlay.defaultProps = defaultProps;

export default CardImgOverlay;
