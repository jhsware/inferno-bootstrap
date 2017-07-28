import Inferno from 'inferno';
import classNames from 'classnames';
import { mapToCssModules } from '../utils';

const defaultProps = {
  el: 'h4',
  wrapTag: 'div',
};

const ModalHeader = (props) => {
  let closeButton;
  const {
    className,
    cssModule,
    children,
    toggle,
    el: El,
    wrapTag: WrapTag,
    ...attributes } = props;

  const classes = mapToCssModules(classNames(
    className,
    'modal-header'
  ), cssModule);

  if (toggle) {
    closeButton = (
      <button type="button" onClick={toggle} className="close" aria-label="Close">
        <span aria-hidden="true">{String.fromCharCode(215)}</span>
      </button>
    );
  }

  return (
    <WrapTag {...attributes} className={classes}>
      <El className={mapToCssModules('modal-title', cssModule)}>
        {children}
      </El>
      {closeButton}
    </WrapTag>
  );
};

ModalHeader.defaultProps = defaultProps;

export default ModalHeader;
