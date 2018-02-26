import { render } from "inferno"
import { 
  renderIntoDocument,
  findRenderedVNodeWithType,
  findRenderedDOMElementWithClass,
  isVNode,
  isVNodeOfType
} from 'inferno-test-utils'
import { hasClass, getTagName, getInnerHTML } from "../utils"

import Input from "../../dist/Form/Input"

describe('Input', () => {
  it('should render with "input" tag when no type is provided', () => {
    const tree = renderIntoDocument(<Input>Yo!</Input>)

    expect(getTagName(tree.$V)).toBe('input')
  })

  it('should render with "select" tag when type is "select"', () => {
    const tree = renderIntoDocument(<Input type="select">Yo!</Input>)

    expect(getTagName(tree.$V)).toBe('select')
  })

  it('should render with "textarea" tag when type is "textarea"', () => {
    const tree = renderIntoDocument(<Input type="textarea">Yo!</Input>)

    expect(getTagName(tree.$V)).toBe('textarea')
  })

  it('should render with "p" tag when plaintext prop is truthy', () => {
    const tree = renderIntoDocument(<Input type="select" plaintext />)

    expect(getTagName(tree.$V)).toBe('p')
  })

  it('should render with "form-control-plaintext" class when plaintext prop is truthy', () => {
    const tree = renderIntoDocument(<Input type="select" plaintext />)

    expect(hasClass(tree.$V, 'form-control-plaintext')).toBe(true)
  })

  it('should not render with "form-control" class when plaintext prop is truthy', () => {
    const tree = renderIntoDocument(<Input type="select" plaintext />)

    expect(hasClass(tree.$V, 'form-control')).toBe(false)
  })

  it('should render with custom tag when plaintext prop is truthy and tag is provided', () => {
    const tree = renderIntoDocument(<Input type="select" plaintext tag="div" />)

    expect(getTagName(tree.$V)).toBe('div')
  })

  it('should not render with custom tag when plaintext prop is not truthy and tag is provided', () => {
    const tree = renderIntoDocument(<Input type="select" tag="div" />)

    expect(getTagName(tree.$V)).toBe('select')
  })

  it('should render with "input" tag when type is not a special case', () => {
    const tree = renderIntoDocument(<Input type="email" />)

    expect(getTagName(tree.$V)).toBe('input')
  })

  it('should render children', () => {
    const tree = renderIntoDocument(<Input>Yo!</Input>)

    expect(tree.$V.dom.innerHTML).toBe('Yo!')
  })

  it('should render with "is-invalid" class when valid is false', () => {
    const tree = renderIntoDocument(<Input valid={false} />)

    expect(hasClass(tree.$V, 'is-invalid')).toBe(true)
  })

  it('should render with "is-invalid" class when valid is false', () => {
    const tree = renderIntoDocument(<Input valid />)

    expect(hasClass(tree.$V, 'is-valid')).toBe(true)
  })

  it('should render with "form-control-${size}" class when bsSize is "lg" or "sm"', () => {
    const tree = renderIntoDocument(<Input bsSize="lg" />)

    expect(hasClass(tree.$V, 'form-control-lg')).toBe(true)
  })

  it('should render with "form-control-${bsSize}" class when bsSize is provided', () => {
    const tree = renderIntoDocument(<Input bsSize="sm" />);
  
    expect(hasClass(tree.$V, 'form-control-sm')).toBe(true)
  });

  it('should render with "form-control" class by default', () => {
    const tree = renderIntoDocument(<Input />)

    expect(hasClass(tree.$V, 'form-control')).toBe(true)
  })

  it('should not render with "form-control-file" nor "form-control-plaintext" nor "form-check-input" class by default', () => {
    const tree = renderIntoDocument(<Input />)

    expect(hasClass(tree.$V, 'form-control-file')).toBe(false)
    expect(hasClass(tree.$V, 'form-control-plaintext')).toBe(false)
    expect(hasClass(tree.$V, 'form-check-input')).toBe(false)
  })

  it('should not render with "form-control" nor "form-control-plaintext" nor "form-check-input" class when type is file', () => {
    const tree = renderIntoDocument(<Input type="file" />)

    expect(hasClass(tree.$V, 'form-control')).toBe(false)
    expect(hasClass(tree.$V, 'form-control-plaintext')).toBe(false)
    expect(hasClass(tree.$V, 'form-check-input')).toBe(false)
  })

  it('should not render with "form-control-file" nor "form-control" nor "form-check-input" class when plaintext prop is truthy', () => {
    const tree = renderIntoDocument(<Input type="file" plaintext />)

    expect(hasClass(tree.$V, 'form-control-file')).toBe(false)
    expect(hasClass(tree.$V, 'form-control')).toBe(false)
    expect(hasClass(tree.$V, 'form-check-input')).toBe(false)
  })

  it('should not render with "form-control-file" nor "form-control-plaintext" nor "form-control" class when type is radio', () => {
    const tree = renderIntoDocument(<Input type="radio" />)

    expect(hasClass(tree.$V, 'form-control-file')).toBe(false)
    expect(hasClass(tree.$V, 'form-control-plaintext')).toBe(false)
    expect(hasClass(tree.$V, 'form-control')).toBe(false)
  })

  it('should not render with "form-control-file" nor "form-control-plaintext" nor "form-control" class when type is checkbox', () => {
    const tree = renderIntoDocument(<Input type="checkbox" />)

    expect(hasClass(tree.$V, 'form-control-file')).toBe(false)
    expect(hasClass(tree.$V, 'form-control-plaintext')).toBe(false)
    expect(hasClass(tree.$V, 'form-control')).toBe(false)
  })

  it('should render with "form-check-input" class when type is checkbox', () => {
    const tree = renderIntoDocument(<Input type="checkbox" />)

    expect(hasClass(tree.$V, 'form-check-input')).toBe(true)
  })

  it('should render with "form-check-input" class when type is radio', () => {
    const tree = renderIntoDocument(<Input type="radio" />)

    expect(hasClass(tree.$V, 'form-check-input')).toBe(true)
  })

  it('should not render with "form-check-input" nor "form-control" class when type is checkbox and addon is truthy', () => {
    const tree = renderIntoDocument(<Input addon type="checkbox" />)

    expect(hasClass(tree.$V, 'form-check-input')).toBe(false)
    expect(hasClass(tree.$V, 'form-control')).toBe(false)
  })

  it('should not render with "form-check-input" nor "form-control" class when type is radio and addon is truthy', () => {
    const tree = renderIntoDocument(<Input addon type="radio" />)

    expect(hasClass(tree.$V, 'form-check-input')).toBe(false)
    expect(hasClass(tree.$V, 'form-control')).toBe(false)
  })

  it('should render with "form-control-file" class when type is file', () => {
    const tree = renderIntoDocument(<Input type="file" />)

    expect(hasClass(tree.$V, 'form-control-file')).toBe(true)
  })

  it('should render additional classes', () => {
    const tree = renderIntoDocument(<Input className="other">Yo!</Input>)

    expect(hasClass(tree.$V, 'other')).toBe(true)
  })
})
