import Inferno from 'inferno';
import classNames from 'classnames';
import { mapToCssModules } from '../utils';
import Button from '../Button.jsx';

const defaultProps = {
  el: 'div'
};

const InputGroupButton = (props) => {
  let {
    className,
    cssModule,
    el: El,
    children,
    groupClassName,
    groupAttributes,
    ...attributes
  } = props;

  if (typeof children === 'string') {
    const groupClasses = mapToCssModules(classNames(
      groupClassName,
      'input-group-btn'
    ), cssModule);

    return (
      <El {...groupAttributes} className={groupClasses}>
        <Button {...attributes} className={className} children={children} />
      </El>
    );
  }

  const classes = mapToCssModules(classNames(
    className,
    'input-group-btn'
  ), cssModule);

  return (
    <El {...attributes} className={classes} children={children} />
  );
};

InputGroupButton.defaultProps = defaultProps;

export default InputGroupButton;
