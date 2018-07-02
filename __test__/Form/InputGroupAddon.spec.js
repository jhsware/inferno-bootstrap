import { render } from "inferno"
import { renderIntoDocument } from '../utils'
import { 
  findRenderedVNodeWithType,
  findRenderedDOMElementWithClass,
  isVNode,
  isVNodeOfType
} from 'inferno-test-utils'
import { hasClass, getTagName, getInnerHTML } from "../utils"

import InputGroupAddon from '../../lib/Form/InputGroupAddon';

describe('InputGroupAddon', () => {
  it('should render with "div" tag', () => {
    const tree = renderIntoDocument(<InputGroupAddon addonType="append">Yo!</InputGroupAddon>);

    expect(getTagName(tree.$V)).toBe('div');
  });

  it('should render children', () => {
    const tree = renderIntoDocument(<InputGroupAddon addonType="append">Yo!</InputGroupAddon>);

    expect(getInnerHTML(tree.$V)).toBe('<span class="input-group-text">Yo!</span>');
  });

  it('should render with "input-group-*" classes', () => {
    const treePre = renderIntoDocument(<InputGroupAddon addonType="prepend">Yo!</InputGroupAddon>);
    const treeApp = renderIntoDocument(<InputGroupAddon addonType="append">Yo!</InputGroupAddon>);
           
    expect(hasClass(treePre.$V, 'input-group-prepend')).toBe(true);
    expect(hasClass(treeApp.$V, 'input-group-append')).toBe(true);
  });

  it('should render additional classes', () => {
    const tree = renderIntoDocument(<InputGroupAddon addonType="append" className="other">Yo!</InputGroupAddon>);

    expect(hasClass(tree.$V, 'other')).toBe(true);
    expect(hasClass(tree.$V, 'input-group-append')).toBe(true);
  });

  it('should render custom tag', () => {
    const tree = renderIntoDocument(<InputGroupAddon addonType="append" tag="main">Yo!</InputGroupAddon>);

    expect(getTagName(tree.$V)).toBe('main');
  });
});
