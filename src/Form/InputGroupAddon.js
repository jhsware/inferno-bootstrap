
import { createElement } from 'inferno-create-element';
import classNames from 'classnames';
import { mapToCssModules } from '../utils';
import InputGroupText from './InputGroupText';

const defaultProps = {
  tag: 'div'
};

const InputGroupAddon = (props) => {
  const {
    className,
    cssModule,
    tag: Tag,
    addonType,
    children,
    ...attributes
  } = props;

  const classes = mapToCssModules(classNames(
    className,
    'input-group-' + addonType
  ), cssModule);

  // Convenience to assist with transition
  if (typeof children === 'string') {
    Object.assign(attributes, { className: classes })

    return createElement(
      Tag,
      attributes, 
      <InputGroupText>{children}</InputGroupText>
    )    
  }

  Object.assign(attributes, { className: classes })

  return createElement(
    Tag,
    attributes, 
    children
  )
};

InputGroupAddon.defaultProps = defaultProps;

export default InputGroupAddon;
