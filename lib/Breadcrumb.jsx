import Inferno from 'inferno';
import classNames from 'classnames';
import { mapToCssModules } from './utils';

const defaultProps = {
  el: 'ol'
};

const Breadcrumb = (props) => {
  const {
    className,
    cssModule,
    el: El,
    ...attributes
  } = props;
  const classes = mapToCssModules(classNames(
    className,
    'breadcrumb'
  ), cssModule);

  return (
    <El {...attributes} className={classes} />
  );
};

Breadcrumb.defaultProps = defaultProps;

export default Breadcrumb;
