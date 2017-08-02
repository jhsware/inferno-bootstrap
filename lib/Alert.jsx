import Inferno from 'inferno';
import classNames from 'classnames';
import { mapToCssModules } from './utils';

const defaultProps = {
  color: 'success',
  tag: 'div'
};

const Alert = (props) => {
  const {
    className,
    cssModule,
    tag: Tag,
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
    <Tag {...attributes} className={classes} role="alert">
      { onClose ?
        <button type="button" className={closeClasses} aria-label="Close" onClick={onClose}>
          <span aria-hidden="true">&times;</span>
        </button>
        : null }
      { children }
    </Tag>
  )

};

Alert.defaultProps = defaultProps;

export default Alert;
