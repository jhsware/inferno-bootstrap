import { cloneVNode } from 'inferno';
import { createElement } from 'inferno-create-element'

import {
  addClassName,
  removeClassName,
  registerTransitionListener,
  forceReflow,
  clearDimensions,
  getDimensions,
  setDimensions,
  setDisplay,
  doAnimate  } from 'inferno-animation/dist/utils'

/**
 * These are the open and close animation helpers
 */
export function animateModalOnRemove (node, callback) {
  const clone = node.cloneNode(true)
  setDisplay(node, 'none !important')
  node.insertAdjacentElement('beforebegin', clone)
  
  registerTransitionListener(clone, function () {
    // *** Cleanup ***
    callback && callback(clone)
    clone.remove()
  })

  setTimeout(() => {
    removeClassName(clone, 'show')
  }, 5)
}


export function animateModalOnAdd (node, callback) {
  setDisplay(node, 'none')
  addClassName(node, 'fade')
  forceReflow(node)
  setDisplay(node, 'block')

  registerTransitionListener([node, node.children[0]], function () {
    // *** Cleanup ***
    callback && callback(node)
  })
  
  addClassName(node, 'show')
}

export function Animated (props) {
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