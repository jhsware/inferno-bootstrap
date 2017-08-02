import Inferno from 'inferno';
import Component from 'inferno-component';
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
      className,
      cssModule,
      color, // primary | secondary | success | info | warning | danger | link
      outline,
      size,
      tag: Tag,
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

    if (attributes.href && Tag === 'button') {
      Tag = 'a';
    }

    return (
      <Tag
        type={(Tag === 'button' && attributes.onClick) ? 'button' : undefined}
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
