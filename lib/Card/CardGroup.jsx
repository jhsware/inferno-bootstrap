import Inferno from 'inferno';
import classNames from 'classnames';
import { mapToCssModules } from '../utils';

const defaultProps = {
  el: 'div'
};

const CardGroup = (props) => {
  const {
    className,
    cssModule,
    el: El,
    ...attributes
  } = props;
  const classes = mapToCssModules(classNames(
    className,
    'card-group'
  ), cssModule);

  return (
    <El {...attributes} className={classes} />
  );
};

CardGroup.defaultProps = defaultProps;

export default CardGroup;
