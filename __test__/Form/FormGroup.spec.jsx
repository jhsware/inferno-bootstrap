import { render } from "inferno"
import { 
  renderIntoDocument,
  findRenderedVNodeWithType,
  findRenderedDOMElementWithClass,
  isVNode,
  isVNodeOfType
} from 'inferno-test-utils'

import { hasClass, getTagName, getInnerHTML } from "../utils"

import FormGroup from "../../lib/Form/FormGroup.jsx"

describe('FormGroup', () => {
  it('should render with "div" tag by default', () => {
    const tree = renderIntoDocument(<FormGroup>Yo!</FormGroup>)

    expect(getTagName(tree._vNode)).toBe('div')
  })

  it('should render children', () => {
    const tree = renderIntoDocument(<FormGroup>Yo!</FormGroup>)

    expect(tree._vNode.dom.innerHTML).toBe('Yo!')
  })

  it('should render with "form-group" class by default', () => {
    const tree = renderIntoDocument(<FormGroup>Yo!</FormGroup>)

    expect(hasClass(tree._vNode, 'form-group')).toBe(true)
  })

  it('should not render with "form-check" class by default', () => {
    const tree = renderIntoDocument(<FormGroup>Yo!</FormGroup>)

    expect(hasClass(tree._vNode, 'form-check')).toBe(false)
  })

  it('should render with "form-check" class when check prop is truthy', () => {
    const tree = renderIntoDocument(<FormGroup check>Yo!</FormGroup>)

    expect(hasClass(tree._vNode, 'form-check')).toBe(true)
    
  })

  it('should not render with "form-group" class when check prop is truthy', () => {
    const tree = renderIntoDocument(<FormGroup check>Yo!</FormGroup>)

    expect(hasClass(tree._vNode, 'form-group')).toBe(false)
  })

  it('should not render with "disabled" class when disabled prop is truthy but check is not', () => {
    const tree = renderIntoDocument(<FormGroup disabled>Yo!</FormGroup>)

    expect(hasClass(tree._vNode, 'disabled')).toBe(false)
  })

  it('should render with "disabled" class when both check disabled props are truthy', () => {
    const tree = renderIntoDocument(<FormGroup check disabled>Yo!</FormGroup>)

    expect(hasClass(tree._vNode, 'disabled')).toBe(true)
    expect(hasClass(tree._vNode, 'form-check')).toBe(true)
  })

  it('should render with "row" class when row prop is truthy', () => {
    const tree = renderIntoDocument(<FormGroup row>Yo!</FormGroup>)

    expect(hasClass(tree._vNode, 'row')).toBe(true)
  })

  it('should not render with "row" class when row prop is not truthy', () => {
    const tree = renderIntoDocument(<FormGroup>Yo!</FormGroup>)

    expect(hasClass(tree._vNode, 'row')).toBe(false)
  })

  it('should render with "has-${color}" class when color prop is provided', () => {
    const tree = renderIntoDocument(<FormGroup color="yoyo">Yo!</FormGroup>)

    expect(hasClass(tree._vNode, 'has-yoyo')).toBe(true)
  })

  it('should render additional classes', () => {
    const tree = renderIntoDocument(<FormGroup className="other">Yo!</FormGroup>)

    expect(hasClass(tree._vNode, 'other')).toBe(true)
  })

  it('should render custom element', () => {
    const tree = renderIntoDocument(<FormGroup el="main">Yo!</FormGroup>)

    expect(getTagName(tree._vNode)).toBe('main')
  })
})
