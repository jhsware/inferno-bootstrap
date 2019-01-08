import { render } from "inferno"
import sinon from "sinon"
import { renderIntoElement } from '../utils'
import { 
  findRenderedVNodeWithType,
  findRenderedDOMElementWithClass,
  isVNode
} from 'inferno-test-utils'

import { hasClass, getTagName, getInstance, getInnerHTML, getOuterHTML, unmountComponentAtNode } from "../utils"

import ListGroupItemText from "../../lib/List/ListGroupItemText"

describe('ListGroupItem', () => {
  it('should render children', () => {
    const DOM = renderIntoElement(<ListGroupItemText>Yo!</ListGroupItemText>);
    expect(DOM.innerHTML).toBe('Yo!');
  });

  it('should render with "list-group-item-text" class', () => {
    const DOM = renderIntoElement(<ListGroupItemText>Yo!</ListGroupItemText>);
    expect(hasClass(DOM, 'list-group-item-text')).toBe(true);
  });
});
