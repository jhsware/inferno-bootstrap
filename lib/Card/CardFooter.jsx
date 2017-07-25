import Inferno from 'inferno';
import classNames from 'classnames';
import { mapToCssModules } from '../utils';

const defaultProps = {
  el: 'div'
};

const CardFooter = (props) => {
  const {
    className,
    cssModule,
    el: El,
    ...attributes
  } = props;
  const classes = mapToCssModules(classNames(
    className,
    'card-footer'
  ), cssModule);

  return (
    <El {...attributes} className={classes} />
  );
};

CardFooter.defaultProps = defaultProps;

export default CardFooter;
