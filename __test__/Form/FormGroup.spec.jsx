import { render } from "inferno"
import { renderIntoElement } from '../utils'
import { 
  findRenderedVNodeWithType,
  findRenderedDOMElementWithClass,
  isVNode,
  isVNodeOfType
} from 'inferno-test-utils'

import { hasClass, getTagName, getInnerHTML } from "../utils"

import FormGroup from "../../lib/Form/FormGroup"

describe('FormGroup', () => {
  it('should render with "div" tag by default', () => {
    const DOM = renderIntoElement(<FormGroup>Yo!</FormGroup>)

    expect(getTagName(DOM)).toBe('div')
  })

  it('should render children', () => {
    const DOM = renderIntoElement(<FormGroup>Yo!</FormGroup>)

    expect(DOM.innerHTML).toBe('Yo!')
  })

  it('should render with "form-group" class by default', () => {
    const DOM = renderIntoElement(<FormGroup>Yo!</FormGroup>)

    expect(hasClass(DOM, 'form-group')).toBe(true)
  })

  it('should not render with "form-check" class by default', () => {
    const DOM = renderIntoElement(<FormGroup>Yo!</FormGroup>)

    expect(hasClass(DOM, 'form-check')).toBe(false)
  })

  it('should render with "form-check" class when check prop is truthy', () => {
    const DOM = renderIntoElement(<FormGroup check>Yo!</FormGroup>)

    expect(hasClass(DOM, 'form-check')).toBe(true)
    
  })

  it('should not render with "form-group" class when check prop is truthy', () => {
    const DOM = renderIntoElement(<FormGroup check>Yo!</FormGroup>)

    expect(hasClass(DOM, 'form-group')).toBe(false)
  })

  it('should not render with "disabled" class when disabled prop is truthy but check is not', () => {
    const DOM = renderIntoElement(<FormGroup disabled>Yo!</FormGroup>)

    expect(hasClass(DOM, 'disabled')).toBe(false)
  })

  it('should render with "disabled" class when both check disabled props are truthy', () => {
    const DOM = renderIntoElement(<FormGroup check disabled>Yo!</FormGroup>)

    expect(hasClass(DOM, 'disabled')).toBe(true)
    expect(hasClass(DOM, 'form-check')).toBe(true)
  })

  it('should render with "row" class when row prop is truthy', () => {
    const DOM = renderIntoElement(<FormGroup row>Yo!</FormGroup>)

    expect(hasClass(DOM, 'row')).toBe(true)
  })

  it('should not render with "row" class when row prop is not truthy', () => {
    const DOM = renderIntoElement(<FormGroup>Yo!</FormGroup>)

    expect(hasClass(DOM, 'row')).toBe(false)
  })

  it('should render additional classes', () => {
    const DOM = renderIntoElement(<FormGroup className="other">Yo!</FormGroup>)

    expect(hasClass(DOM, 'other')).toBe(true)
  })

  it('should render custom element', () => {
    const DOM = renderIntoElement(<FormGroup tag="main">Yo!</FormGroup>)

    expect(getTagName(DOM)).toBe('main')
  })
})
