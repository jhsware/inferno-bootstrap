import Inferno from 'inferno';
import classNames from 'classnames';
import { mapToCssModules } from '../utils';

const defaultProps = {
  tag: 'h5'
};

const ListGroupItemHeading = (props) => {
  const {
    className,
    tag: Tag,
    ...attributes
  } = props;
  const classes = classNames(
    className,
    'list-group-item-heading'
  );

  return (
    <Tag {...attributes} className={classes} />
  );
};

ListGroupItemHeading.defaultProps = defaultProps;

export default ListGroupItemHeading;
