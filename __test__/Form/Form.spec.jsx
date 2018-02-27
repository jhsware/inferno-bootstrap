import { render } from "inferno"
import { renderIntoDocument } from '../utils'
import { 
  findRenderedVNodeWithType,
  findRenderedDOMElementWithClass,
  isVNode,
  isVNodeOfType
} from 'inferno-test-utils'

import { hasClass, getTagName, getInnerHTML } from "../utils"

import Form from "../../dist/Form/Form"

describe('Form', () => {
  it('should render with "form" tag', () => {
    const tree = renderIntoDocument(<Form>Yo!</Form>)

    expect(getTagName(tree.$V)).toBe('form')
  })

  it('should render children', () => {
    const tree = renderIntoDocument(<Form>Yo!</Form>)

    expect(tree.$V.dom.innerHTML).toBe('Yo!')
  })

  it('should render additional classes', () => {
    const tree = renderIntoDocument(<Form className="other">Yo!</Form>)

    expect(hasClass(tree.$V, 'other')).toBe(true)
  })

  it('should render custom tag', () => {
    const tree = renderIntoDocument(<Form tag="main">Yo!</Form>)

    expect(getTagName(tree.$V)).toBe('main')
  })
})
