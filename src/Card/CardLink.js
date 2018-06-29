
import { createElement } from 'inferno-create-element';
import classNames from 'classnames';
import { mapToCssModules } from '../utils';

const defaultProps = {
  tag: 'a'
};

const CardLink = (props) => {
  const {
    children,
    className,
    cssModule,
    tag: Tag,
    innerRef,
    ...attributes
  } = props;
  const classes = mapToCssModules(classNames(
    className,
    'card-link'
  ), cssModule);

  Object.assign(attributes, {
    className: classes,
    ref: innerRef
  })

  return createElement(
    Tag,
    attributes, 
    children
  )
};

CardLink.defaultProps = defaultProps;

export default CardLink;
