import Inferno from 'inferno';
import classNames from 'classnames';
import { mapToCssModules } from '../utils';

const defaultProps = {
  el: 'div',
};

const ModalBody = (props) => {
  const {
    className,
    cssModule,
    el: El,
    ...attributes } = props;
  const classes = mapToCssModules(classNames(
    className,
    'modal-body'
  ), cssModule);

  return (
    <El {...attributes} className={classes} />
  );
};

ModalBody.defaultProps = defaultProps;

export default ModalBody;
