import Inferno from 'inferno';
import classNames from 'classnames';
import { mapToCssModules } from '../utils';

const defaultProps = {
  tag: 'form',
};

/**
 * 
 * NOTE: I have removed the `inline`-attribute, this can be done with CSS
 * which gives cleaner code and better separation of semantics and styling.
 */

const Form = (props) => {
  const {
    className,
    cssModule,
    tag: Tag,
    innerRef,
    ...attributes
  } = props;

  const classes = mapToCssModules(classNames(
    className,
  ), cssModule);

  return (
    <Tag {...attributes} ref={innerRef} className={classes} />
  );
};

Form.defaultProps = defaultProps;

export default Form;
