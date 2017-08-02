import Inferno from 'inferno';
import classNames from 'classnames';
import { mapToCssModules } from './utils';

const defaultProps = {
  tag: 'ol'
};

const Breadcrumb = (props) => {
  const {
    className,
    cssModule,
    tag: Tag,
    ...attributes
  } = props;
  const classes = mapToCssModules(classNames(
    className,
    'breadcrumb'
  ), cssModule);

  return (
    <Tag {...attributes} className={classes} />
  );
};

Breadcrumb.defaultProps = defaultProps;

export default Breadcrumb;
