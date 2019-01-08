import { render } from "inferno"
import { renderIntoElement } from './utils'
import { 
  findRenderedVNodeWithType,
  findRenderedDOMElementWithClass,
  scryRenderedDOMElementsWithClass,
  isVNode
} from 'inferno-test-utils'
import { hasClass, getTagName, getInstance, getInnerHTML, getOuterHTML, unmountComponentAtNode } from "./utils"
import Table from '../lib/Table';


describe('Table', () => {
  it('should render with "table" class', () => {
    const DOM = renderIntoElement(<Table>Yo!</Table>)
    
    expect(DOM.outerHTML).toBe(
      '<table class="table">Yo!</table>'
    )
  });

  it('should render additional classes', () => {
    const DOM = renderIntoElement(<Table className="other">Yo!</Table>)

    expect(hasClass(DOM, 'other')).toBe(true);
    expect(hasClass(DOM, 'table')).toBe(true);
  });

  it('should render custom tag', () => {
    const DOM = renderIntoElement(<Table tag="div">Yo!</Table>)

    expect(DOM.innerHTML).toBe('Yo!');
    expect(hasClass(DOM, 'table')).toBe(true);
    expect(getTagName(DOM)).toBe('div');
  });

  it('should render modifier classes', () => {
    const DOM = renderIntoElement(<Table size="sm" bordered striped dark hover>Yo!</Table>)

    expect(DOM.innerHTML).toBe('Yo!');
    expect(hasClass(DOM, 'table')).toBe(true);
    expect(hasClass(DOM, 'table-sm')).toBe(true);
    expect(hasClass(DOM, 'table-bordered')).toBe(true);
    expect(hasClass(DOM, 'table-striped')).toBe(true);
    expect(hasClass(DOM, 'table-hover')).toBe(true);
    expect(hasClass(DOM, 'table-dark')).toBe(true);
  });

  it('should render responsive wrapper class', () => {
    const DOM = renderIntoElement(<Table responsive>Yo!</Table>)

    expect(DOM.innerHTML).toBe('<table class="table">Yo!</table>');
    expect(hasClass(DOM, 'table-responsive')).toBe(true);
    expect(DOM.getElementsByClassName('table').length).toBe(1);
  });

  it('should render responsive wrapper class for md', () => {
    const DOM = renderIntoElement(<Table responsive="md">Yo!</Table>)

    expect(DOM.innerHTML).toBe('<table class="table">Yo!</table>');
    expect(hasClass(DOM, 'table-responsive-md')).toBe(true);
    expect(DOM.getElementsByClassName('table').length).toBe(1);
  });
});