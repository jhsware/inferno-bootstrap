import Inferno from 'inferno';
import classNames from 'classnames';
import { mapToCssModules } from '../utils';

const defaultProps = {
  tag: 'div',
};

const ModalBody = (props) => {
  const {
    className,
    cssModule,
    tag: Tag,
    ...attributes } = props;
  const classes = mapToCssModules(classNames(
    className,
    'modal-body'
  ), cssModule);

  return (
    <Tag {...attributes} className={classes} />
  );
};

ModalBody.defaultProps = defaultProps;

export default ModalBody;
