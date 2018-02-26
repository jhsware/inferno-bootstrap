import { Component } from 'inferno';
import classNames from 'classnames';
import { Animated } from 'inferno-animation'
import { mapToCssModules, omit } from './utils';

const defaultProps = {
  isOpen: false,
  tag: 'div',
  onOpened: () => {},
  onClosed: () => {},
};

class Collapse extends Component {
  constructor(props) {
    super(props)

    this.state = {
      active: false
    }
  }

  componentDidMount() {
    this.setState({
      active: true
    })
  }

  render() {
    const {
      className,
      cssModule,
      tag: Tag,
      ...attributes
    } = omit(this.props, ['isOpen', 'delay', 'onOpened', 'onClosed', 'animationPrefix']);
  
    const classes = mapToCssModules(classNames(
      className, !this.state.active && 'InfernoAnimation-noAnim',
    ), cssModule);

    const prefix = this.props.animationPrefix || "CollapseAnimation"
  
    // If hidden
    if (!this.props.isOpen) return null
    
    return (
      <Animated el={Tag} prefix={prefix}
        {...attributes}
        className={classes}  
        onDidEnter={this.props.onOpened}
        onDidLeave={this.props.onClosed} />
    );
  }
}

Collapse.defaultProps = defaultProps;
export default Collapse;
