import { render } from "inferno"
import { renderIntoDocument } from '../utils'
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
    const tree = renderIntoDocument(<FormFeedback>Yo!</FormFeedback>)

    expect(getTagName(tree.$V)).toBe('div')
  })

  it('should render children', () => {
    const tree = renderIntoDocument(<FormFeedback>Yo!</FormFeedback>)

    expect(tree.$V.dom.innerHTML).toBe('Yo!')
  })

  it('should render with "invalid-feedback" class', () => {
    const tree = renderIntoDocument(<FormFeedback>Yo!</FormFeedback>)

    expect(hasClass(tree.$V, 'invalid-feedback')).toBe(true)
  })

  it('should render additional classes', () => {
    const tree = renderIntoDocument(<FormFeedback className="other">Yo!</FormFeedback>)

    expect(hasClass(tree.$V, 'other')).toBe(true)
  })

  it('should render custom tag', () => {
    const tree = renderIntoDocument(<FormFeedback tag="main">Yo!</FormFeedback>)

    expect(getTagName(tree.$V)).toBe('main')
  })
})
