import { render } from "inferno"
import { renderIntoDocument } from '../utils'
import { 
  findRenderedVNodeWithType,
  findRenderedDOMElementWithClass,
  isVNode,
  isVNodeOfType
} from 'inferno-test-utils'

import { hasClass, getTagName, getInnerHTML } from "../utils"

import Label from "../../lib/Form/Label"

describe('Label', () => {
  it('should render a label tag by default', () => {
    const tree = renderIntoDocument(<Label />)

    expect(getTagName(tree.$V)).toBe('label')
  })

  it('should render children', () => {
    const tree = renderIntoDocument(<Label>Yo!</Label>)

    expect(getInnerHTML(tree.$V)).toBe('Yo!')
  })

  it('should pass additional classNames', () => {
    const tree = renderIntoDocument(<Label className="extra">Yo!</Label>)

    expect(hasClass(tree.$V, 'extra')).toBe(true)
  })

  it('should render with "form-control-label" class', () => {
    const tree = renderIntoDocument(<Label>Yo!</Label>)

    expect(hasClass(tree.$V, 'form-control-label')).toBe(true)
  })

  it('should not render with "form-control-label" class when check prop is truthy', () => {
    const tree = renderIntoDocument(<Label check>Yo!</Label>)

    expect(hasClass(tree.$V, 'form-control-label')).toBe(false)
  })

  it('should render with "sr-only" class when hidden prop is truthy', () => {
    const tree = renderIntoDocument(<Label hidden>Yo!</Label>)

    expect(hasClass(tree.$V, 'sr-only')).toBe(true)
  })

  it('should render with "form-check-label" class when check prop is truthy', () => {
    const tree = renderIntoDocument(<Label check>Yo!</Label>)

    expect(hasClass(tree.$V, 'form-check-label')).toBe(true)
  })

  it('should not render with "disabled" class when check and disabled props are truthy', () => {
    const tree = renderIntoDocument(<Label check disabled>Yo!</Label>)

    expect(hasClass(tree.$V, 'disabled')).toBe(true)
  })

  it('should render with "disabled" class when check and disabled props are truthy', () => {
    const tree = renderIntoDocument(<Label check disabled>Yo!</Label>)

    expect(hasClass(tree.$V, 'disabled')).toBe(true)
  })

  it('should not render with "form-check-inline" nor "form-check-label" by default', () => {
    const tree = renderIntoDocument(<Label>Yo!</Label>)

    expect(hasClass(tree.$V, 'form-check-label')).toBe(false)
  })

  it('should render custom tag', () => {
    const tree = renderIntoDocument(<Label tag="main">Yo!</Label>)

    expect(getTagName(tree.$V)).toBe('main')
  })
})
