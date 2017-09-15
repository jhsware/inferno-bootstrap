import Inferno from 'inferno';
import classNames from 'classnames';
import { mapToCssModules } from '../utils';

const defaultProps = {
  tag: 'h4',
  wrapTag: 'div',
  closeAriaLabel: 'Close'
};

const ModalHeader = (props) => {
  let closeButton;
  const {
    className,
    cssModule,
    children,
    toggle,
    tag: Tag,
    wrapTag: WrapTag,
    closeAriaLabel,
    ...attributes } = props;

  const classes = mapToCssModules(classNames(
    className,
    'modal-header'
  ), cssModule);

  if (toggle) {
    closeButton = (
      <button type="button" onClick={toggle} className="close" aria-label={closeAriaLabel}>
        <span aria-hidden="true">{String.fromCharCode(215)}</span>
      </button>
    );
  }

  return (
    <WrapTag {...attributes} className={classes}>
      <Tag className={mapToCssModules('modal-title', cssModule)}>
        {children}
      </Tag>
      {closeButton}
    </WrapTag>
  );
};

ModalHeader.defaultProps = defaultProps;

export default ModalHeader;
