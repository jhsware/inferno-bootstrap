
import { createElement } from 'inferno-create-element';
import classNames from 'classnames';
import { mapToCssModules } from '../utils';

const defaultProps = {
  tag: 'small',
};

const FormText = (props) => {
  const {
    children,
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

  Object.assign(attributes, { className: classes })

  return createElement(
    Tag,
    attributes, 
    children
  )
};

FormText.defaultProps = defaultProps;

export default FormText;
