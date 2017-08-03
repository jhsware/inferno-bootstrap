import classNames from 'classnames';
import { mapToCssModules } from './utils';

const defaultProps = {
  tag: 'li',
};

const PaginationItem = (props) => {
  const {
    active,
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

  return (
    <Tag {...attributes} className={classes} />
  );
};

PaginationItem.defaultProps = defaultProps;

export default PaginationItem;
