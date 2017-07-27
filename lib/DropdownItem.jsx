import Component from 'inferno-component';
import classNames from 'classnames';
import { mapToCssModules, omit } from './utils';

const defaultProps = {
  el: 'button',
  toggle: true
};

class DropdownItem extends Component {
  constructor(props) {
    super(props);

    this.onClick = this.onClick.bind(this);
    this.getTabIndex = this.getTabIndex.bind(this);
  }

  onClick(e) {
    if (this.props.disabled || this.props.header || this.props.divider) {
      e.preventDefault();
      return;
    }

    if (this.props.onClick) {
      this.props.onClick(e);
    }

    if (this.props.toggle) {
      this.context.toggle();
    }
  }

  getTabIndex() {
    if (this.props.disabled || this.props.header || this.props.divider) {
      return '-1';
    }

    return '0';
  }

  render() {
    const tabIndex = this.getTabIndex();
    let {
      className,
      cssModule,
      divider,
      el: El,
      header,
      active,
      ...props } = omit(this.props, ['toggle']);

    const classes = mapToCssModules(classNames(
      className,
      {
        disabled: props.disabled,
        'dropdown-item': !divider && !header,
        active: active,
        'dropdown-header': header,
        'dropdown-divider': divider
      }
    ), cssModule);

    if (El === 'button') {
      if (header) {
        El = 'h6';
      } else if (divider) {
        El = 'div';
      } else if (props.href) {
        El = 'a';
      }
    }

    return (
      <El
        type={(El === 'button' && (props.onClick || this.props.toggle)) ? 'button' : undefined}
        {...props}
        tabIndex={tabIndex}
        className={classes}
        onClick={this.onClick}
      />
    );
  }
}

DropdownItem.defaultProps = defaultProps;

export default DropdownItem;
