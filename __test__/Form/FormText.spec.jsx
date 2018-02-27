import { render } from "inferno"
import { renderIntoDocument } from '../utils'
import { 
  findRenderedVNodeWithType,
  findRenderedDOMElementWithClass,
  isVNode,
  isVNodeOfType
} from 'inferno-test-utils'

import { hasClass, getTagName, getInnerHTML } from "../utils"

import FormText from "../../dist/Form/FormText"

describe('FormText', () => {
  it('should render with "small" el', () => {
    const tree = renderIntoDocument(<FormText>Yo!</FormText>)

    expect(getTagName(tree.$V)).toBe('small')
  })

  it('should render children', () => {
    const tree = renderIntoDocument(<FormText>Yo!</FormText>)

    expect(tree.$V.dom.innerHTML).toBe('Yo!')
  })

  it('should render with "form-text" class when not inline', () => {
    const tree = renderIntoDocument(<FormText>Yo!</FormText>)

    expect(hasClass(tree.$V, 'form-text')).toBe(true)
  })

  it('should render with "text-muted" class by default', () => {
    const tree = renderIntoDocument(<FormText>Yo!</FormText>)

    expect(hasClass(tree.$V, 'text-muted')).toBe(true)
  });

  it('should render without "text-*" class when color is and empty string', () => {
    const tree = renderIntoDocument(<FormText color="">Yo!</FormText>)

    expect(hasClass(tree.$V, 'text-muted')).toBe(false)
    expect(hasClass(tree.$V, 'text-')).toBe(false)
  });

  it('should render with "text-${color}" class when color is provided', () => {
    const tree = renderIntoDocument(<FormText color="yoyo">Yo!</FormText>)

    expect(hasClass(tree.$V, 'text-yoyo')).toBe(true)
  })

  it('should render additional classes', () => {
    const tree = renderIntoDocument(<FormText className="other">Yo!</FormText>)

    expect(hasClass(tree.$V, 'other')).toBe(true)
  })

  it('should render custom element', () => {
    const tree = renderIntoDocument(<FormText tag="main">Yo!</FormText>)

    expect(getTagName(tree.$V)).toBe('main')
  })
})
