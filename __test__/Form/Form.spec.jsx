import { render } from "inferno"
import { renderIntoElement } from '../utils'
import { 
  findRenderedVNodeWithType,
  findRenderedDOMElementWithClass,
  isVNode,
  isVNodeOfType
} from 'inferno-test-utils'

import { hasClass, getTagName, getInnerHTML } from "../utils"

import Form from "../../lib/Form/Form"

describe('Form', () => {
  it('should render with "form" tag', () => {
    const DOM = renderIntoElement(<Form>Yo!</Form>)

    expect(getTagName(DOM)).toBe('form')
  })

  it('should render children', () => {
    const DOM = renderIntoElement(<Form>Yo!</Form>)

    expect(DOM.innerHTML).toBe('Yo!')
  })

  it('should render additional classes', () => {
    const DOM = renderIntoElement(<Form className="other">Yo!</Form>)

    expect(hasClass(DOM, 'other')).toBe(true)
  })

  it('should render custom tag', () => {
    const DOM = renderIntoElement(<Form tag="main">Yo!</Form>)

    expect(getTagName(DOM)).toBe('main')
  })
})
