import { render } from "inferno"
import { renderIntoElement } from '../utils'
import { 
  findRenderedVNodeWithType,
  findRenderedDOMElementWithClass,
  isVNode,
  isVNodeOfType
} from 'inferno-test-utils'

import { hasClass, getTagName, getInnerHTML } from "../utils"

import FormText from "../../lib/Form/FormText"

describe('FormText', () => {
  it('should render with "small" el', () => {
    const DOM = renderIntoElement(<FormText>Yo!</FormText>)

    expect(getTagName(DOM)).toBe('small')
  })

  it('should render children', () => {
    const DOM = renderIntoElement(<FormText>Yo!</FormText>)

    expect(DOM.innerHTML).toBe('Yo!')
  })

  it('should render with "form-text" class when not inline', () => {
    const DOM = renderIntoElement(<FormText>Yo!</FormText>)

    expect(hasClass(DOM, 'form-text')).toBe(true)
  })

  it('should render with "text-muted" class by default', () => {
    const DOM = renderIntoElement(<FormText>Yo!</FormText>)

    expect(hasClass(DOM, 'text-muted')).toBe(true)
  });

  it('should render without "text-*" class when color is and empty string', () => {
    const DOM = renderIntoElement(<FormText color="">Yo!</FormText>)

    expect(hasClass(DOM, 'text-muted')).toBe(false)
    expect(hasClass(DOM, 'text-')).toBe(false)
  });

  it('should render with "text-${color}" class when color is provided', () => {
    const DOM = renderIntoElement(<FormText color="yoyo">Yo!</FormText>)

    expect(hasClass(DOM, 'text-yoyo')).toBe(true)
  })

  it('should render additional classes', () => {
    const DOM = renderIntoElement(<FormText className="other">Yo!</FormText>)

    expect(hasClass(DOM, 'other')).toBe(true)
  })

  it('should render custom element', () => {
    const DOM = renderIntoElement(<FormText tag="main">Yo!</FormText>)

    expect(getTagName(DOM)).toBe('main')
  })
})
