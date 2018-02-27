import { render } from "inferno"
import sinon from "sinon"
import { renderIntoDocument } from './utils'
import { 
  findRenderedVNodeWithType,
  findRenderedDOMElementWithClass,
  isVNode
} from 'inferno-test-utils'

import Alert from "../dist/Alert"

describe("Alert", () => {
  it("Can be rendered", () => {
    const tree = renderIntoDocument(<Alert>This looks fine!</Alert>)
    
    expect(tree.$V.dom.outerHTML).toBe(
      '<div class="alert alert-success" role="alert">This looks fine!</div>'
    )
  })

  it("Can be render with color warning", () => {
    const tree = renderIntoDocument(<Alert color="warning">This looks fine!</Alert>)
    
    expect(tree.$V.dom.outerHTML).toBe(
      '<div class="alert alert-warning" role="alert">This looks fine!</div>'
    )
  })

  it("Can be render with a close button", () => {
    const tree = renderIntoDocument(<Alert onClose={() => {}}>This looks fine!</Alert>)
    
    const buttonNode = findRenderedVNodeWithType(tree, 'button')
    expect(isVNode(buttonNode)).toBe(true)
  })

  it("Clicking close button calls onClose", () => {
    const spy = sinon.spy()
    const tree = renderIntoDocument(<Alert onClose={spy}>This looks fine!</Alert>)

    const vnode = findRenderedVNodeWithType(tree, "button")
    vnode.props.onClick()
    
    expect(spy.calledOnce).toBe(true)
  })
})
