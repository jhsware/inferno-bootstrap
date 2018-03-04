import { Component, createPortal } from 'inferno';
import classNames from 'classnames';
import {
  getOriginalBodyPadding,
  conditionallyUpdateScrollbar,
  setScrollbarWidth,
  mapToCssModules,
  omit
} from '../utils';

import {
  animateModalOnAdd,
  animateModalOnRemove,
  Animated
} from './AnimateModal'

const propsToOmit = [
  'animationPrefix',
  'backgroundAnimationPrefix',
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
  'zIndex'
];

const defaultProps = {
  isOpen: false,
  autoFocus: true,
  backdrop: true,
  keyboard: true,
  zIndex: 1050,
  fade: true
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
    this.createEventListeners = this.createEventListeners.bind(this);

    this.state = {}
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
    if (this._dialog && this.props.keyboard && e.keyCode === 27 && this.props.toggle) {
      this.props.toggle();
    }
  }

  handleBackdropClick(e) {
    if (!this._dialog || this.props.backdrop !== true) return;

    const container = this._dialog;

    if (e.target && !container.contains(e.target) && this.props.toggle) {
      this.props.toggle();
    }
  }

  togglePortal() {
    if (this.props.isOpen) {
      if (this.props.autoFocus) {
        this._focus = true;
      }
      this.show();
    } else {
      this.hide();
    }
  }

  createEventListeners() {
    window.addEventListener('keyup', this.handleEscape)
    window.addEventListener('click', this.handleBackdropClick, true)
  }

  destroy() {
    window.removeEventListener('keyup', this.handleEscape)
    window.removeEventListener('click', this.handleBackdropClick, true)
    if (this.state._element) {
      const _element = this.state._element
      this.setState({
        _element: null
      })
      document.body.removeChild(_element);
    }

    // Use regex to prevent matching `modal-open` as part of a different class, e.g. `my-modal-opened`
    const classes = document.body.className.replace(/(^| )modal-open( |$)/, ' ');
    document.body.className = mapToCssModules(classNames(classes).trim(), this.props.cssModule);
    setScrollbarWidth(this.originalBodyPadding);
  }

  hide() {
    // Need to trigger cleanup if the animation doesn't play
    if (!this.props.fade) {
      this.destroy()
    }
  }

  show() {
    const classes = document.body.className;
    const _element = document.createElement('div');
    _element.setAttribute('tabindex', '-1');
    _element.style.position = 'relative';
    _element.style.zIndex = this.props.zIndex;
    this.originalBodyPadding = getOriginalBodyPadding();

    conditionallyUpdateScrollbar();
    this.createEventListeners()

    document.body.appendChild(_element);

    document.body.className = mapToCssModules(classNames(
      classes,
      'modal-open'
    ), this.props.cssModule);

    this.setState({
      _element
    })
  }

  renderModalDialog() {
    const attributes = omit(this.props, propsToOmit);

    return (
      <div
        className={mapToCssModules(classNames('modal-dialog', this.props.className, {
          [`modal-${this.props.size}`]: this.props.size
        }), this.props.cssModule)}
        role="document"
        ref={(c) => {
          this._dialog = c;
          if (this._focus) {
            c.parentNode.focus();
            this._focus = false;
          }
        }}
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
      tabIndex: '-1'
    };

    const prefix = this.props.animationPrefix || "ModalFade"
    const backgroundPrefix = this.props.backgroundAnimationPrefix || "ModalBackdropFade"

    if (this.props.fade) {
      const animCls = {
        show: 'show',
        active: 'fade',
        hide: undefined
      }

      const backdropAnimCls = {
        show: 'fade show',
        active: 'fade',
        hide: undefined
      }

      return (
        <div className={mapToCssModules(wrapClassName)}>
          <AnimatedSpecial
            key="modal-dialog"
            isOpen={isOpen}
            cssModule={cssModule}
            className={mapToCssModules(classNames('modal', modalClassName), cssModule)}
            onOpened={this.onOpened}
            onClosed={this.onClosed}
            {...modalAttributes}
          >
            {this.renderModalDialog()}
          </AnimatedSpecial>

          <AnimatedSpecial
            key="modal-backdrop"
            isOpen={isOpen && backdrop}
            cssModule={cssModule}
            className={mapToCssModules(classNames('modal-backdrop', backdropClassName), cssModule)}
          />
        </div>
      );
    }

    return (
      <div className={mapToCssModules(wrapClassName)}>
        {isOpen && (
          <div
            style={{ display: 'block'}  }
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
    return this.state._element ? createPortal(this.renderChildren(), this.state._element) : null;
  }
}

Modal.defaultProps = defaultProps;

class AnimatedSpecial extends Component {
  /*
  I need to create a separate component to get unmount to work properly
  since animations are triggered on unmount and I don't want inferno to
  remove all the elements until the animation is completed.
   */
  

  render({ isOpen, onClosed, onOpened, ...attrs }) {
    if (isOpen) {
      return (
        <Animated {...attrs}
          onComponentDidMount={(dom) => animateModalOnAdd(dom, onOpened)}
          onComponentWillUnmount={(dom) => animateModalOnRemove(dom, onClosed)} />
      )
    } else {
      return null
    }
  }
}

export default Modal;


/*
  props.bootstrapCls = {
    hide: ,
    active: 'modal fade',
    show: 'modal show'
  }
*/