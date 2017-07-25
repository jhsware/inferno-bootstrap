import Inferno from 'inferno';
import classNames from 'classnames';
import { mapToCssModules } from '../utils';

const defaultProps = {
  el: 'h4'
};

const CardTitle = (props) => {
  const {
    className,
    cssModule,
    el: El,
    ...attributes
  } = props;
  const classes = mapToCssModules(classNames(
    className,
    'card-title'
  ), cssModule);

  return (
    <El {...attributes} className={classes} />
  );
};

CardTitle.defaultProps = defaultProps;

export default CardTitle;
