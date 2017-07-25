import Inferno from 'inferno';
import Component from 'inferno-component';
import classNames from 'classnames';
import { mapToCssModules } from './utils';

const defaultProps = {
  color: 'secondary',
  el: 'button',
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
      className,
      cssModule,
      color, // primary | secondary | success | info | warning | danger | link
      outline,
      size,
      el: El,
      getRef,
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

    if (attributes.href && El === 'button') {
      El = 'a';
    }

    return (
      <El
        type={(El === 'button' && attributes.onClick) ? 'button' : undefined}
        {...attributes}
        className={classes}
        ref={getRef}
        onClick={this.onClick}
      />
    );
  }
}

Button.defaultProps = defaultProps;

export default Button;
