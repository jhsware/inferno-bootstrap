import { render } from "inferno"
import sinon from "sinon"
import { renderIntoDocument, triggerEvent } from './utils'
import { 
  findRenderedVNodeWithType,
  isVNode
} from 'inferno-test-utils'

import Alert from "../lib/Alert"

describe("Alert", () => {

  let container;

  beforeEach(function() {
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  afterEach(function() {
    render(null, container);
    container.innerHTML = '';
    document.body.removeChild(container);
  });

  it("Can be rendered", () => {
    const tree = renderIntoDocument(<Alert>This looks fine!</Alert>)
    
    expect(tree.$LI.dom.outerHTML).toBe(
      '<div class="alert alert-success" role="alert">This looks fine!</div>'
    )
  })

  it("Can be render with color warning", () => {
    const tree = renderIntoDocument(<Alert color="warning">This looks fine!</Alert>)
    
    expect(tree.$LI.dom.outerHTML).toBe(
      '<div class="alert alert-warning" role="alert">This looks fine!</div>'
    )
  })

  it("Can be render with a close button", () => {
    const tree = renderIntoDocument(<Alert onClose={() => {}}>This looks fine!</Alert>)
    
    const buttonNode = findRenderedVNodeWithType(tree, 'button')
    expect(isVNode(buttonNode)).toBe(true)
  })

  it("Clicking close button calls onClose", () => {
    const onClick = jest.fn()
    const tree = renderIntoDocument(<Alert onClose={onClick}>This looks fine!</Alert>, container)

    const btnEl = container.getElementsByTagName('button')[0]
    triggerEvent('click', btnEl)
    
    expect(onClick).toHaveBeenCalledTimes(1)
  })
})
