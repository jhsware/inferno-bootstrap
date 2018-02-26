import classNames from 'classnames';
import { createElement } from 'inferno-create-element';
import { mapToCssModules } from './utils';

const defaultProps = {
  tag: 'ul',
};

const Pagination = (props) => {
  const {
    children,
    className,
    cssModule,
    size,
    tag: Tag,
    ...attributes
  } = props;

  const classes = mapToCssModules(classNames(
    className,
    'pagination',
    {
      [`pagination-${size}`]: !!size,
    }
  ), cssModule);

  Object.assign(attributes, { className: classes })

  return createElement(
    Tag,
    attributes, 
    children
  )
};

Pagination.defaultProps = defaultProps;

export default Pagination;
