import Inferno from 'inferno';
import classNames from 'classnames';
import { mapToCssModules } from '../utils';

const defaultProps = {
  tag: 'p'
};

const ListGroupItemText = (props) => {
  const {
    className,
    tag: Tag,
    ...attributes
  } = props;
  const classes = classNames(
    className,
    'list-group-item-text'
  );

  return (
    <Tag {...attributes} className={classes} />
  );
};

ListGroupItemText.defaultProps = defaultProps;

export default ListGroupItemText;
