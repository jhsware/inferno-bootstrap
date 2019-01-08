import { render } from "inferno"
import sinon from "sinon"
import { renderIntoElement, triggerEvent } from './utils'
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
    const DOM = renderIntoElement(<Alert>This looks fine!</Alert>)
    
    expect(DOM.outerHTML).toBe(
      '<div class="alert alert-success" role="alert">This looks fine!</div>'
    )
  })

  it("Can be render with color warning", () => {
    const DOM = renderIntoElement(<Alert color="warning">This looks fine!</Alert>)
    
    expect(DOM.outerHTML).toBe(
      '<div class="alert alert-warning" role="alert">This looks fine!</div>'
    )
  })

  it("Can be render with a close button", () => {
    const DOM = renderIntoElement(<Alert onClose={() => {}}>This looks fine!</Alert>)
    expect(DOM.getElementsByTagName('button').length).toBe(1)
  })

  it("Clicking close button calls onClose", () => {
    const onClick = jest.fn()
    const DOM = renderIntoElement(<Alert onClose={onClick}>This looks fine!</Alert>, container)

    const btnEl = container.getElementsByTagName('button')[0]
    triggerEvent('click', btnEl)
    
    expect(onClick).toHaveBeenCalledTimes(1)
  })
})
