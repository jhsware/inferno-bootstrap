import { render } from "inferno"
import { 
  renderIntoDocument,
  findRenderedVNodeWithType,
  findRenderedDOMElementWithClass,
  isVNode
} from 'inferno-test-utils'

import Breadcrumb from "../dist/Breadcrumb"
import BreadcrumbItem from "../dist/BreadcrumbItem"

describe("Breadcrumb", () => {
  it("Can be rendered", () => {
    const tree = renderIntoDocument(<Breadcrumb>
      <BreadcrumbItem><a href="#">Home</a></BreadcrumbItem>
      <BreadcrumbItem active="true">I am here</BreadcrumbItem>
    </Breadcrumb>)
    
    expect(tree._vNode.dom.outerHTML).toBe(
      '<ol class="breadcrumb"><li class="breadcrumb-item"><a href="#">Home</a></li><li class="active breadcrumb-item">I am here</li></ol>'
    )
  })
})
