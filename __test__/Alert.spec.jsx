import { render } from "inferno"
import sinon from "sinon"
import { 
  renderIntoDocument,
  findRenderedVNodeWithType,
  findRenderedDOMElementWithClass,
  isVNode
} from 'inferno-test-utils'

import Alert from "../lib/Alert"

describe("Alert", () => {
  it("Can be rendered", () => {
    const tree = renderIntoDocument(<Alert>This looks fine!</Alert>)
    
    expect(tree._vNode.dom.outerHTML).toBe(
      '<div role="alert" class="alert alert-success">This looks fine!</div>'
    )
  })

  it("Can be render with color warning", () => {
    const tree = renderIntoDocument(<Alert color="warning">This looks fine!</Alert>)
    
    expect(tree._vNode.dom.outerHTML).toBe(
      '<div role="alert" class="alert alert-warning">This looks fine!</div>'
    )
  })

  it("Can be render with a close button", () => {
    const tree = renderIntoDocument(<Alert onClose={() => {}}>This looks fine!</Alert>)
    
    const buttonNode = findRenderedVNodeWithType(tree, 'button')
    expect(isVNode(buttonNode)).toBe(true)
  })

  it("Clicking close button calls onClose", () => {

    const testClick = {
      didClick: () => {}
    }
    const clickSpy = sinon.spy(testClick, 'didClick')

    const tree = renderIntoDocument(<Alert onClose={testClick.didClick}>This looks fine!</Alert>)

    const vnode = findRenderedVNodeWithType(tree, "button")
    vnode.dom.click()
    
    expect(clickSpy.calledOnce).toBe(true)
  })
})
