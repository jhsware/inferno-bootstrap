import { render } from 'inferno'
import { renderIntoElement, triggerEvent } from './utils'

import Button from "../lib/Button"
import ButtonGroup from "../lib/ButtonGroup"
import ButtonToolbar from "../lib/ButtonToolbar"

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
      const DOM = renderIntoElement(<Button>Click me!</Button>)
      
      expect(DOM.outerHTML).toBe(
        '<button class="btn btn-secondary">Click me!</button>'
      )
    })

    it("Can be rendered with color primary", () => {
      const DOM = renderIntoElement(<Button color="primary">Click me!</Button>)
      
      expect(DOM.outerHTML).toBe(
        '<button class="btn btn-primary">Click me!</button>'
      )
    })

    it("Renders as a-tag when href provided", () => {
      const DOM = renderIntoElement(<Button href="#">Click me!</Button>)
      
      expect(DOM.outerHTML).toBe(
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
      const DOM = renderIntoElement(<ButtonGroup>Content</ButtonGroup>)
      
      expect(DOM.outerHTML).toBe(
        '<div class="btn-group" role="group">Content</div>'
      )
    })

    it("Can be rendered vertically", () => {
      const DOM = renderIntoElement(<ButtonGroup vertical="true">Content</ButtonGroup>)
      
      expect(DOM.outerHTML).toBe(
        '<div class="btn-group-vertical" role="group">Content</div>'
      )
    })
  })

  describe("ButtonToolbar", () => {
    it("Can be rendered", () => {
      const DOM = renderIntoElement(<ButtonToolbar>Content</ButtonToolbar>)
      
      expect(DOM.outerHTML).toBe(
        '<div class="btn-toolbar" role="toolbar">Content</div>'
      )
    })
  })
})