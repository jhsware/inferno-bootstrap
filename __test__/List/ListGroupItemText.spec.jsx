import { render } from "inferno"
import sinon from "sinon"
import { renderIntoDocument } from '../utils'
import { 
  findRenderedVNodeWithType,
  findRenderedDOMElementWithClass,
  isVNode
} from 'inferno-test-utils'

import { hasClass, getTagName, getInstance, getInnerHTML, getOuterHTML, unmountComponentAtNode } from "../utils"

import ListGroupItemText from "../../dist/List/ListGroupItemText"

describe('ListGroupItem', () => {
  it('should render children', () => {
    const tree = renderIntoDocument(<ListGroupItemText>Yo!</ListGroupItemText>);
    expect(getInnerHTML(tree.$V)).toBe('Yo!');
  });

  it('should render with "list-group-item-text" class', () => {
    const tree = renderIntoDocument(<ListGroupItemText>Yo!</ListGroupItemText>);
    expect(hasClass(tree.$V, 'list-group-item-text')).toBe(true);
  });
});
