import Inferno from 'inferno';
import classNames from 'classnames';
import { mapToCssModules } from '../utils';

const defaultProps = {
  el: 'div',
};

const ModalFooter = (props) => {
  const {
    className,
    cssModule,
    el: El,
    ...attributes } = props;
  const classes = mapToCssModules(classNames(
    className,
    'modal-footer'
  ), cssModule);

  return (
    <El {...attributes} className={classes} />
  );
};

ModalFooter.defaultProps = defaultProps;

export default ModalFooter;
