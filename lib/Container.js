import classNames from 'classnames';
import { mapToCssModules, omit } from './utils';

const defaultProps = {
  tag: 'div',
};

const Container = (props) => {
  const {
    className,
    cssModule,
    fluid,
    tag: Tag,
    ...attributes
  } = props;

  const classes = mapToCssModules(classNames(
    className,
    fluid ? 'container-fluid' : 'container'
  ), cssModule);

  return (
    <Tag {...attributes} className={classes} />
  );
};

Container.defaultProps = defaultProps;

export default Container;
