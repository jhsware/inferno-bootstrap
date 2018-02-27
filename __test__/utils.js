import { Component, render, createComponentVNode } from "inferno";
import { VNodeFlags } from 'inferno-vnode-flags';

export function hasClass(vNode, className) {
  return vNode.dom.classList.value.split(" ").indexOf(className) >= 0
}

export function getTagName(vNode) {
  return vNode.dom.tagName.toLowerCase()
}

export function getInnerHTML (vNode) {
  return vNode.dom.innerHTML
}

export function getOuterHTML (vNode) {
  return vNode.dom.outerHTML
}

export function getInstance(tree) {
  return tree.props.children.children
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

export function renderIntoDocument(input, container) {
  if (container === undefined) container = document.createElement('div');
  return render(createComponentVNode(VNodeFlags.ComponentClass, Wrapper, { children: input }), container);
}
