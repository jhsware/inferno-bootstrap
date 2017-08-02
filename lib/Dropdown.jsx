/* eslint react/no-find-dom-node: 0 */
// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-find-dom-node.md

import Component from 'inferno-component'
import classNames from 'classnames';
import { mapToCssModules, omit } from './utils';
import { isNullOrUndef, isUndefined, isArray } from 'inferno-shared';

import TetherContent from './TetherContent.jsx';
import DropdownMenu from './DropdownMenu.jsx';

/* REACT COMPAT */
// TODO: Rewrite implementation for Inferno
const ARR = [];

const Children = {
  map(children, fn, ctx) {
      if (isNullOrUndef(children)) {
          return children;
      }
      children = Children.toArray(children);
      if (ctx && ctx !== children) {
          fn = fn.bind(ctx);
      }
      return children.map(fn);
  },
  /*
  forEach(children, fn, ctx) {
      if (isNullOrUndef(children)) {
          return;
      }
      children = Children.toArray(children);
      if (ctx && ctx !== children) {
          fn = fn.bind(ctx);
      }
      for (let i = 0, len = children.length; i < len; i++) {
          fn(children[i], i, children);
      }
  },
  count(children) {
      children = Children.toArray(children);
      return children.length;
  },
  only(children) {
      children = Children.toArray(children);
      if (children.length !== 1) {
          throw new Error('Children.only() expects only one child.');
      }
      return children[0];
  },
  */
  toArray(children) {
      if (isNullOrUndef(children)) {
          return [];
      }
      return isArray(children) ? children : ARR.concat(children);
  }
};

/* /REACT COMPAT */

const defaultProps = {
  isOpen: false,
  tag: 'div'
};

const defaultTetherConfig = {
  classPrefix: 'bs-tether',
  classes: { element: 'dropdown', enabled: 'show' },
  constraints: [
    { to: 'scrollParent', attachment: 'together none' },
    { to: 'window', attachment: 'together none' }
  ]
};

class Dropdown extends Component {
  constructor(props) {
    super(props);

    this.addEvents = this.addEvents.bind(this);
    this.getTetherConfig = this.getTetherConfig.bind(this);
    this.handleDocumentClick = this.handleDocumentClick.bind(this);
    this.removeEvents = this.removeEvents.bind(this);
    this.toggle = this.toggle.bind(this);
  }

  getChildContext() {
    return {
      toggle: this.props.toggle,
      isOpen: this.props.isOpen
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

  getTetherTarget() {
    const container = this._vNode.dom;

    return container.querySelector('[data-toggle="dropdown"]');
  }

  getTetherConfig(childProps) {
    const target = () => this.getTetherTarget();
    let vElementAttach = 'top';
    let hElementAttach = 'left';
    let vTargetAttach = 'bottom';
    let hTargetAttach = 'left';

    if (childProps.right) {
      hElementAttach = 'right';
      hTargetAttach = 'right';
    }

    if (this.props.dropup) {
      vElementAttach = 'bottom';
      vTargetAttach = 'top';
    }

    return {
      ...defaultTetherConfig,
      attachment: vElementAttach + ' ' + hElementAttach,
      targetAttachment: vTargetAttach + ' ' + hTargetAttach,
      target,
      ...this.props.tether
    };
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
    if (this.props.tether) {
      return;
    }

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

    return this.props.toggle();
  }

  renderChildren() {
    const { tether, children, ...attrs } = this.props;
    attrs.toggle = this.toggle;

    return Children.map(Children.toArray(children), (child) => {
      if (tether && child.type === DropdownMenu) {
        let tetherConfig = this.getTetherConfig(child.props);
        return (
          <TetherContent {...attrs} tether={tetherConfig}>{child}</TetherContent>
        );
      }

      return child;
    });
  }

  render() {
    const {
      className,
      cssModule,
      dropup,
      group,
      size,
      tag: Tag,
      isOpen,
      ...attributes
    } = omit(this.props, ['toggle', 'tether']);

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

    return (
      <Tag
        {...attributes}
        className={classes}
      >
        {this.renderChildren()}
      </Tag>
    );
  }
}

Dropdown.defaultProps = defaultProps;

export default Dropdown;
