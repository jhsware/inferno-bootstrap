import { render } from "inferno"
import { renderIntoDocument } from './utils'
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
    const tree = renderIntoDocument(<Table>Yo!</Table>)
    
    expect(tree.$LI.dom.outerHTML).toBe(
      '<table class="table">Yo!</table>'
    )
  });

  it('should render additional classes', () => {
    const tree = renderIntoDocument(<Table className="other">Yo!</Table>)

    expect(hasClass(tree.$LI, 'other')).toBe(true);
    expect(hasClass(tree.$LI, 'table')).toBe(true);
  });

  it('should render custom tag', () => {
    const tree = renderIntoDocument(<Table tag="div">Yo!</Table>)

    expect(getInnerHTML(tree.$LI)).toBe('Yo!');
    expect(hasClass(tree.$LI, 'table')).toBe(true);
    expect(getTagName(tree.$LI)).toBe('div');
  });

  it('should render modifier classes', () => {
    const tree = renderIntoDocument(<Table size="sm" bordered striped dark hover>Yo!</Table>)

    expect(getInnerHTML(tree.$LI)).toBe('Yo!');
    expect(hasClass(tree.$LI, 'table')).toBe(true);
    expect(hasClass(tree.$LI, 'table-sm')).toBe(true);
    expect(hasClass(tree.$LI, 'table-bordered')).toBe(true);
    expect(hasClass(tree.$LI, 'table-striped')).toBe(true);
    expect(hasClass(tree.$LI, 'table-hover')).toBe(true);
    expect(hasClass(tree.$LI, 'table-dark')).toBe(true);
  });

  it('should render responsive wrapper class', () => {
    const tree = renderIntoDocument(<Table responsive>Yo!</Table>)

    expect(getInnerHTML(tree.$LI)).toBe('<table class="table">Yo!</table>');
    expect(hasClass(tree.$LI, 'table-responsive')).toBe(true);
    expect(scryRenderedDOMElementsWithClass(tree, 'table').length).toBe(1);
  });

  it('should render responsive wrapper class for md', () => {
    const tree = renderIntoDocument(<Table responsive="md">Yo!</Table>)

    expect(getInnerHTML(tree.$LI)).toBe('<table class="table">Yo!</table>');
    expect(hasClass(tree.$LI, 'table-responsive-md')).toBe(true);
    expect(scryRenderedDOMElementsWithClass(tree, 'table').length).toBe(1);
  });
});