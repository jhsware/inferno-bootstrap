import { render } from "inferno"
import { renderIntoElement } from './utils'
import { 
  findRenderedVNodeWithType,
  findRenderedDOMElementWithClass,
  isVNode
} from 'inferno-test-utils'

import Badge from "../lib/Badge"

describe("Badge", () => {
  it("Can be rendered", () => {
    const DOM = renderIntoElement(<Badge>new</Badge>)
    
    expect(DOM.outerHTML).toBe(
      '<span class="badge badge-secondary">new</span>'
    )
  })

  it("Can be render with color success", () => {
    const DOM = renderIntoElement(<Badge color="success">new</Badge>)
    
    expect(DOM.outerHTML).toBe(
      '<span class="badge badge-success">new</span>'
    )
  })

  it("Can be render as a pill", () => {
    const DOM = renderIntoElement(<Badge pill="true">new</Badge>)
    
    expect(DOM.outerHTML).toBe(
      '<span class="badge badge-secondary badge-pill">new</span>'
    )
  })
})
