import { render } from "inferno"
import { 
  renderIntoDocument,
  findRenderedVNodeWithType,
  findRenderedDOMElementWithClass,
  isVNode,
  isVNodeOfType
} from 'inferno-test-utils'

import { hasClass, getTagName, getInnerHTML } from "../utils"

import Label from "../../lib/Form/Label.jsx"

describe('Label', () => {
  it('should render a label tag by default', () => {
    const tree = renderIntoDocument(<Label />)

    expect(getTagName(tree._vNode)).toBe('label')
  })

  it('should render children', () => {
    const tree = renderIntoDocument(<Label>Yo!</Label>)

    expect(getInnerHTML(tree._vNode)).toBe('Yo!')
  })

  it('should pass additional classNames', () => {
    const tree = renderIntoDocument(<Label className="extra">Yo!</Label>)

    expect(hasClass(tree._vNode, 'extra')).toBe(true)
  })

  it('should render with "form-control-label" class', () => {
    const tree = renderIntoDocument(<Label>Yo!</Label>)

    expect(hasClass(tree._vNode, 'form-control-label')).toBe(true)
  })

  it('should not render with "form-control-label" class when check prop is truthy', () => {
    const tree = renderIntoDocument(<Label check>Yo!</Label>)

    expect(hasClass(tree._vNode, 'form-control-label')).toBe(false)
  })

  it('should render with "sr-only" class when hidden prop is truthy', () => {
    const tree = renderIntoDocument(<Label hidden>Yo!</Label>)

    expect(hasClass(tree._vNode, 'sr-only')).toBe(true)
  })

  it('should render with "form-check-label" class when check prop is truthy', () => {
    const tree = renderIntoDocument(<Label check>Yo!</Label>)

    expect(hasClass(tree._vNode, 'form-check-label')).toBe(true)
  })

  it('should not render with "disabled" class when check and disabled props are truthy', () => {
    const tree = renderIntoDocument(<Label check disabled>Yo!</Label>)

    expect(hasClass(tree._vNode, 'disabled')).toBe(true)
  })

  it('should render with "disabled" class when check and disabled props are truthy', () => {
    const tree = renderIntoDocument(<Label check disabled>Yo!</Label>)

    expect(hasClass(tree._vNode, 'disabled')).toBe(true)
  })

  it('should not render with "form-check-inline" nor "form-check-label" by default', () => {
    const tree = renderIntoDocument(<Label>Yo!</Label>)

    expect(hasClass(tree._vNode, 'form-check-label')).toBe(false)
  })

  it('should render custom tag', () => {
    const tree = renderIntoDocument(<Label el="main">Yo!</Label>)

    expect(getTagName(tree._vNode)).toBe('main')
  })
})
