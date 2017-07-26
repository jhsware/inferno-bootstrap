import { render } from "inferno"
import { 
  renderIntoDocument,
  findRenderedVNodeWithType,
  findRenderedDOMElementWithClass,
  isVNode,
  isVNodeOfType
} from 'inferno-test-utils'
import { hasClass, getTagName, getInnerHTML } from "../utils"

import Input from "../../lib/Form/Input.jsx"

describe('Input', () => {
  it('should render with "input" tag when no type is provided', () => {
    const tree = renderIntoDocument(<Input>Yo!</Input>)

    expect(getTagName(tree._vNode)).toBe('input')
  })

  it('should render with "select" tag when type is "select"', () => {
    const tree = renderIntoDocument(<Input type="select">Yo!</Input>)

    expect(getTagName(tree._vNode)).toBe('select')
  })

  it('should render with "textarea" tag when type is "textarea"', () => {
    const tree = renderIntoDocument(<Input type="textarea">Yo!</Input>)

    expect(getTagName(tree._vNode)).toBe('textarea')
  })

  it('should render with "p" tag when static prop is truthy', () => {
    const tree = renderIntoDocument(<Input type="select" static />)

    expect(getTagName(tree._vNode)).toBe('p')
  })

  it('should render with "form-control-static" class when static prop is truthy', () => {
    const tree = renderIntoDocument(<Input type="select" static />)

    expect(hasClass(tree._vNode, 'form-control-static')).toBe(true)
  })

  it('should not render with "form-control" class when static prop is truthy', () => {
    const tree = renderIntoDocument(<Input type="select" static />)

    expect(hasClass(tree._vNode, 'form-control')).toBe(false)
  })

  it('should render with custom tag when static prop is truthy and tag is provided', () => {
    const tree = renderIntoDocument(<Input type="select" static el="div" />)

    expect(getTagName(tree._vNode)).toBe('div')
  })

  it('should not render with custom tag when static prop is not truthy and tag is provided', () => {
    const tree = renderIntoDocument(<Input type="select" el="div" />)

    expect(getTagName(tree._vNode)).toBe('select')
  })

  it('should render with "input" tag when type is not a special case', () => {
    const tree = renderIntoDocument(<Input type="email" />)

    expect(getTagName(tree._vNode)).toBe('input')
  })

  it('should render children', () => {
    const tree = renderIntoDocument(<Input>Yo!</Input>)

    expect(tree._vNode.dom.innerHTML).toBe('Yo!')
  })

  it('should render with "form-control-${state}" class when state is provided', () => {
    const tree = renderIntoDocument(<Input state="danger" />)

    expect(hasClass(tree._vNode, 'form-control-danger')).toBe(true)
  })

  it('should render with "form-control-${size}" class when size is provided', () => {
    const tree = renderIntoDocument(<Input size="lg" />)

    expect(hasClass(tree._vNode, 'form-control-lg')).toBe(true)
  })

  it('should render with "form-control" class by default', () => {
    const tree = renderIntoDocument(<Input />)

    expect(hasClass(tree._vNode, 'form-control')).toBe(true)
  })

  it('should not render with "form-control-file" nor "form-control-static" nor "form-check-input" class by default', () => {
    const tree = renderIntoDocument(<Input />)

    expect(hasClass(tree._vNode, 'form-control-file')).toBe(false)
    expect(hasClass(tree._vNode, 'form-control-static')).toBe(false)
    expect(hasClass(tree._vNode, 'form-check-input')).toBe(false)
  })

  it('should not render with "form-control" nor "form-control-static" nor "form-check-input" class when type is file', () => {
    const tree = renderIntoDocument(<Input type="file" />)

    expect(hasClass(tree._vNode, 'form-control')).toBe(false)
    expect(hasClass(tree._vNode, 'form-control-static')).toBe(false)
    expect(hasClass(tree._vNode, 'form-check-input')).toBe(false)
  })

  it('should not render with "form-control-file" nor "form-control" nor "form-check-input" class when static prop is truthy', () => {
    const tree = renderIntoDocument(<Input type="file" static />)

    expect(hasClass(tree._vNode, 'form-control-file')).toBe(false)
    expect(hasClass(tree._vNode, 'form-control')).toBe(false)
    expect(hasClass(tree._vNode, 'form-check-input')).toBe(false)
  })

  it('should not render with "form-control-file" nor "form-control-static" nor "form-control" class when type is radio', () => {
    const tree = renderIntoDocument(<Input type="radio" />)

    expect(hasClass(tree._vNode, 'form-control-file')).toBe(false)
    expect(hasClass(tree._vNode, 'form-control-static')).toBe(false)
    expect(hasClass(tree._vNode, 'form-control')).toBe(false)
  })

  it('should not render with "form-control-file" nor "form-control-static" nor "form-control" class when type is checkbox', () => {
    const tree = renderIntoDocument(<Input type="checkbox" />)

    expect(hasClass(tree._vNode, 'form-control-file')).toBe(false)
    expect(hasClass(tree._vNode, 'form-control-static')).toBe(false)
    expect(hasClass(tree._vNode, 'form-control')).toBe(false)
  })

  it('should render with "form-check-input" class when type is checkbox', () => {
    const tree = renderIntoDocument(<Input type="checkbox" />)

    expect(hasClass(tree._vNode, 'form-check-input')).toBe(true)
  })

  it('should render with "form-check-input" class when type is radio', () => {
    const tree = renderIntoDocument(<Input type="radio" />)

    expect(hasClass(tree._vNode, 'form-check-input')).toBe(true)
  })

  it('should not render with "form-check-input" nor "form-control" class when type is checkbox and addon is truthy', () => {
    const tree = renderIntoDocument(<Input addon type="checkbox" />)

    expect(hasClass(tree._vNode, 'form-check-input')).toBe(false)
    expect(hasClass(tree._vNode, 'form-control')).toBe(false)
  })

  it('should not render with "form-check-input" nor "form-control" class when type is radio and addon is truthy', () => {
    const tree = renderIntoDocument(<Input addon type="radio" />)

    expect(hasClass(tree._vNode, 'form-check-input')).toBe(false)
    expect(hasClass(tree._vNode, 'form-control')).toBe(false)
  })

  it('should render with "form-control-file" class when type is file', () => {
    const tree = renderIntoDocument(<Input type="file" />)

    expect(hasClass(tree._vNode, 'form-control-file')).toBe(true)
  })

  it('should render additional classes', () => {
    const tree = renderIntoDocument(<Input className="other">Yo!</Input>)

    expect(hasClass(tree._vNode, 'other')).toBe(true)
  })
})
