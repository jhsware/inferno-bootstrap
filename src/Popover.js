import { Component } from 'inferno';
import classNames from 'classnames';
import PopperContent from './PopperContent';
import { getTarget, mapToCssModules, omit } from './utils';
import {
  isNumber
} from "inferno-shared"

const omitProps = ['placement', 'target', 'isOpen', 'cssModule', 'className', 'delay', 'disabled', 'placementPrefix', 'toggle'];

const DEFAULT_DELAYS = {
  show: 0,
  hide: 0,
};

const defaultProps = {
  isOpen: false,
  placement: 'right',
  placementPrefix: 'bs-popover',
  delay: DEFAULT_DELAYS,
  toggle: () => {},
};

class Popover extends Component {
  constructor(props) {
    super(props);

    this.addTargetEvents = this.addTargetEvents.bind(this);
    this.handleDocumentClick = this.handleDocumentClick.bind(this);
    this.removeTargetEvents = this.removeTargetEvents.bind(this);
    this.toggle = this.toggle.bind(this);
    this.show = this.show.bind(this);
    this.hide = this.hide.bind(this);
  }

  componentDidMount() {
    this._target = getTarget(this.props.target);
    this.handleProps();
  }

  componentDidUpdate() {
    this.handleProps();
  }

  componentWillUnmount() {
    this.clearShowTimeout();
    this.clearHideTimeout();
    this.removeTargetEvents();
  }

  getDelay(key) {
    const { delay } = this.props;
    if (typeof delay === 'object') {
      return !isNumber(delay[key]) ? DEFAULT_DELAYS[key] : delay[key];
    }
    return delay;
  }

  handleProps() {
    if (this.props.isOpen) {
      this.show();
    } else {
      this.hide();
    }
  }

  show() {
    this.clearHideTimeout();
    this.addTargetEvents();
    if (!this.props.isOpen) {
      this.clearShowTimeout();
      this._showTimeout = setTimeout(this.toggle, this.getDelay('show'));
    }
  }

  hide() {
    this.clearShowTimeout();
    this.removeTargetEvents();
    if (this.props.isOpen) {
      this.clearHideTimeout();
      this._hideTimeout = setTimeout(this.toggle, this.getDelay('hide'));
    }
  }

  clearShowTimeout() {
    clearTimeout(this._showTimeout);
    this._showTimeout = undefined;
  }

  clearHideTimeout() {
    clearTimeout(this._hideTimeout);
    this._hideTimeout = undefined;
  }

  handleDocumentClick(e) {
    if (e.target !== this._target && !this._target.contains(e.target)) {
      if (this._hideTimeout) {
        this.clearHideTimeout();
      }

      if (this.props.isOpen) {
        this.toggle();
      }
    }
  }

  addTargetEvents() {
    document.addEventListener('click', this.handleDocumentClick, true);
  }

  removeTargetEvents() {
    document.removeEventListener('click', this.handleDocumentClick, true);
  }

  toggle(e) {
    if (this.props.disabled) {
      return e && e.preventDefault();
    }

    return this.props.toggle();
  }

  render() {
    if (!this.props.isOpen) {
      return null;
    }

    const attributes = omit(this.props, Object.keys(omitProps));
    const classes = mapToCssModules(classNames(
      'popover-inner',
      this.props.className
    ), this.props.cssModule);

    const popperClasses = mapToCssModules(classNames(
      'popover',
      'show'
    ), this.props.cssModule);

    return (
      <PopperContent
        className={popperClasses}
        target={this.props.target}
        isOpen={this.props.isOpen}
        placement={this.props.placement}
        placementPrefix={this.props.placementPrefix}
      >
        <div {...attributes} className={classes} />
      </PopperContent>
    );
  }
}

Popover.defaultProps = defaultProps;

export default Popover;