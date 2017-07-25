import Inferno from 'inferno';
import classNames from 'classnames';
import { mapToCssModules } from '../utils';

const defaultProps = {
  el: 'h6'
};

const CardSubtitle = (props) => {
  const {
    className,
    cssModule,
    el: El,
    ...attributes
  } = props;
  const classes = mapToCssModules(classNames(
    className,
    'card-subtitle'
  ), cssModule);

  return (
    <El {...attributes} className={classes} />
  );
};

CardSubtitle.defaultProps = defaultProps;

export default CardSubtitle;
