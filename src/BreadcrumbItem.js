import { createElement } from 'inferno-create-element';
import classNames from 'classnames';
import { mapToCssModules } from './utils';

const defaultProps = {
  tag: 'li'
};

const BreadcrumbItem = (props) => {
  const {
    children,
    className,
    cssModule,
    active,
    tag: Tag,
    ...attributes
  } = props;
  const classes = mapToCssModules(classNames(
    className,
    active ? 'active' : false,
    'breadcrumb-item'
  ), cssModule);

  Object.assign(attributes, { className: classes })

  return createElement(
    Tag,
    attributes, 
    children
  )
};

BreadcrumbItem.defaultProps = defaultProps;

export default BreadcrumbItem;
