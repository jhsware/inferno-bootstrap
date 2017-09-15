import Inferno from 'inferno';
import classNames from 'classnames';
import { mapToCssModules } from './utils';

const defaultProps = {
  tag: 'li'
};

const BreadcrumbItem = (props) => {
  const {
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

  return (
    <Tag {...attributes} className={classes} />
  );
};

BreadcrumbItem.defaultProps = defaultProps;

export default BreadcrumbItem;
