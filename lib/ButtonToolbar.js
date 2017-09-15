import Inferno from 'inferno';
import classNames from 'classnames';
import { mapToCssModules } from './utils';

const defaultProps = {
  tag: 'div',
  role: 'toolbar',
};

const ButtonToolbar = (props) => {
  const {
    className,
    cssModule,
    tag: Tag,
    ...attributes
  } = props;

  const classes = mapToCssModules(classNames(
    className,
    'btn-toolbar'
  ), cssModule);

  return (
    <Tag {...attributes} className={classes} />
  );
};

ButtonToolbar.defaultProps = defaultProps;

export default ButtonToolbar;
