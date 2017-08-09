import Inferno from 'inferno';
import classNames from 'classnames';
import { mapToCssModules } from '../utils';

const defaultProps = {
  tag: 'li'
};

const handleDisabledOnClick = (e) => {
  e.preventDefault();
};

const ListGroupItem = (props) => {
  const {
    className,
    tag: Tag,
    active,
    disabled,
    action,
    color,
    ...attributes
  } = props;
  const classes = classNames(
    className,
    active ? 'active' : false,
    disabled ? 'disabled' : false,
    action ? 'list-group-item-action' : false,
    color ? `list-group-item-${color}` : false,
    'list-group-item'
  );

  // Prevent click event when disabled.
  if (disabled) {
    attributes.onClick = handleDisabledOnClick;
  }
  return (
    <Tag {...attributes} className={classes} />
  );
};

ListGroupItem.defaultProps = defaultProps;

export default ListGroupItem;
