import { cloneVNode } from "inferno";
import Component from 'inferno-component';
import ReactDOM from 'react-dom';
import isFunction from 'lodash.isfunction';
import Tether from 'reactstrap-tether';
import {
  unmountComponentAtNode,
  unstable_renderSubtreeIntoContainer,
  WrapperComponent
} from './compat.js'

const defaultProps = {
  isOpen: false,
  tetherRef: function () {}
};

class TetherContent extends Component {
  constructor(props) {
    super(props);

    this.handleDocumentClick = this.handleDocumentClick.bind(this);
    this.toggle = this.toggle.bind(this);
  }

  componentDidMount() {
    this.handleProps();
  }

  componentDidUpdate(prevProps) {
    if (this.props.isOpen !== prevProps.isOpen) {
      this.handleProps();
    } else if (this._element) {
      // rerender
      this.renderIntoSubtree();
    }
  }

  componentWillUnmount() {
    this.hide();
  }

  getTarget() {
    const target = this.props.tether.target;

    if (isFunction(target)) {
      return target();
    }

    return target;
  }

  getTetherConfig() {
    const config = {
      ...this.props.tether
    };

    config.element = this._element;
    config.target = this.getTarget();
    return config;
  }

  handleDocumentClick(e) {
    const container = this._element;
    if (e.target === container || !container.contains(e.target)) {
      this.toggle();
    }
  }

  handleProps() {
    if (this.props.isOpen) {
      this.show();
    } else {
      this.hide();
    }
  }

  hide() {
    document.removeEventListener('click', this.handleDocumentClick, true);

    if (this._element) {
      document.body.removeChild(this._element);
      unmountComponentAtNode(this._element);
      this._element = null;
    }

    if (this._tether) {
      this._tether.destroy();
      this._tether = null;
      this.props.tetherRef(this._tether);
    }
  }

  show() {
    document.addEventListener('click', this.handleDocumentClick, true);

    this._element = document.createElement('div');
    this._element.className = this.props.className;
    document.body.appendChild(this._element);
    this.renderIntoSubtree();
    this._tether = new Tether(this.getTetherConfig());
    this.props.tetherRef(this._tether);
    this._tether.position();
    this._element.childNodes[0].focus();
  }

  toggle(e) {
    if (this.props.disabled) {
      return e && e.preventDefault();
    }

    return this.props.toggle();
  }

  renderIntoSubtree() {
    unstable_renderSubtreeIntoContainer(
      this,
      this.renderChildren(),
      this._element
    );
  }

  renderChildren() {
    const { children, style } = this.props;
    // Was: return React.cloneElement( ?> const cloneElement = injectStringRefs(cloneVNode);
    return cloneVNode(children,
      { style }
    );
  }

  render() {
    return null;
  }
}

TetherContent.defaultProps = defaultProps;

export default TetherContent;
