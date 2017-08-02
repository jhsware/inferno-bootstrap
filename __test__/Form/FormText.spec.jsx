import { render } from "inferno"
import { 
  renderIntoDocument,
  findRenderedVNodeWithType,
  findRenderedDOMElementWithClass,
  isVNode,
  isVNodeOfType
} from 'inferno-test-utils'

import { hasClass, getTagName, getInnerHTML } from "../utils"

import FormText from "../../lib/Form/FormText.jsx"

describe('FormText', () => {
  it('should render with "small" el', () => {
    const tree = renderIntoDocument(<FormText>Yo!</FormText>)

    expect(getTagName(tree._vNode)).toBe('small')
  })

  it('should render children', () => {
    const tree = renderIntoDocument(<FormText>Yo!</FormText>)

    expect(tree._vNode.dom.innerHTML).toBe('Yo!')
  })

  it('should render with "form-text" class when not inline', () => {
    const tree = renderIntoDocument(<FormText>Yo!</FormText>)

    expect(hasClass(tree._vNode, 'form-text')).toBe(true)
  })

  it('should render with "text-${color}" class when color is provided', () => {
    const tree = renderIntoDocument(<FormText color="yoyo">Yo!</FormText>)

    expect(hasClass(tree._vNode, 'text-yoyo')).toBe(true)
  })

  it('should render additional classes', () => {
    const tree = renderIntoDocument(<FormText className="other">Yo!</FormText>)

    expect(hasClass(tree._vNode, 'other')).toBe(true)
  })

  it('should render custom element', () => {
    const tree = renderIntoDocument(<FormText tag="main">Yo!</FormText>)

    expect(getTagName(tree._vNode)).toBe('main')
  })
})
