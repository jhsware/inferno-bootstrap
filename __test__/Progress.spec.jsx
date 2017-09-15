import { render } from "inferno"
import sinon from "sinon"
import { 
  renderIntoDocument,
  findRenderedVNodeWithType,
  findRenderedDOMElementWithClass,
  isVNode
} from 'inferno-test-utils'

import Progress from "../lib/Progress"

describe("Progress", () => {
  it("Can be rendered", () => {
    const tree = renderIntoDocument(<Progress value="25" />)
    
    expect(tree._vNode.dom.outerHTML).toBe(
      '<div class="progress"><div style="width: 25%;" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" class="progress-bar"></div></div>'
    )
  })

  it("Can render only bar", () => {
    const tree = renderIntoDocument(<Progress value="25" bar="true"/>)
    
    expect(tree._vNode.dom.outerHTML).toBe(
      '<div style="width: 25%;" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" class="progress-bar"></div>'
    )
  })
})
