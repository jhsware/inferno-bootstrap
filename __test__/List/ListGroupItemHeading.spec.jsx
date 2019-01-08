import { render } from "inferno"
import sinon from "sinon"
import { renderIntoElement } from '../utils'
import { 
  findRenderedVNodeWithType,
  findRenderedDOMElementWithClass,
  isVNode
} from 'inferno-test-utils'

import { hasClass, getTagName, getInstance, getInnerHTML, getOuterHTML, unmountComponentAtNode } from "../utils"

import ListGroupItemHeading from "../../lib/List/ListGroupItemHeading"

describe('ListGroupItemHeading', () => {
  it('should render children', () => {
    const DOM = renderIntoElement(<ListGroupItemHeading>Yo!</ListGroupItemHeading>);
    expect(DOM.innerHTML).toBe('Yo!');
  });

  it('should render with "list-group-item-heading" class', () => {
    const DOM = renderIntoElement(<ListGroupItemHeading>Yo!</ListGroupItemHeading>);
    expect(hasClass(DOM, 'list-group-item-heading')).toBe(true);
  });
});
