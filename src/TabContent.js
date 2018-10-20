import { Component } from 'inferno';
import { createElement } from 'inferno-create-element';
import { findDOMNode } from 'inferno-extras'
import classNames from 'classnames';
import { mapToCssModules, omit } from './utils';

const defaultProps = {
  tag: 'div',
};

const omitProps = ['tag', 'activeTab', 'className', 'cssModule'];

function getContentSize() {
  const domEl = findDOMNode(this)
  return {
    width: domEl.offsetWidth + 'px',
    height: domEl.offsetHeight + 'px'
  }
}

// This could probably be generalised in inferno-animation as part of animateOnAdd
function animateCrossFadeIn(component, currSize, animationName, callback) {
  const domEl = findDOMNode(component)

  const height = domEl.offsetHeight + 'px'
  const width = domEl.offsetWidth + 'px'

  domEl.style.height = currSize.height
  domEl.style.width = currSize.width

  domEl.classList.add(animationName + '-enter')
  // Trigger reflow
  const tmp = domEl.offsetHeight
  
  
  // 2. Set an animation listener, code at end
  var done = false
  var nrofTransitionsLeft
  const onTransitionEnd = (event) => {
    // Make sure it isn't a child that is triggering the event
    if (event && event.target !== domEl) {
      return
    }
    if (event !== undefined && nrofTransitionsLeft > 0) {
      nrofTransitionsLeft--
      return
    }
    if (done) return
    done = true

    // Clear style stuff
    domEl.style.height = domEl.style.width = ''
    domEl.classList.remove('InfernoAnimation-active')
    domEl.classList.remove(animationName + '-enter-active')
    domEl.classList.remove(animationName + '-enter-end')

    // 5. Call callback to allow stuff to happen
    callback && callback(domEl)
  }

  domEl.addEventListener("transitionend", onTransitionEnd, false)
  
  // 3. Activate transitions
  domEl.classList.add(animationName + '-enter-active')
  // The following is needed so we can prevent nested animations from playing slower
  // than parent animation causing a jump (in for example a cross-fade)
  domEl.classList.add('InfernoAnimation-active')
  
  const cs = window.getComputedStyle(domEl)
  const dur = cs.getPropertyValue('transition-duration').split(',')
  const del = cs.getPropertyValue('transition-delay').split(',')
  const animTimeout = dur.map((v, index) => parseFloat(v) + parseFloat(del[index])).reduce((prev, curr) => prev > curr ? prev : curr, 0)
  nrofTransitionsLeft = dur.length - 1
  setTimeout(onTransitionEnd, Math.round(animTimeout * 1000) + 50) // Fallback if transitionend fails

  setTimeout(() => {
    domEl.style.height = height
    domEl.style.width = width
    domEl.classList.remove(animationName + '-enter')
    domEl.classList.add(animationName + '-enter-end')
  }, 5)

}

export default class TabContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: this.props.activeTab
    };
  }
  getChildContext() {
    return {
      activeTabId: this.state
    };
  }
  componentWillReceiveProps(nextProps) {
    if (this.state.activeTab !== nextProps.activeTab) {
      const sourceSize = getContentSize.call(this)
      this.setState({
        activeTab: nextProps.activeTab,
      });
      if (nextProps.fade) {
        requestAnimationFrame(() => {
          animateCrossFadeIn(this, sourceSize, 'FadeIn')
        })
      }
    }
  }
  render() {
    const {
      children,
      className,
      cssModule,
      tag: Tag,
    } = this.props;

    const attributes = omit(this.props, omitProps);

    const classes = mapToCssModules(classNames('tab-content', className), cssModule);

    Object.assign(attributes, { className: classes })

    return createElement(
      Tag,
      attributes, 
      children
    )
  }
}
TabContent.defaultProps = defaultProps;
