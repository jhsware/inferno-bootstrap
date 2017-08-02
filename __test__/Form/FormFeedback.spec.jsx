import { render } from "inferno"
import { 
  renderIntoDocument,
  findRenderedVNodeWithType,
  findRenderedDOMElementWithClass,
  isVNode,
  isVNodeOfType
} from 'inferno-test-utils'

import { hasClass, getTagName, getInnerHTML } from "../utils"

import FormFeedback from "../../lib/Form/FormFeedback.jsx"

describe('FormFeedback', () => {
  it('should render with "div" tag by default', () => {
    const tree = renderIntoDocument(<FormFeedback>Yo!</FormFeedback>)

    expect(getTagName(tree._vNode)).toBe('div')
  })

  it('should render children', () => {
    const tree = renderIntoDocument(<FormFeedback>Yo!</FormFeedback>)

    expect(tree._vNode.dom.innerHTML).toBe('Yo!')
  })

  it('should render with "form-control-feedback" class', () => {
    const tree = renderIntoDocument(<FormFeedback>Yo!</FormFeedback>)

    expect(hasClass(tree._vNode, 'form-control-feedback')).toBe(true)
  })

  it('should render additional classes', () => {
    const tree = renderIntoDocument(<FormFeedback className="other">Yo!</FormFeedback>)

    expect(hasClass(tree._vNode, 'other')).toBe(true)
  })

  it('should render custom tag', () => {
    const tree = renderIntoDocument(<FormFeedback tag="main">Yo!</FormFeedback>)

    expect(getTagName(tree._vNode)).toBe('main')
  })
})
