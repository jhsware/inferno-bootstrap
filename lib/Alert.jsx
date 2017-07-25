import Inferno from 'inferno';
import classNames from 'classnames';
import { mapToCssModules } from './utils';

const defaultProps = {
  color: 'success',
  el: 'div'
};

const Alert = (props) => {
  const {
    className,
    cssModule,
    el: El,
    color, // success || info || warning || danger
    onClose,
    children,
    ...attributes
  } = props;

  const classes = mapToCssModules(classNames(
    className,
    'alert',
    `alert-${color}`,
    { 'alert-dismissible': onClose }
  ), cssModule);

  const closeClasses = mapToCssModules('close', cssModule);

  return (
    <El {...attributes} className={classes} role="alert">
      { onClose ?
        <button type="button" className={closeClasses} aria-label="Close" onClick={onClose}>
          <span aria-hidden="true">&times;</span>
        </button>
        : null }
      { children }
    </El>
  )

};

Alert.defaultProps = defaultProps;

export default Alert;
