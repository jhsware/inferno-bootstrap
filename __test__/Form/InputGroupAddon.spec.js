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
    const tree = renderIntoDocument(<InputGroupAddon addonType="append">Yo!</InputGroupAddon>);

    expect(getTagName(tree._vNode)).toBe('div');
  });

  it('should render children', () => {
    const tree = renderIntoDocument(<InputGroupAddon addonType="append">Yo!</InputGroupAddon>);

    expect(getInnerHTML(tree._vNode)).toBe('<span class="input-group-text">Yo!</span>');
  });

  it('should render with "input-group-*" classes', () => {
    const treePre = renderIntoDocument(<InputGroupAddon addonType="prepend">Yo!</InputGroupAddon>);
    const treeApp = renderIntoDocument(<InputGroupAddon addonType="append">Yo!</InputGroupAddon>);
           
    expect(hasClass(treePre._vNode, 'input-group-prepend')).toBe(true);
    expect(hasClass(treeApp._vNode, 'input-group-append')).toBe(true);
  });

  it('should render additional classes', () => {
    const tree = renderIntoDocument(<InputGroupAddon addonType="append" className="other">Yo!</InputGroupAddon>);

    expect(hasClass(tree._vNode, 'other')).toBe(true);
    expect(hasClass(tree._vNode, 'input-group-append')).toBe(true);
  });

  it('should render custom tag', () => {
    const tree = renderIntoDocument(<InputGroupAddon addonType="append" tag="main">Yo!</InputGroupAddon>);

    expect(getTagName(tree._vNode)).toBe('main');
  });
});
