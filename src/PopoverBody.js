
import { createElement } from 'inferno-create-element';
import classNames from 'classnames';
import { mapToCssModules } from './utils';

const defaultProps = {
  tag: 'div'
};

const PopoverBody = (props) => {
  const {
    children,
    className,
    cssModule,
    tag: Tag,
    ...attributes
  } = props;

  const classes = mapToCssModules(classNames(
    className,
    'popover-body'
  ), cssModule);

  Object.assign(attributes, { className: classes })

  return createElement(
    Tag,
    attributes, 
    children
  )
};

PopoverBody.defaultProps = defaultProps;

export default PopoverBody;