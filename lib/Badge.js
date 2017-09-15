import Inferno from 'inferno';
import classNames from 'classnames';
import { mapToCssModules } from './utils';

const defaultProps = {
  color: 'default',
  pill: false,
  tag: 'span'
};

const Badge = (props) => {
  const {
    className,
    cssModule,
    color,
    pill,
    tag: Tag,
    ...attributes
  } = props;

  const classes = mapToCssModules(classNames(
    className,
    'badge',
    'badge-' + color,
    pill ? 'badge-pill' : false
  ), cssModule);

  return (
    <Tag {...attributes} className={classes} />
  );
};

Badge.defaultProps = defaultProps;

export default Badge;
