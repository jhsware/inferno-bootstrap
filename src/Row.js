import { createElement } from 'inferno-create-element';
import classNames from 'classnames';
import { mapToCssModules } from './utils';

const defaultProps = {
  tag: 'div'
};

const Row = (props) => {
  const {
    children,
    className,
    col,
    cssModule,
    noGutters,
    tag: Tag,
    ...attributes
  } = props;

  const classes = mapToCssModules(classNames(
    col ? 'col mr-0' : null,
    className,
    noGutters ? 'no-gutters' : null,
    'row',
  ), cssModule);

  Object.assign(attributes, { className: classes })

  return createElement(
    Tag,
    attributes, 
    children
  )
};

Row.defaultProps = defaultProps;

export default Row;
