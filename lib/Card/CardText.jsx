import Inferno from 'inferno';
import classNames from 'classnames';
import { mapToCssModules } from '../utils';

const defaultProps = {
  el: 'p'
};

const CardText = (props) => {
  const {
    className,
    cssModule,
    el: El,
    ...attributes
  } = props;
  const classes = mapToCssModules(classNames(
    className,
    'card-text'
  ), cssModule);

  return (
    <El {...attributes} className={classes} />
  );
};

CardText.defaultProps = defaultProps;

export default CardText;
