import Inferno from 'inferno';
import classNames from 'classnames';
import { mapToCssModules } from '../utils';

const defaultProps = {
  tag: 'small',
};

const FormText = (props) => {
  const {
    className,
    cssModule,
    inline,
    color, // muted || success || warning || info || danger
    tag: Tag,
    ...attributes
  } = props;

  const classes = mapToCssModules(classNames(
    className,
    !inline ? 'form-text' : false,
    color ? `text-${color}` : (typeof color === 'undefined' && 'text-muted')
  ), cssModule);

  return (
    <Tag {...attributes} className={classes} />
  );
};

FormText.defaultProps = defaultProps;

export default FormText;
