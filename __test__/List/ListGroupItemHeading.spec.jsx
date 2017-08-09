import { render } from "inferno"
import sinon from "sinon"
import { 
  renderIntoDocument,
  findRenderedVNodeWithType,
  findRenderedDOMElementWithClass,
  isVNode
} from 'inferno-test-utils'

import { hasClass, getTagName, getInstance, getInnerHTML, getOuterHTML, unmountComponentAtNode } from "../utils"

import ListGroupItemHeading from "../../lib/List/ListGroupItemHeading.jsx"

describe('ListGroupItemHeading', () => {
  it('should render children', () => {
    const tree = renderIntoDocument(<ListGroupItemHeading>Yo!</ListGroupItemHeading>);
    expect(getInnerHTML(tree._vNode)).toBe('Yo!');
  });

  it('should render with "list-group-item-heading" class', () => {
    const tree = renderIntoDocument(<ListGroupItemHeading>Yo!</ListGroupItemHeading>);
    expect(hasClass(tree._vNode, 'list-group-item-heading')).toBe(true);
  });
});