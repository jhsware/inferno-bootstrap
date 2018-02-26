import classNames from 'classnames';
import { createElement } from 'inferno-create-element';
import { mapToCssModules } from './utils';

const defaultProps = {
  tag: 'li',
};

const PaginationItem = (props) => {
  const {
    active,
    children,
    className,
    cssModule,
    disabled,
    tag: Tag,
    ...attributes
  } = props;

  const classes = mapToCssModules(classNames(
    className,
    'page-item',
    {
      active,
      disabled,
    }
  ), cssModule);

  Object.assign(attributes, { className: classes })

  return createElement(
    Tag,
    attributes, 
    children
  )
};

PaginationItem.defaultProps = defaultProps;

export default PaginationItem;
