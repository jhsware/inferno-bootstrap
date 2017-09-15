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
  tag: 'div',
};

class Dropdown extends Component {
  constructor(props) {
    super(props);

    this.addEvents = this.addEvents.bind(this);
    this.handleDocumentClick = this.handleDocumentClick.bind(this);
    this.removeEvents = this.removeEvents.bind(this);
    this.toggle = this.toggle.bind(this);
  }

  getChildContext() {
    return {
      toggle: this.props.toggle,
      isOpen: this.props.isOpen,
      dropup: this.props.dropup,
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

  addEvents() {
    document.addEventListener('click', this.handleDocumentClick, true);
  }

  removeEvents() {
    document.removeEventListener('click', this.handleDocumentClick, true);
  }

  handleDocumentClick(e) {
    const container = this._vNode.dom;

    if (container.contains(e.target) && container !== e.target) {
      return;
    }

    this.toggle();
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
      ...attrs
    } = omit(this.props, ['toggle', 'disabled']);

    const classes = mapToCssModules(classNames(
      className,
      {
        'btn-group': group,
        [`btn-group-${size}`]: !!size,
        dropdown: !group,
        show: isOpen,
        dropup: dropup
      }
    ), cssModule);
    return <Manager {...attrs} className={classes}>{}</Manager>;
  }
}

Dropdown.defaultProps = defaultProps;

export default Dropdown;