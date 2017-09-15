import Inferno from 'inferno';
import classNames from 'classnames';
import { mapToCssModules } from '../utils';

const defaultProps = {
  tag: 'div'
};

const Card = (props) => {
  const {
    className,
    cssModule,
    color,
    block,
    body,
    inverse,
    outline,
    tag: Tag,
    ...attributes
  } = props;
  const classes = mapToCssModules(classNames(
    className,
    'card',
    inverse ? 'text-white' : false,
    block || body ? 'card-body' : false,
    color ? `${outline ? 'border' : 'bg'}-${color}` : false
  ), cssModule);

  return (
    <Tag {...attributes} className={classes} />
  );
};

Card.defaultProps = defaultProps;

export default Card;