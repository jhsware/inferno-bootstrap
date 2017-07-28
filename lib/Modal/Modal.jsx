import Inferno from 'inferno';
import Component from 'inferno-component'
import classNames from 'classnames';
import { Animated } from 'inferno-animation'

import {
  getOriginalBodyPadding,
  conditionallyUpdateScrollbar,
  setScrollbarWidth,
  mapToCssModules,
  omit
} from '../utils';

import {
  unmountComponentAtNode,
  unstable_renderSubtreeIntoContainer,
  WrapperComponent
} from '../compat.js'

const propsToOmit = [
  'isOpen',
  'autoFocus',
  'size',
  'toggle',
  'keyboard',
  'backdrop',
  'onEnter',
  'onExit',
  'onOpened',
  'onClosed',
  'children',
  'className',
  'wrapClassName',
  'modalClassName',
  'backdropClassName',
  'contentClassName',
  'fade',
  'cssModule',
  'zIndex',
  'backdropTransitionTimeout',
  'backdropTransitionAppearTimeout',
  'backdropTransitionEnterTimeout',
  'backdropTransitionLeaveTimeout',
  'modalTransitionTimeout',
  'modalTransitionAppearTimeout',
  'modalTransitionEnterTimeout',
  'modalTransitionLeaveTimeout',
];

const defaultProps = {
  isOpen: false,
  autoFocus: true,
  backdrop: true,
  keyboard: true,
  zIndex: 1050,
  fade: true,
  modalTransitionTimeout: 300,
  backdropTransitionTimeout: 150,
};

class Modal extends Component {
  constructor(props) {
    super(props);

    this.originalBodyPadding = null;
    this.isBodyOverflowing = false;
    this.togglePortal = this.togglePortal.bind(this);
    this.handleBackdropClick = this.handleBackdropClick.bind(this);
    this.handleEscape = this.handleEscape.bind(this);
    this.destroy = this.destroy.bind(this);
    this.onOpened = this.onOpened.bind(this);
    this.onClosed = this.onClosed.bind(this);
  }

  componentDidMount() {
    if (this.props.isOpen) {
      this.togglePortal();
    }
    if (this.props.onEnter) {
      this.props.onEnter();
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.isOpen !== prevProps.isOpen) {
      // handle portal events/dom updates
      this.togglePortal();
    } else if (this._element) {
      // rerender portal
      this.renderIntoSubtree();
    }
  }

  componentWillUnmount() {
    this.destroy();
    if (this.props.onExit) {
      this.props.onExit();
    }
  }

  onOpened() {
    if (this.props.onOpened) {
      this.props.onOpened();
    }
  }

  onClosed() {
    this.destroy();
    if (this.props.onClosed) {
      this.props.onClosed();
    }
  }

  handleEscape(e) {
    if (this.props.keyboard && e.keyCode === 27 && this.props.toggle) {
      this.props.toggle();
    }
  }

  handleBackdropClick(e) {
    if (this.props.backdrop !== true) return;

    const container = this._dialog;

    if (e.target && !container.contains(e.target) && this.props.toggle) {
      this.props.toggle();
    }
  }

  hasTransition() {
    if (this.props.fade === false) {
      return false;
    }

    return this.props.modalTransitionTimeout > 0;
  }

  togglePortal() {
    if (this.props.isOpen) {
      if (this.props.autoFocus) {
        this._focus = true;
      }
      this.show();
      //if (!this.hasTransition()) {
      //  this.onOpened();
      //}
    } else {
      this.hide();
      //if (!this.hasTransition()) {
      //  this.onClosed();
      //}
    }
  }

  destroy() {
    if (this._element) {
      unmountComponentAtNode(this._element);
      document.body.removeChild(this._element);
      this._element = null;
    }

    // Use regex to prevent matching `modal-open` as part of a different class, e.g. `my-modal-opened`
    const classes = document.body.className.replace(/(^| )modal-open( |$)/, ' ');
    document.body.className = mapToCssModules(classNames(classes).trim(), this.props.cssModule);
    setScrollbarWidth(this.originalBodyPadding);
  }

  hide() {
    this.renderIntoSubtree();
  }

  show() {
    const classes = document.body.className;
    this._element = document.createElement('div');
    this._element.setAttribute('tabindex', '-1');
    this._element.style.position = 'relative';
    this._element.style.zIndex = this.props.zIndex;
    this.originalBodyPadding = getOriginalBodyPadding();

    conditionallyUpdateScrollbar();

    document.body.appendChild(this._element);

    document.body.className = mapToCssModules(classNames(
      classes,
      'modal-open'
    ), this.props.cssModule);

    this.renderIntoSubtree();
  }

  renderModalDialog() {
    const attributes = omit(this.props, propsToOmit);

    return (
      <div
        className={mapToCssModules(classNames('modal-dialog', this.props.className, {
          [`modal-${this.props.size}`]: this.props.size
        }), this.props.cssModule)}
        role="document"
        ref={(c) => (this._dialog = c)}
        {...attributes}
      >
        <div
          className={mapToCssModules(
            classNames('modal-content', this.props.contentClassName),
            this.props.cssModule
          )}
        >
          {this.props.children}
        </div>
      </div>
    );
  }

  renderIntoSubtree() {
    unstable_renderSubtreeIntoContainer(
      this,
      this.renderChildren(),
      this._element
    );

    // check if modal should receive focus
    if (this._focus) {
      this._dialog.parentNode.focus();
      this._focus = false;
    }
  }

  renderChildren() {
    const {
      wrapClassName,
      modalClassName,
      backdropClassName,
      cssModule,
      isOpen,
      backdrop,
      modalTransitionTimeout,
      backdropTransitionTimeout
    } = this.props;

    const modalAttributes = {
      onClickCapture: this.handleBackdropClick,
      onKeyUp: this.handleEscape,
      style: { display: 'block' },
      tabIndex: '-1'
    };

    if (this.hasTransition()) {
      return (
        <div className={mapToCssModules(wrapClassName)}>
          {isOpen && (
            <Animated prefix="ModalFade"
              key="modal-dialog"
              onEnter={this.onEntered}
              onLeave={this.onLeft}
              cssModule={cssModule}
              className={mapToCssModules(classNames('modal', 'show', modalClassName), cssModule)}
              {...modalAttributes}
            >
              {this.renderModalDialog()}
            </Animated>
          )}
          {isOpen && backdrop && (
            <Animated prefix="ModalBackdropFade"
              key="modal-backdrop"
              cssModule={cssModule}
              className={mapToCssModules(classNames('modal-backdrop', backdropClassName), cssModule)}
            />
          )}
        </div>
      );
    }

    return (
      <div className={mapToCssModules(wrapClassName)}>
        {isOpen && (
          <div
            className={mapToCssModules(classNames('modal', 'show', modalClassName), cssModule)}
            {...modalAttributes}
          >
            {this.renderModalDialog()}
          </div>
        )}
        {isOpen && backdrop && (
          <div
            className={mapToCssModules(classNames('modal-backdrop', 'show', backdropClassName), cssModule)}
          />
        )}
      </div>
    );
  }

  render() {
    return null;
  }
}

Modal.defaultProps = defaultProps;

export default Modal;
