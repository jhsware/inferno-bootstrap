import Inferno from 'inferno';
import classNames from 'classnames';
import { mapToCssModules } from '../utils';

const defaultProps = {
  el: 'div'
};

const CardHeader = (props) => {
  const {
    className,
    cssModule,
    el: El,
    ...attributes
  } = props;
  const classes = mapToCssModules(classNames(
    className,
    'card-header'
  ), cssModule);

  return (
    <El {...attributes} className={classes} />
  );
};

CardHeader.defaultProps = defaultProps;

export default CardHeader;
