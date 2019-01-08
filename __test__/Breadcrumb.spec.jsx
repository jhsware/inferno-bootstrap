import { render } from "inferno"
import { renderIntoElement } from './utils'
import { 
  findRenderedVNodeWithType,
  findRenderedDOMElementWithClass,
  isVNode
} from 'inferno-test-utils'

import Breadcrumb from "../lib/Breadcrumb"
import BreadcrumbItem from "../lib/BreadcrumbItem"

describe("Breadcrumb", () => {
  it("Can be rendered", () => {
    const DOM = renderIntoElement(<Breadcrumb>
      <BreadcrumbItem><a href="#">Home</a></BreadcrumbItem>
      <BreadcrumbItem active="true">I am here</BreadcrumbItem>
    </Breadcrumb>)
    
    expect(DOM.outerHTML).toBe(
      '<ol class="breadcrumb"><li class="breadcrumb-item"><a href="#">Home</a></li><li class="active breadcrumb-item">I am here</li></ol>'
    )
  })
})
