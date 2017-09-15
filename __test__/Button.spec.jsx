import { render } from "inferno"
import sinon from "sinon"
import { 
  renderIntoDocument,
  findRenderedVNodeWithType,
  findRenderedDOMElementWithClass,
  isVNode
} from 'inferno-test-utils'

import Button from "../dist/Button"
import ButtonGroup from "../dist/ButtonGroup"
import ButtonToolbar from "../dist/ButtonToolbar"

describe("Buttons", () => {

  describe("Button", () => {
    it("Can be rendered", () => {
      const tree = renderIntoDocument(<Button>Click me!</Button>)
      
      expect(tree._vNode.dom.outerHTML).toBe(
        '<button class="btn btn-secondary">Click me!</button>'
      )
    })

    it("Can be rendered with color primary", () => {
      const tree = renderIntoDocument(<Button color="primary">Click me!</Button>)
      
      expect(tree._vNode.dom.outerHTML).toBe(
        '<button class="btn btn-primary">Click me!</button>'
      )
    })

    it("Renders as a-tag when href provided", () => {
      const tree = renderIntoDocument(<Button href="#">Click me!</Button>)
      
      expect(tree._vNode.dom.outerHTML).toBe(
        '<a href="#" class="btn btn-secondary">Click me!</a>'
      )
    })

    it("Clicking disabled button does nothing", () => {
      const testClick = {
        didClick: () => {}
      }
      const clickSpy = sinon.spy(testClick, 'didClick')

      const tree = renderIntoDocument(<Button disabled="true" onClick={testClick.didClick}>Click me!</Button>)

      const vnode = findRenderedVNodeWithType(tree, "button")
      vnode.dom.click()
      
      expect(clickSpy.calledOnce).toBe(false)
    })

    it("Clicking button calls onClick", () => {

      const testClick = {
        didClick: () => {}
      }
      const clickSpy = sinon.spy(testClick, 'didClick')

      const tree = renderIntoDocument(<Button onClick={testClick.didClick}>Click me!</Button>)

      const vnode = findRenderedVNodeWithType(tree, "button")
      vnode.dom.click()
      
      expect(clickSpy.calledOnce).toBe(true)
    })
  })

  describe("ButtonGroup", () => {
    it("Can be rendered", () => {
      const tree = renderIntoDocument(<ButtonGroup>Content</ButtonGroup>)
      
      expect(tree._vNode.dom.outerHTML).toBe(
        '<div role="group" class="btn-group">Content</div>'
      )
    })

    it("Can be rendered vertically", () => {
      const tree = renderIntoDocument(<ButtonGroup vertical="true">Content</ButtonGroup>)
      
      expect(tree._vNode.dom.outerHTML).toBe(
        '<div role="group" class="btn-group-vertical">Content</div>'
      )
    })
  })

  describe("ButtonToolbar", () => {
    it("Can be rendered", () => {
      const tree = renderIntoDocument(<ButtonToolbar>Content</ButtonToolbar>)
      
      expect(tree._vNode.dom.outerHTML).toBe(
        '<div role="toolbar" class="btn-toolbar">Content</div>'
      )
    })
  })
})