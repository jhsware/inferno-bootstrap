import { Component } from 'inferno';
import { createElement } from 'inferno-create-element';
import classNames from 'classnames';
import { mapToCssModules } from '../utils';

const defaultProps = {
  tag: 'a',
};

class NavLink extends Component {
  constructor(props) {
    super(props);

    this.onClick = this.onClick.bind(this);
  }

  onClick(e) {
    if (this.props.disabled) {
      e.preventDefault();
      return;
    }

    if (this.props.href === '#') {
      e.preventDefault();
    }

    if (this.props.onClick) {
      this.props.onClick(e);
    }
  }

  render() {
    let {
      children,
      className,
      cssModule,
      active,
      tag: Tag,
      innerRef,
      ...attributes
    } = this.props;

    const classes = mapToCssModules(classNames(
      className,
      'nav-link',
      {
        disabled: attributes.disabled,
        active: active
      }
    ), cssModule);

    Object.assign(attributes, {
      className: classes,
      ref: innerRef,
      onClick: this.onClick
    })

    return createElement(
      Tag,
      attributes, 
      children
    )
  }
}

NavLink.defaultProps = defaultProps;

export default NavLink;
