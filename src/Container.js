import classNames from 'classnames';
import { createElement } from 'inferno-create-element';
import { mapToCssModules, omit } from './utils';

const defaultProps = {
  tag: 'div',
};

const Container = (props) => {
  const {
    children,
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

  Object.assign(attributes, { className: classes })

  return createElement(
    Tag,
    attributes, 
    children
  )
};

Container.defaultProps = defaultProps;

export default Container;
