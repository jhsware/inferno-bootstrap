import {
  render
} from "inferno";

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