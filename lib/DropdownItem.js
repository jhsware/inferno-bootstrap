import Component from 'inferno-component';
import classNames from 'classnames';
import { mapToCssModules, omit } from './utils';

const defaultProps = {
  tag: 'button',
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
      tag: Tag,
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

    if (Tag === 'button') {
      if (header) {
        Tag = 'h6';
      } else if (divider) {
        Tag = 'div';
      } else if (props.href) {
        Tag = 'a';
      }
    }

    return (
      <Tag
        type={(Tag === 'button' && (props.onClick || this.props.toggle)) ? 'button' : undefined}
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
