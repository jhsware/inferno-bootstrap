import Inferno from 'inferno';
import classNames from 'classnames';
import { mapToCssModules } from '../utils';

const defaultProps = {
  tag: 'label',
};

/**
 * 
 * NOTE: I have removed the `inline`-attribute, this can be done with CSS
 * which gives cleaner code and better separation of semantics and styling.
 * 
 * This affects widths property
 */

const Label = (props) => {
  const {
    className,
    cssModule,
    hidden,
    tag: Tag,
    check,
    disabled,
    htmlFor,
    ...attributes
  } = props;

  const classes = mapToCssModules(classNames(
    className,
    hidden ? 'sr-only' : false,
    check ? 'form-check-label' : 'form-control-label',
    check && disabled ? 'disabled' : false
  ), cssModule);

  return (
    <Tag htmlFor={htmlFor} {...attributes} className={classes} />
  );
};

Label.defaultProps = defaultProps;

export default Label;
