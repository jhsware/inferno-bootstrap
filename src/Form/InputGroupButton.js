
import { createElement } from 'inferno-create-element';
import classNames from 'classnames';
import { mapToCssModules } from '../utils';
import Button from '../Button';

const defaultProps = {
  tag: 'div'
};

const InputGroupButton = (props) => {
  let {
    className,
    cssModule,
    tag: Tag,
    addonType,
    children,
    groupClassName,
    groupAttributes,
    ...attributes
  } = props;

  if (typeof children === 'string') {
    const groupClasses = mapToCssModules(classNames(
      groupClassName,
      'input-group-' + addonType
    ), cssModule);
    
    groupAttributes = groupAttributes || {}
    Object.assign(groupAttributes, { className: groupClasses })

    return createElement(
      Tag,
      groupAttributes, 
      <Button {...attributes} className={className}>{children}</Button>
    )
  }

  const classes = mapToCssModules(classNames(
    className,
    'input-group-' + addonType
  ), cssModule);

  Object.assign(attributes, { className: classes })

  return createElement(
    Tag,
    attributes, 
    children
  )
};

InputGroupButton.defaultProps = defaultProps;

export default InputGroupButton;
