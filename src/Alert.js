import { createElement } from 'inferno-create-element';
import classNames from 'classnames';
import { mapToCssModules } from './utils';

const defaultProps = {
  color: 'success',
  tag: 'div'
};

const Alert = (props) => {
  const {
    children,
    className,
    cssModule,
    tag: Tag,
    color, // success || info || warning || danger
    onClose,
    ...attributes
  } = props;

  const classes = mapToCssModules(classNames(
    className,
    'alert',
    `alert-${color}`,
    { 'alert-dismissible': onClose }
  ), cssModule);

  const closeClasses = mapToCssModules('close', cssModule);

  Object.assign(attributes, {
    className: classes,
    role: 'alert'
  })

  const childEls = [
    onClose ?
      <button type="button" className={closeClasses} aria-label="Close" onClick={onClose}>
        <span aria-hidden="true">&times;</span>
      </button>
    : null,
    children
  ]

  return createElement(
    Tag,
    attributes, 
    childEls
  )
};

Alert.defaultProps = defaultProps;

export default Alert;
