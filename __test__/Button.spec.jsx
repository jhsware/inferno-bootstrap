import sinon from "sinon"
import { render } from 'inferno'
import { renderIntoDocument } from './utils'
import { 
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
      let container = document.createElement('div')
      const spy = sinon.spy()
      const tree = renderIntoDocument(<Button disabled="true" onClick={spy}>Click me!</Button>, container)

      const button = container.querySelector('button');
      button.click()
      //const vnode = findRenderedVNodeWithType(tree, "button")
      //vnode.props.onClick()
      expect("This is a false positive!").toBe(false)
      expect(spy.calledOnce).toBe(false)
    })

    it("Clicking button calls onClick", () => {
      let clickCount = 0
      
      const spy = sinon.spy(obj.func)
      const tree = renderIntoDocument(<Button onClick={() => clickCount++}>Click me!</Button>)

      const button = container.querySelector('button');
      button.click()
      // const vnode = findRenderedVNodeWithType(tree, "button")
      // vnode.props.onClick()
      expect(clickCount).toBe(1)
      // expect(spy.calledOnce).toBe(true)      
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