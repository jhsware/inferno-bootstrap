import { render } from "inferno"
import { 
  renderIntoDocument,
  findRenderedVNodeWithType,
  findRenderedDOMElementWithClass,
  isVNode
} from 'inferno-test-utils'

import Badge from "../lib/Badge"

describe("Badge", () => {
  it("Can be rendered", () => {
    const tree = renderIntoDocument(<Badge>new</Badge>)
    
    expect(tree._vNode.dom.outerHTML).toBe(
      '<span class="badge badge-default">new</span>'
    )
  })

  it("Can be render with color success", () => {
    const tree = renderIntoDocument(<Badge color="success">new</Badge>)
    
    expect(tree._vNode.dom.outerHTML).toBe(
      '<span class="badge badge-success">new</span>'
    )
  })

  it("Can be render as a pill", () => {
    const tree = renderIntoDocument(<Badge pill="true">new</Badge>)
    
    expect(tree._vNode.dom.outerHTML).toBe(
      '<span class="badge badge-default badge-pill">new</span>'
    )
  })
})
