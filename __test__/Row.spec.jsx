import { render } from "inferno"
import { renderIntoElement } from './utils'
import { 
  findRenderedVNodeWithType,
  findRenderedDOMElementWithClass,
  isVNode
} from 'inferno-test-utils'

import Row from "../lib/Row"

describe("Row", () => {
  it("Can be rendered", () => {
    const DOM = renderIntoElement(<Row>Content</Row>)
    
    expect(DOM.outerHTML).toBe(
      '<div class="row">Content</div>'
    )
  })

  it("Can be rendered without gutter", () => {
    const DOM = renderIntoElement(<Row noGutters="true">Content</Row>)
    
    expect(DOM.outerHTML).toBe(
      '<div class="no-gutters row">Content</div>'
    )
  })

  it("Can be rendered with included col", () => {
    const DOM = renderIntoElement(<Row col>Content</Row>)
    
    expect(DOM.outerHTML).toBe(
      '<div class="col mr-0 row">Content</div>'
    )
  })
})
