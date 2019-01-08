import { render } from "inferno"
import sinon from "sinon"
import { renderIntoElement, triggerEvent } from '../utils'
import { 
  findRenderedVNodeWithType,
  findRenderedDOMElementWithClass,
  isVNode
} from 'inferno-test-utils'

import { hasClass, getTagName, getInstance, getInnerHTML, getOuterHTML, unmountComponentAtNode } from "../utils"

import ListGroupItem from "../../lib/List/ListGroupItem"

describe('ListGroupItem', () => {
  it('should render children', () => {
    const DOM = renderIntoElement(<ListGroupItem>Yo!</ListGroupItem>);
    expect(DOM.innerHTML).toBe('Yo!');
  });

  it('should render with "list-group-item" class', () => {
    const DOM = renderIntoElement(<ListGroupItem>Yo!</ListGroupItem>);
    expect(hasClass(DOM, 'list-group-item')).toBe(true);
  });

  it('should render with "active" class when active is passed', () => {
    const DOM = renderIntoElement(<ListGroupItem active>Yo!</ListGroupItem>);
    expect(hasClass(DOM, 'active')).toBe(true);
  });

  it('should render with "disabled" class when disabled is passed', () => {
    const DOM = renderIntoElement(<ListGroupItem disabled>Yo!</ListGroupItem>);
    expect(hasClass(DOM, 'disabled')).toBe(true);
  });

  it('should render with "list-group-item-action" class when action is passed', () => {
    const DOM = renderIntoElement(<ListGroupItem action>Yo!</ListGroupItem>);
    expect(hasClass(DOM, 'list-group-item-action')).toBe(true);
  });

  it('should render with "list-group-item-${color}" class when color is passed', () => {
    const DOM = renderIntoElement(<ListGroupItem color="success">Yo!</ListGroupItem>);
    expect(hasClass(DOM, 'list-group-item-success')).toBe(true);
  });

  it('should prevent click event when disabled is passed', () => {
    const testClick = {
      didClick: () => {}
    }
    const clickSpy = sinon.spy(testClick, 'didClick')
    
    const DOM = renderIntoElement(<ListGroupItem disabled onClick={testClick.didClick}>Yo!</ListGroupItem>);

    triggerEvent('click', DOM)
    
    expect(clickSpy.callCount).toBe(0)
  });
});
