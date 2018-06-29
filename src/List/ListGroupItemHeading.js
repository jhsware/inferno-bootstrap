import { createElement } from 'inferno-create-element';
import classNames from 'classnames';
import { mapToCssModules } from '../utils';

const defaultProps = {
  tag: 'h5'
};

const ListGroupItemHeading = (props) => {
  const {
    children,
    className,
    tag: Tag,
    ...attributes
  } = props;
  const classes = mapToCssModules(classNames(
    className,
    'list-group-item-heading'
  ));

  Object.assign(attributes, { className: classes })

  return createElement(
    Tag,
    attributes, 
    children
  )
};

ListGroupItemHeading.defaultProps = defaultProps;

export default ListGroupItemHeading;
