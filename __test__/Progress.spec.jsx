import { render } from "inferno"
import sinon from "sinon"
import { renderIntoElement } from './utils'
import { 
  findRenderedVNodeWithType,
  findRenderedDOMElementWithClass,
  isVNode
} from 'inferno-test-utils'

import Progress from "../lib/Progress"

describe("Progress", () => {
  it("Can be rendered", () => {
    const DOM = renderIntoElement(<Progress value="25" />)
    
    expect(DOM.outerHTML).toBe(
      '<div class="progress"><div class="progress-bar" style="width: 25%;" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div></div>'
    )
  })

  it("Can render only bar", () => {
    const DOM = renderIntoElement(<Progress value="25" bar="true"/>)
    
    expect(DOM.outerHTML).toBe(
      '<div class="progress-bar" style="width: 25%;" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>'
    )
  })
})
