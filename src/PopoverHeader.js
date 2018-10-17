import { createElement } from 'inferno-create-element';
import classNames from 'classnames';
import { mapToCssModules } from './utils';

const defaultProps = {
  tag: 'h3'
};

const PopoverHeader = (props) => {
  const {
    children,
    className,
    cssModule,
    tag: Tag,
    ...attributes
  } = props;

  const classes = mapToCssModules(classNames(
    className,
    'popover-header'
  ), cssModule);

  Object.assign(attributes, { className: classes })

  return createElement(
    Tag,
    attributes, 
    children
  )
};

PopoverHeader.defaultProps = defaultProps;

export default PopoverHeader;
