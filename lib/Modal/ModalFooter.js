import Inferno from 'inferno';
import classNames from 'classnames';
import { mapToCssModules } from '../utils';

const defaultProps = {
  tag: 'div',
};

const ModalFooter = (props) => {
  const {
    className,
    cssModule,
    tag: Tag,
    ...attributes } = props;
  const classes = mapToCssModules(classNames(
    className,
    'modal-footer'
  ), cssModule);

  return (
    <Tag {...attributes} className={classes} />
  );
};

ModalFooter.defaultProps = defaultProps;

export default ModalFooter;
