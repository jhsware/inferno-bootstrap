import { Component } from 'inferno';
import { createElement } from 'inferno-create-element';
import classNames from 'classnames';
import { mapToCssModules } from './utils';

const defaultProps = {
  color: 'secondary',
  tag: 'button',
};

class Button extends Component {
  constructor(props) {
    super(props);

    this.onClick = this.onClick.bind(this);
  }

  onClick(e) {
    if (this.props.disabled) {
      e.preventDefault();
      return;
    }

    if (this.props.onClick) {
      this.props.onClick(e);
    }
  }

  render() {
    let {
      active,
      block,
      children,
      className,
      cssModule,
      color, // primary | secondary | success | info | warning | danger | link
      outline,
      size,
      tag: Tag,
      innerRef,
      ...attributes
    } = this.props;

    const classes = mapToCssModules(classNames(
      className,
      'btn',
      `btn${outline ? '-outline' : ''}-${color}`,
      size ? `btn-${size}` : false,
      block ? 'btn-block' : false,
      { active, disabled: this.props.disabled }
    ), cssModule);

    if (attributes.href && Tag === 'button') {
      Tag = 'a';
    }

    Object.assign(attributes, {
      className: classes,
      type: (Tag === 'button' && attributes.onClick) ? 'button' : undefined,
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

Button.defaultProps = defaultProps;

export default Button;
