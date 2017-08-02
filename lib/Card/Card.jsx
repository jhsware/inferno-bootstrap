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
    inverse,
    outline,
    tag: Tag,
    ...attributes
  } = props;
  const classes = mapToCssModules(classNames(
    className,
    'card',
    inverse ? 'card-inverse' : false,
    block ? 'card-block' : false,
    color ? `card${outline ? '-outline' : ''}-${color}` : false
  ), cssModule);

  return (
    <Tag {...attributes} className={classes} />
  );
};

Card.defaultProps = defaultProps;

export default Card;
