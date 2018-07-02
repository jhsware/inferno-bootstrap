import { Component } from 'inferno';
import classNames from 'classnames';
import PopperContent from './PopperContent';
import { getTarget, mapToCssModules, omit } from './utils';

const propsToOmit = [
  'placement',
  'target',
  'container',
  'isOpen',
  'disabled',
  'hideArrow',
  'className',
  'innerClassName',
  'cssModule',
  'toggle',
  'autohide',
  'placementPrefix',
  'delay',
  'modifiers'
];

const DEFAULT_DELAYS = {
  show: 0,
  hide: 250
};

const defaultProps = {
  isOpen: false,
  hideArrow: false,
  placement: 'top',
  placementPrefix: 'bs-tooltip',
  delay: DEFAULT_DELAYS,
  autohide: true,
  toggle: function () {}
};

class Tooltip extends Component {
  constructor(props) {
    super(props);

    this.addTargetEvents = this.addTargetEvents.bind(this);
    this.handleDocumentClick = this.handleDocumentClick.bind(this);
    this.removeTargetEvents = this.removeTargetEvents.bind(this);
    this.toggle = this.toggle.bind(this);
    this.onMouseOverTooltip = this.onMouseOverTooltip.bind(this);
    this.onMouseLeaveTooltip = this.onMouseLeaveTooltip.bind(this);
    this.onMouseOverTooltipContent = this.onMouseOverTooltipContent.bind(this);
    this.onMouseLeaveTooltipContent = this.onMouseLeaveTooltipContent.bind(this);
    this.show = this.show.bind(this);
    this.hide = this.hide.bind(this);
  }

  componentDidMount() {
    this._target = getTarget(this.props.target);
    this.addTargetEvents();
  }

  componentWillUnmount() {
    this.removeTargetEvents();
  }

  onMouseOverTooltip() {
    if (this._hideTimeout) {
      this.clearHideTimeout();
    }
    this._showTimeout = setTimeout(this.show, this.getDelay('show'));
  }

  onMouseLeaveTooltip() {
    if (this._showTimeout) {
      this.clearShowTimeout();
    }
    this._hideTimeout = setTimeout(this.hide, this.getDelay('hide'));
  }

  onMouseOverTooltipContent() {
    if (this.props.autohide) {
      return;
    }
    if (this._hideTimeout) {
      this.clearHideTimeout();
    }
  }

  onMouseLeaveTooltipContent() {
    if (this.props.autohide) {
      return;
    }
    if (this._showTimeout) {
      this.clearShowTimeout();
    }
    this._hideTimeout = setTimeout(this.hide, this.getDelay('hide'));
  }

  getDelay(key) {
    const { delay } = this.props;
    if (typeof delay === 'object') {
      return isNaN(delay[key]) ? DEFAULT_DELAYS[key] : delay[key];
    }
    return delay;
  }

  show() {
    if (!this.props.isOpen) {
      this.clearShowTimeout();
      this.toggle();
    }
  }

  hide() {
    if (this.props.isOpen) {
      this.clearHideTimeout();
      this.toggle();
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
    if (e.target === this._target || this._target.contains(e.target)) {
      if (this._hideTimeout) {
        this.clearHideTimeout();
      }

      if (!this.props.isOpen) {
        this.toggle();
      }
    }
  }

  addTargetEvents() {
    this._target.addEventListener('mouseover', this.onMouseOverTooltip, true);
    this._target.addEventListener('mouseout', this.onMouseLeaveTooltip, true);
    ['click', 'touchstart'].forEach(event =>
      document.addEventListener(event, this.handleDocumentClick, true)
    );
  }

  removeTargetEvents() {
    this._target.removeEventListener('mouseover', this.onMouseOverTooltip, true);
    this._target.removeEventListener('mouseout', this.onMouseLeaveTooltip, true);
    ['click', 'touchstart'].forEach(event =>
      document.removeEventListener(event, this.handleDocumentClick, true)
    );
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

    const attributes = omit(this.props, propsToOmit);
    const classes = mapToCssModules(classNames(
      'tooltip-inner',
      this.props.innerClassName
    ), this.props.cssModule);

    const popperClasses = mapToCssModules(classNames(
      'tooltip',
      'show',
      this.props.className
    ), this.props.cssModule);

    return (
      <PopperContent
        className={popperClasses}
        target={this.props.target}
        isOpen={this.props.isOpen}
        hideArrow={this.props.hideArrow}
        placement={this.props.placement}
        placementPrefix={this.props.placementPrefix}
        container={this.props.container}
        modifiers={this.props.modifiers}
      >
        <div
          {...attributes}
          className={classes}
          onMouseOver={this.onMouseOverTooltipContent}
          onMouseLeave={this.onMouseLeaveTooltipContent}
        />
      </PopperContent>
    );
  }
}

Tooltip.defaultProps = defaultProps;

export default Tooltip;