import { Component, render, createComponentVNode } from "inferno";
import { VNodeFlags } from 'inferno-vnode-flags';

export function hasClass(DOM, className) {
  return DOM.classList.value.split(" ").indexOf(className) >= 0
}

export function getTagName(DOM) {
  return DOM.tagName.toLowerCase()
}

export function unmountComponentAtNode(container) {
  render(null, container);
  return true;
}

export function getAnimationFramePolyfill () {
  if (window.requestAnimationFrame) return
    
  var lastTime = 0;
  var vendors = ['ms', 'moz', 'webkit', 'o'];
  for(var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
      window.requestAnimationFrame = window[vendors[x]+'RequestAnimationFrame'];
      window.cancelAnimationFrame = window[vendors[x]+'CancelAnimationFrame'] 
                                 || window[vendors[x]+'CancelRequestAnimationFrame'];
  }

  if (!window.requestAnimationFrame)
      window.requestAnimationFrame = function(callback, element) {
          var currTime = new Date().getTime();
          var timeToCall = Math.max(0, 16 - (currTime - lastTime));
          var id = window.setTimeout(function() { callback(currTime + timeToCall); }, 
            timeToCall);
          lastTime = currTime + timeToCall;
          return id;
      };

  if (!window.cancelAnimationFrame)
      window.cancelAnimationFrame = function(id) {
          clearTimeout(id);
      };
}

export class Wrapper extends Component {
  render() {
    return this.props.children;
  }
}

export function renderIntoElement(vNodeTree, DOM) {
  const fallbackDOM = document.createElement('div');
  render(vNodeTree, DOM || fallbackDOM);
  return DOM || fallbackDOM.firstChild
}
  
export function triggerEvent(name, element) {
  let eventType;

  if (name === 'click' || name === 'dblclick' || name === 'mousedown' || name === 'mouseup') {
    eventType = 'MouseEvents';
  } else if (name === 'focus' || name === 'change' || name === 'blur' || name === 'input' || name === 'select') {
    eventType = 'HTMLEvents';
  } else {
    throw new Error('Unsupported `"' + name + '"`event');
  }
  const event = document.createEvent(eventType);
  if (eventType === 'MouseEvents') {
    // Simulate left click always
    Object.defineProperty(event, 'button', {
      value: 0
    });
  }
  event.initEvent(name, name !== 'change', true);
  element.dispatchEvent(event, true);
}

export function setProps (vNode, newPropDiff) {
  Object.keys(newPropDiff).forEach((key) => {
    vNode.props[key] = newPropDiff[key];
  })
  vNode.forceUpdate();
}