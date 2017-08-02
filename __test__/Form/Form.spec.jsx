import { render } from "inferno"
import { 
  renderIntoDocument,
  findRenderedVNodeWithType,
  findRenderedDOMElementWithClass,
  isVNode,
  isVNodeOfType
} from 'inferno-test-utils'

import { hasClass, getTagName, getInnerHTML } from "../utils"

import Form from "../../lib/Form/Form.jsx"

describe('Form', () => {
  it('should render with "form" tag', () => {
    const tree = renderIntoDocument(<Form>Yo!</Form>)

    expect(getTagName(tree._vNode)).toBe('form')
  })

  it('should render children', () => {
    const tree = renderIntoDocument(<Form>Yo!</Form>)

    expect(tree._vNode.dom.innerHTML).toBe('Yo!')
  })

  it('should render additional classes', () => {
    const tree = renderIntoDocument(<Form className="other">Yo!</Form>)

    expect(hasClass(tree._vNode, 'other')).toBe(true)
  })

  it('should render custom tag', () => {
    const tree = renderIntoDocument(<Form tag="main">Yo!</Form>)

    expect(getTagName(tree._vNode)).toBe('main')
  })
})
