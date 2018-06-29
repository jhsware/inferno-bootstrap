import { createElement } from 'inferno-create-element';
import classNames from 'classnames';
import { mapToCssModules } from '../utils';

const defaultProps = {
  tag: 'p'
};

const ListGroupItemText = (props) => {
  const {
    children,
    className,
    tag: Tag,
    ...attributes
  } = props;
  const classes = mapToCssModules(classNames(
    className,
    'list-group-item-text'
  ));

  Object.assign(attributes, { className: classes })

  return createElement(
    Tag,
    attributes, 
    children
  )
};

ListGroupItemText.defaultProps = defaultProps;

export default ListGroupItemText;
