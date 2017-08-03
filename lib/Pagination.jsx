import classNames from 'classnames';
import { mapToCssModules } from './utils';

const defaultProps = {
  tag: 'ul',
};

const Pagination = (props) => {
  const {
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

  return (
    <Tag {...attributes} className={classes} />
  );
};

Pagination.defaultProps = defaultProps;

export default Pagination;
