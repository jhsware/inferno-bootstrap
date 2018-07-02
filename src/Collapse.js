import { Component } from 'inferno';
import { createElement } from 'inferno-create-element'
import classNames from 'classnames';
import { mapToCssModules, omit } from './utils';
import { utils } from 'inferno-animation'
const {
  addClassName,
  removeClassName,
  registerTransitionListener,
  forceReflow,
  clearDimensions,
  getDimensions,
  setDimensions,
  setDisplay
} = utils

/**
 * These are the open and close animation helpers
 */
function _animateCollapseOnRemove (node, animCls, callback) {
  const clone = node.cloneNode(true)
  const { width, height } = getDimensions(node)

  setDimensions(clone, width, height)
  addClassName(clone, 'collapse show')
  setDisplay(node, 'none !important')
  node.parentNode.appendChild(clone)
  
  addClassName(clone, 'collapsing')

  registerTransitionListener(clone, function () {
    // *** Cleanup ***
    callback && callback(clone)
    clone.remove()
  })

  setTimeout(() => {
    removeClassName(clone, 'collapse show')
    clearDimensions(clone)
  }, 5)
}

function _animateCollapseOnAdd (node, animCls, callback) {
  const { width, height } = getDimensions(node)
  addClassName(node, 'collapse')
  forceReflow()

  addClassName(node, 'collapsing')
  setDisplay(node, 'block')
  
  registerTransitionListener([node, node.children[0]], function () {
    // *** Cleanup ***
    removeClassName(node, 'collapsing')
    clearDimensions(node)
    callback && callback(node)
  })

  //setTimeout(() => {
  setDimensions(node, width, height)
  addClassName(node, 'collapse show')
  removeClassName(node, 'collapse')
  //}, 5) 
}

function Animated (props) {
  const {
    tag: Tag,
    children,
    ...attrs
  } = props

  return createElement(
    Tag || 'div', 
    attrs, 
    children
  )
}

/**
 * This is the bootstrap code:
 */

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
    } = omit(this.props, ['isOpen', 'delay', 'onOpened', 'onClosed']);
  
    const classes = mapToCssModules(classNames(
      className, !this.state.active && 'InfernoAnimation-noAnim',
    ), cssModule);

    const prefix = this.props.animationClassNames
  
    // If hidden
    if (!this.props.isOpen) return null
    
    return (
      <Animated {...attributes} tag={Tag} className={classes} 
        onComponentDidMount={(dom) => _animateCollapseOnAdd(dom, this.props.onOpened)}
        onComponentWillUnmount={(dom) => _animateCollapseOnRemove(dom, this.props.onClosed)} />
    );
  }
}

Collapse.defaultProps = defaultProps;

export default Collapse;
