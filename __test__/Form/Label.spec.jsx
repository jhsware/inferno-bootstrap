import { render } from "inferno"
import { renderIntoElement } from '../utils'
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
    const DOM = renderIntoElement(<Label />)

    expect(getTagName(DOM)).toBe('label')
  })

  it('should render children', () => {
    const DOM = renderIntoElement(<Label>Yo!</Label>)

    expect(DOM.innerHTML).toBe('Yo!')
  })

  it('should pass additional classNames', () => {
    const DOM = renderIntoElement(<Label className="extra">Yo!</Label>)

    expect(hasClass(DOM, 'extra')).toBe(true)
  })

  it('should render with "form-control-label" class', () => {
    const DOM = renderIntoElement(<Label>Yo!</Label>)

    expect(hasClass(DOM, 'form-control-label')).toBe(true)
  })

  it('should not render with "form-control-label" class when check prop is truthy', () => {
    const DOM = renderIntoElement(<Label check>Yo!</Label>)

    expect(hasClass(DOM, 'form-control-label')).toBe(false)
  })

  it('should render with "sr-only" class when hidden prop is truthy', () => {
    const DOM = renderIntoElement(<Label hidden>Yo!</Label>)

    expect(hasClass(DOM, 'sr-only')).toBe(true)
  })

  it('should render with "form-check-label" class when check prop is truthy', () => {
    const DOM = renderIntoElement(<Label check>Yo!</Label>)

    expect(hasClass(DOM, 'form-check-label')).toBe(true)
  })

  it('should not render with "disabled" class when check and disabled props are truthy', () => {
    const DOM = renderIntoElement(<Label check disabled>Yo!</Label>)

    expect(hasClass(DOM, 'disabled')).toBe(true)
  })

  it('should render with "disabled" class when check and disabled props are truthy', () => {
    const DOM = renderIntoElement(<Label check disabled>Yo!</Label>)

    expect(hasClass(DOM, 'disabled')).toBe(true)
  })

  it('should not render with "form-check-inline" nor "form-check-label" by default', () => {
    const DOM = renderIntoElement(<Label>Yo!</Label>)

    expect(hasClass(DOM, 'form-check-label')).toBe(false)
  })

  it('should render custom tag', () => {
    const DOM = renderIntoElement(<Label tag="main">Yo!</Label>)

    expect(getTagName(DOM)).toBe('main')
  })
})
