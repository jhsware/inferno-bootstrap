import Inferno from 'inferno';
import classNames from 'classnames';
import { mapToCssModules } from './utils';

const defaultProps = {
  el: 'li'
};

const BreadcrumbItem = (props) => {
  const {
    className,
    cssModule,
    active,
    el: El,
    ...attributes
  } = props;
  const classes = mapToCssModules(classNames(
    className,
    active ? 'active' : false,
    'breadcrumb-item'
  ), cssModule);

  return (
    <El {...attributes} className={classes} />
  );
};

BreadcrumbItem.defaultProps = defaultProps;

export default BreadcrumbItem;
