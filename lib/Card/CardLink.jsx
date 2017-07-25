import Inferno from 'inferno';
import classNames from 'classnames';
import { mapToCssModules } from '../utils';

const defaultProps = {
  el: 'a'
};

const CardLink = (props) => {
  const {
    className,
    cssModule,
    el: El,
    getRef,
    ...attributes
  } = props;
  const classes = mapToCssModules(classNames(
    className,
    'card-link'
  ), cssModule);

  return (
    <El {...attributes} ref={getRef} className={classes} />
  );
};

CardLink.defaultProps = defaultProps;

export default CardLink;
