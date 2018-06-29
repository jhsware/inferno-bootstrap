
import { createElement } from 'inferno-create-element';
import classNames from 'classnames';
import { mapToCssModules } from './utils';

const defaultProps = {
  tag: 'div'
};

const Jumbotron = (props) => {
  const {
    children,
    className,
    cssModule,
    tag: Tag,
    fluid,
    ...attributes
  } = props;

  const classes = mapToCssModules(classNames(
    className,
    'jumbotron',
    fluid ? 'jumbotron-fluid' : false
  ), cssModule);

  Object.assign(attributes, { className: classes })

  return createElement(
    Tag,
    attributes, 
    children
  )
};

Jumbotron.defaultProps = defaultProps;

export default Jumbotron;
