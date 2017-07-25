import { render } from "inferno"
import { 
  renderIntoDocument,
  findRenderedVNodeWithType,
  findRenderedDOMElementWithClass,
  isVNode
} from 'inferno-test-utils'

import Row from "../lib/Row.jsx"

describe("Row", () => {
  it("Can be rendered", () => {
    const tree = renderIntoDocument(<Row>Content</Row>)
    
    expect(tree._vNode.dom.outerHTML).toBe(
      '<div class="row">Content</div>'
    )
  })

  it("Can be rendered without gutter", () => {
    const tree = renderIntoDocument(<Row noGutters="true">Content</Row>)
    
    expect(tree._vNode.dom.outerHTML).toBe(
      '<div class="no-gutters row">Content</div>'
    )
  })
})