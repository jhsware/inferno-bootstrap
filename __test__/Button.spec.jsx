import sinon from "sinon"
import { render } from 'inferno'
import { renderIntoDocument, triggerEvent } from './utils'
import { 
  findRenderedVNodeWithType,
  findRenderedDOMElementWithClass,
  isVNode
} from 'inferno-test-utils'

import Button from "../dist/Button"
import ButtonGroup from "../dist/ButtonGroup"
import ButtonToolbar from "../dist/ButtonToolbar"

describe("Buttons", () => {

  let container;

  beforeEach(function() {
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  afterEach(function() {
    render(null, container);
    container.innerHTML = '';
    document.body.removeChild(container);
  });

  describe("Button", () => {
    it("Can be rendered", () => {
      const tree = renderIntoDocument(<Button>Click me!</Button>)
      
      expect(tree.$V.dom.outerHTML).toBe(
        '<button class="btn btn-secondary">Click me!</button>'
      )
    })

    it("Can be rendered with color primary", () => {
      const tree = renderIntoDocument(<Button color="primary">Click me!</Button>)
      
      expect(tree.$V.dom.outerHTML).toBe(
        '<button class="btn btn-primary">Click me!</button>'
      )
    })

    it("Renders as a-tag when href provided", () => {
      const tree = renderIntoDocument(<Button href="#">Click me!</Button>)
      
      expect(tree.$V.dom.outerHTML).toBe(
        '<a class="btn btn-secondary" href="#">Click me!</a>'
      )
    })

    it("Clicking disabled button does nothing", () => {
      const onClick = jest.fn()
      render(<Button disabled="true" onClick={onClick}>Click me!</Button>, container)

      triggerEvent('click', container.firstChild)

      expect(onClick).toHaveBeenCalledTimes(0)
    })

    it("Clicking button calls onClick", () => {
      const onClick = jest.fn()
      render(<Button onClick={onClick}>Click me!</Button>, container)

      triggerEvent('click', container.firstChild)

      expect(onClick).toHaveBeenCalledTimes(1)
    })
  })

  describe("ButtonGroup", () => {
    it("Can be rendered", () => {
      const tree = renderIntoDocument(<ButtonGroup>Content</ButtonGroup>)
      
      expect(tree.$V.dom.outerHTML).toBe(
        '<div class="btn-group" role="group">Content</div>'
      )
    })

    it("Can be rendered vertically", () => {
      const tree = renderIntoDocument(<ButtonGroup vertical="true">Content</ButtonGroup>)
      
      expect(tree.$V.dom.outerHTML).toBe(
        '<div class="btn-group-vertical" role="group">Content</div>'
      )
    })
  })

  describe("ButtonToolbar", () => {
    it("Can be rendered", () => {
      const tree = renderIntoDocument(<ButtonToolbar>Content</ButtonToolbar>)
      
      expect(tree.$V.dom.outerHTML).toBe(
        '<div class="btn-toolbar" role="toolbar">Content</div>'
      )
    })
  })
})