
import { createElement } from 'inferno-create-element';
import classNames from 'classnames';
import { mapToCssModules } from '../utils';

const defaultProps = {
  tag: 'span'
};

const InputGroupText = (props) => {
  const {
    children,
    className,
    cssModule,
    tag: Tag,
    ...attributes
  } = props;

  const classes = mapToCssModules(classNames(
    className,
    'input-group-text'
  ), cssModule);

  Object.assign(attributes, { className: classes })

  return createElement(
    Tag,
    attributes, 
    children
  )
};

InputGroupText.defaultProps = defaultProps;

export default InputGroupText;