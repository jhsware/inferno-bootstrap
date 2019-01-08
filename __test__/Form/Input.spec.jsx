import { render } from "inferno"
import { renderIntoElement } from '../utils'
import { 
  findRenderedVNodeWithType,
  findRenderedDOMElementWithClass,
  isVNode,
  isVNodeOfType
} from 'inferno-test-utils'
import { hasClass, getTagName, getInnerHTML } from "../utils"

import Input from "../../lib/Form/Input"

describe('Input', () => {
  it('should render with "input" tag when no type is provided', () => {
    const DOM = renderIntoElement(<Input />)

    expect(getTagName(DOM)).toBe('input')
  })

  it('should render with "select" tag when type is "select"', () => {
    const DOM = renderIntoElement(<Input type="select" />)

    expect(getTagName(DOM)).toBe('select')
  })

  it('should render with "textarea" tag when type is "textarea"', () => {
    const DOM = renderIntoElement(<Input type="textarea" />)

    expect(getTagName(DOM)).toBe('textarea')
  })

  it('should render with "p" tag when plaintext prop is truthy', () => {
    const DOM = renderIntoElement(<Input type="select" plaintext />)

    expect(getTagName(DOM)).toBe('p')
  })

  it('should render with "form-control-plaintext" class when plaintext prop is truthy', () => {
    const DOM = renderIntoElement(<Input type="select" plaintext />)

    expect(hasClass(DOM, 'form-control-plaintext')).toBe(true)
  })

  it('should not render with "form-control" class when plaintext prop is truthy', () => {
    const DOM = renderIntoElement(<Input type="select" plaintext />)

    expect(hasClass(DOM, 'form-control')).toBe(false)
  })

  it('should render with custom tag when plaintext prop is truthy and tag is provided', () => {
    const DOM = renderIntoElement(<Input type="select" plaintext tag="div" />)

    expect(getTagName(DOM)).toBe('div')
  })

  it('should not render with custom tag when plaintext prop is not truthy and tag is provided', () => {
    const DOM = renderIntoElement(<Input type="select" tag="div" />)

    expect(getTagName(DOM)).toBe('select')
  })

  it('should render with "input" tag when type is not a special case', () => {
    const DOM = renderIntoElement(<Input type="email" />)

    expect(getTagName(DOM)).toBe('input')
  })

  it('should not allow children', () => {
    let fail = false
    try {
      const DOM = renderIntoElement(<Input>Yo!</Input>)
    } catch (e) {
      fail = true
    }

    expect(fail).toBe(true)
  })

  it('should render with "is-invalid" class when valid is false', () => {
    const DOM = renderIntoElement(<Input valid={false} />)

    expect(hasClass(DOM, 'is-invalid')).toBe(true)
  })

  it('should render with "is-invalid" class when valid is false', () => {
    const DOM = renderIntoElement(<Input valid />)

    expect(hasClass(DOM, 'is-valid')).toBe(true)
  })

  it('should render with "form-control-${size}" class when bsSize is "lg" or "sm"', () => {
    const DOM = renderIntoElement(<Input bsSize="lg" />)

    expect(hasClass(DOM, 'form-control-lg')).toBe(true)
  })

  it('should render with "form-control-${bsSize}" class when bsSize is provided', () => {
    const DOM = renderIntoElement(<Input bsSize="sm" />);
  
    expect(hasClass(DOM, 'form-control-sm')).toBe(true)
  });

  it('should render with "form-control" class by default', () => {
    const DOM = renderIntoElement(<Input />)

    expect(hasClass(DOM, 'form-control')).toBe(true)
  })

  it('should not render with "form-control-file" nor "form-control-plaintext" nor "form-check-input" class by default', () => {
    const DOM = renderIntoElement(<Input />)

    expect(hasClass(DOM, 'form-control-file')).toBe(false)
    expect(hasClass(DOM, 'form-control-plaintext')).toBe(false)
    expect(hasClass(DOM, 'form-check-input')).toBe(false)
  })

  it('should not render with "form-control" nor "form-control-plaintext" nor "form-check-input" class when type is file', () => {
    const DOM = renderIntoElement(<Input type="file" />)

    expect(hasClass(DOM, 'form-control')).toBe(false)
    expect(hasClass(DOM, 'form-control-plaintext')).toBe(false)
    expect(hasClass(DOM, 'form-check-input')).toBe(false)
  })

  it('should not render with "form-control-file" nor "form-control" nor "form-check-input" class when plaintext prop is truthy', () => {
    const DOM = renderIntoElement(<Input type="file" plaintext />)

    expect(hasClass(DOM, 'form-control-file')).toBe(false)
    expect(hasClass(DOM, 'form-control')).toBe(false)
    expect(hasClass(DOM, 'form-check-input')).toBe(false)
  })

  it('should not render with "form-control-file" nor "form-control-plaintext" nor "form-control" class when type is radio', () => {
    const DOM = renderIntoElement(<Input type="radio" />)

    expect(hasClass(DOM, 'form-control-file')).toBe(false)
    expect(hasClass(DOM, 'form-control-plaintext')).toBe(false)
    expect(hasClass(DOM, 'form-control')).toBe(false)
  })

  it('should not render with "form-control-file" nor "form-control-plaintext" nor "form-control" class when type is checkbox', () => {
    const DOM = renderIntoElement(<Input type="checkbox" />)

    expect(hasClass(DOM, 'form-control-file')).toBe(false)
    expect(hasClass(DOM, 'form-control-plaintext')).toBe(false)
    expect(hasClass(DOM, 'form-control')).toBe(false)
  })

  it('should render with "form-check-input" class when type is checkbox', () => {
    const DOM = renderIntoElement(<Input type="checkbox" />)

    expect(hasClass(DOM, 'form-check-input')).toBe(true)
  })

  it('should render with "form-check-input" class when type is radio', () => {
    const DOM = renderIntoElement(<Input type="radio" />)

    expect(hasClass(DOM, 'form-check-input')).toBe(true)
  })

  it('should not render with "form-check-input" nor "form-control" class when type is checkbox and addon is truthy', () => {
    const DOM = renderIntoElement(<Input addon type="checkbox" />)

    expect(hasClass(DOM, 'form-check-input')).toBe(false)
    expect(hasClass(DOM, 'form-control')).toBe(false)
  })

  it('should not render with "form-check-input" nor "form-control" class when type is radio and addon is truthy', () => {
    const DOM = renderIntoElement(<Input addon type="radio" />)

    expect(hasClass(DOM, 'form-check-input')).toBe(false)
    expect(hasClass(DOM, 'form-control')).toBe(false)
  })

  it('should render with "form-control-file" class when type is file', () => {
    const DOM = renderIntoElement(<Input type="file" />)

    expect(hasClass(DOM, 'form-control-file')).toBe(true)
  })

  it('should render additional classes', () => {
    const DOM = renderIntoElement(<Input className="other" />)

    expect(hasClass(DOM, 'other')).toBe(true)
  })
})
