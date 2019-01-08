import { render } from "inferno"
import { renderIntoElement } from '../utils'
import { 
  findRenderedVNodeWithType,
  findRenderedDOMElementWithClass,
  isVNode,
  isVNodeOfType
} from 'inferno-test-utils'

import { hasClass, getTagName, getInnerHTML } from "../utils"

import FormFeedback from "../../lib/Form/FormFeedback"

describe('FormFeedback', () => {
  it('should render with "div" tag by default', () => {
    const DOM = renderIntoElement(<FormFeedback>Yo!</FormFeedback>)

    expect(getTagName(DOM)).toBe('div')
  })

  it('should render children', () => {
    const DOM = renderIntoElement(<FormFeedback>Yo!</FormFeedback>)

    expect(DOM.innerHTML).toBe('Yo!')
  })

  it('should render with "invalid-feedback" class', () => {
    const DOM = renderIntoElement(<FormFeedback>Yo!</FormFeedback>)

    expect(hasClass(DOM, 'invalid-feedback')).toBe(true)
  })

  it('should render additional classes', () => {
    const DOM = renderIntoElement(<FormFeedback className="other">Yo!</FormFeedback>)

    expect(hasClass(DOM, 'other')).toBe(true)
  })

  it('should render custom tag', () => {
    const DOM = renderIntoElement(<FormFeedback tag="main">Yo!</FormFeedback>)

    expect(getTagName(DOM)).toBe('main')
  })
})
