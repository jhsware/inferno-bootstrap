import { render } from "inferno"
import { renderIntoElement } from '../utils'
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
    const DOM = renderIntoElement(<InputGroupAddon addonType="append">Yo!</InputGroupAddon>);

    expect(getTagName(DOM)).toBe('div');
  });

  it('should render children', () => {
    const DOM = renderIntoElement(<InputGroupAddon addonType="append">Yo!</InputGroupAddon>);

    expect(DOM.innerHTML).toBe('<span class="input-group-text">Yo!</span>');
  });

  it('should render with "input-group-*" classes', () => {
    const treePre = renderIntoElement(<InputGroupAddon addonType="prepend">Yo!</InputGroupAddon>);
    const treeApp = renderIntoElement(<InputGroupAddon addonType="append">Yo!</InputGroupAddon>);
           
    expect(hasClass(treePre, 'input-group-prepend')).toBe(true);
    expect(hasClass(treeApp, 'input-group-append')).toBe(true);
  });

  it('should render additional classes', () => {
    const DOM = renderIntoElement(<InputGroupAddon addonType="append" className="other">Yo!</InputGroupAddon>);

    expect(hasClass(DOM, 'other')).toBe(true);
    expect(hasClass(DOM, 'input-group-append')).toBe(true);
  });

  it('should render custom tag', () => {
    const DOM = renderIntoElement(<InputGroupAddon addonType="append" tag="main">Yo!</InputGroupAddon>);

    expect(getTagName(DOM)).toBe('main');
  });
});
