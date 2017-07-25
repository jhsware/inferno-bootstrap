import Inferno from 'inferno';
import classNames from 'classnames';
import { mapToCssModules } from './utils';

const defaultProps = {
  color: 'default',
  pill: false,
  el: 'span'
};

const Badge = (props) => {
  const {
    className,
    cssModule,
    color,
    pill,
    el: El,
    ...attributes
  } = props;

  const classes = mapToCssModules(classNames(
    className,
    'badge',
    'badge-' + color,
    pill ? 'badge-pill' : false
  ), cssModule);

  return (
    <El {...attributes} className={classes} />
  );
};

Badge.defaultProps = defaultProps;

export default Badge;
