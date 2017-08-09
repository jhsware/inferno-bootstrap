import Inferno from 'inferno';
import classNames from 'classnames';
import { mapToCssModules } from '../utils';

const defaultProps = {
  tag: 'ul'
};

const ListGroup = (props) => {
  const {
    className,
    cssModule,
    tag: Tag,
    flush,
    ...attributes
  } = props;
  const classes = mapToCssModules(classNames(
    className,
    'list-group',
    flush ? 'list-group-flush' : false
  ), cssModule);

  return (
    <Tag {...attributes} className={classes} />
  );
};

ListGroup.defaultProps = defaultProps;

export default ListGroup;
