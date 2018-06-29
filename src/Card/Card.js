
import { createElement } from 'inferno-create-element';
import classNames from 'classnames';
import { mapToCssModules } from '../utils';

const defaultProps = {
  tag: 'div'
};

const Card = (props) => {
  const {
    children,
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

  Object.assign(attributes, { className: classes })

  return createElement(
    Tag,
    attributes, 
    children
  )
};

Card.defaultProps = defaultProps;

export default Card;