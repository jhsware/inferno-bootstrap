/* eslint react/no-find-dom-node: 0 */
// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-find-dom-node.md

import Component from 'inferno-component'
import classNames from 'classnames';
import { mapToCssModules, omit } from './utils';
import { isNullOrUndef, isUndefined, isArray } from 'inferno-shared';
import { Manager } from 'inferno-popper';

const defaultProps = {
  isOpen: false,
  dropup: false,
  nav: false,
  addonType: false,
  inNavbar: false
};

class Dropdown extends Component {
  constructor(props) {
    super(props);

    this.addEvents = this.addEvents.bind(this);
    this.handleDocumentClick = this.handleDocumentClick.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.removeEvents = this.removeEvents.bind(this);
    this.toggle = this.toggle.bind(this);
  }

  getChildContext() {
    return {
      toggle: this.props.toggle,
      isOpen: this.props.isOpen,
      dropup: this.props.dropup,
      inNavbar: this.props.inNavbar
    };
  }

  componentDidMount() {
    this.handleProps();
  }

  componentDidUpdate(prevProps) {
    if (this.props.isOpen !== prevProps.isOpen) {
      this.handleProps();
    }
  }

  componentWillUnmount() {
    this.removeEvents();
  }

  getContainer() {
    return this.$V.dom;
  }

  addEvents() {
    ['click', 'touchstart', 'keyup'].forEach(event =>
      document.addEventListener(event, this.handleDocumentClick, true)
    );
  }

  removeEvents() {
    ['click', 'touchstart', 'keyup'].forEach(event =>
      document.removeEventListener(event, this.handleDocumentClick, true)
    );
  }

  handleDocumentClick(e) {
    if (e && (e.which === 3 || (e.type === 'keyup' && e.which !== keyCodes.tab))) return;
    const container = this.getContainer();

    if (container.contains(e.target) && container !== e.target && (e.type !== 'keyup' || e.which === keyCodes.tab)) {
      return;
    }

    this.toggle(e);
  }

  handleKeyDown(e) {
    if ([keyCodes.esc, keyCodes.up, keyCodes.down, keyCodes.space].indexOf(e.which) === -1 ||
      (/button/i.test(e.target.tagName) && e.which === keyCodes.space) || /input|textarea/i.test(e.target.tagName)) {
      return;
    }

    e.preventDefault();
    if (this.props.disabled) return;

    const container = this.getContainer();

    if (e.which === keyCodes.space && this.props.isOpen && container !== e.target) {
      e.target.click();
    }

    if (e.which === keyCodes.esc || !this.props.isOpen) {
      this.toggle(e);
      container.querySelector('[aria-expanded]').focus();
      return;
    }

    const menuClass = mapToCssModules('dropdown-menu', this.props.cssModule);
    const itemClass = mapToCssModules('dropdown-item', this.props.cssModule);
    const disabledClass = mapToCssModules('disabled', this.props.cssModule);

    const items = container.querySelectorAll(`.${menuClass} .${itemClass}:not(.${disabledClass})`);

    if (!items.length) return;

    let index = -1;
    for (let i = 0; i < items.length; i += 1) {
      if (items[i] === e.target) {
        index = i;
        break;
      }
    }

    if (e.which === keyCodes.up && index > 0) {
      index -= 1;
    }

    if (e.which === keyCodes.down && index < items.length - 1) {
      index += 1;
    }

    if (index < 0) {
      index = 0;
    }

    items[index].focus();
  }

  handleProps() {
    if (this.props.isOpen) {
      this.addEvents();
    } else {
      this.removeEvents();
    }
  }

  toggle(e) {
    if (this.props.disabled) {
      return e && e.preventDefault();
    }

    return this.props.toggle(e);
  }

  render() {
    const {
      className,
      cssModule,
      dropup,
      isOpen,
      group,
      size,
      nav,
      addonType,
      ...attrs
    } = omit(this.props, ['toggle', 'disabled', 'inNavbar']);

    attrs.tag = attrs.tag || (nav ? 'li' : 'div');

    const classes = mapToCssModules(classNames(
      className,
      {
        [`input-group-${addonType}`]: addonType,
        'btn-group': group,
        [`btn-group-${size}`]: !!size,
        dropdown: !group && !addonType,
        show: isOpen,
        dropup: dropup,
        'nav-item': nav
      }
    ), cssModule);
    return <Manager {...attrs} className={classes} onKeyDown={this.handleKeyDown} />;
  }
}

Dropdown.defaultProps = defaultProps;

export default Dropdown;