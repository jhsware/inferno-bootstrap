import { render } from "inferno"
import sinon from "sinon"
import { 
  renderIntoDocument,
  findRenderedVNodeWithType,
  findRenderedDOMElementWithClass,
  isVNode
} from 'inferno-test-utils'

import { hasClass, getTagName, getInstance, getInnerHTML, getOuterHTML, unmountComponentAtNode } from "../utils"

import ListGroupItemText from "../../lib/List/ListGroupItemText"

describe('ListGroupItem', () => {
  it('should render children', () => {
    const tree = renderIntoDocument(<ListGroupItemText>Yo!</ListGroupItemText>);
    expect(getInnerHTML(tree._vNode)).toBe('Yo!');
  });

  it('should render with "list-group-item-text" class', () => {
    const tree = renderIntoDocument(<ListGroupItemText>Yo!</ListGroupItemText>);
    expect(hasClass(tree._vNode, 'list-group-item-text')).toBe(true);
  });
});
