import { render } from "inferno"
import { 
  renderIntoDocument,
  findRenderedVNodeWithType,
  findRenderedDOMElementWithClass,
  isVNode,
  isVNodeOfType
} from 'inferno-test-utils'
import { hasClass, getTagName, getInnerHTML } from "../utils"

import InputGroupAddon from '../../dist/Form/InputGroupAddon';

describe('InputGroupAddon', () => {
  it('should render with "div" tag', () => {
    const tree = renderIntoDocument(<InputGroupAddon>Yo!</InputGroupAddon>);

    expect(getTagName(tree._vNode)).toBe('div');
  });

  it('should render children', () => {
    const tree = renderIntoDocument(<InputGroupAddon>Yo!</InputGroupAddon>);

    expect(getInnerHTML(tree._vNode)).toBe('Yo!');
  });

  it('should render with "input-group-addon" class', () => {
    const tree = renderIntoDocument(<InputGroupAddon>Yo!</InputGroupAddon>);

    expect(hasClass(tree._vNode, 'input-group-addon')).toBe(true);
  });

  it('should render additional classes', () => {
    const tree = renderIntoDocument(<InputGroupAddon className="other">Yo!</InputGroupAddon>);

    expect(hasClass(tree._vNode, 'other')).toBe(true);
    expect(hasClass(tree._vNode, 'input-group-addon')).toBe(true);
  });

  it('should render custom tag', () => {
    const tree = renderIntoDocument(<InputGroupAddon tag="main">Yo!</InputGroupAddon>);

    expect(getTagName(tree._vNode)).toBe('main');
  });
});
