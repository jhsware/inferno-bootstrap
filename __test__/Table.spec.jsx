import { render } from "inferno"
import { 
  renderIntoDocument,
  findRenderedVNodeWithType,
  findRenderedDOMElementWithClass,
  scryRenderedDOMElementsWithClass,
  isVNode
} from 'inferno-test-utils'
import { hasClass, getTagName, getInstance, getInnerHTML, getOuterHTML, unmountComponentAtNode } from "./utils"
import Table from '../dist/Table';


describe('Table', () => {
  it('should render with "table" class', () => {
    const tree = renderIntoDocument(<Table>Yo!</Table>)
    
    expect(tree._vNode.dom.outerHTML).toBe(
      '<table class="table">Yo!</table>'
    )
  });

  it('should render additional classes', () => {
    const tree = renderIntoDocument(<Table className="other">Yo!</Table>)

    expect(hasClass(tree._vNode, 'other')).toBe(true);
    expect(hasClass(tree._vNode, 'table')).toBe(true);
  });

  it('should render custom tag', () => {
    const tree = renderIntoDocument(<Table tag="div">Yo!</Table>)

    expect(getInnerHTML(tree._vNode)).toBe('Yo!');
    expect(hasClass(tree._vNode, 'table')).toBe(true);
    expect(getTagName(tree._vNode)).toBe('div');
  });

  it('should render modifier classes', () => {
    const tree = renderIntoDocument(<Table size="sm" bordered striped dark hover>Yo!</Table>)

    expect(getInnerHTML(tree._vNode)).toBe('Yo!');
    expect(hasClass(tree._vNode, 'table')).toBe(true);
    expect(hasClass(tree._vNode, 'table-sm')).toBe(true);
    expect(hasClass(tree._vNode, 'table-bordered')).toBe(true);
    expect(hasClass(tree._vNode, 'table-striped')).toBe(true);
    expect(hasClass(tree._vNode, 'table-hover')).toBe(true);
    expect(hasClass(tree._vNode, 'table-dark')).toBe(true);
  });

  it('should render responsive wrapper class', () => {
    const tree = renderIntoDocument(<Table responsive>Yo!</Table>)

    expect(getInnerHTML(tree._vNode)).toBe('<table class="table">Yo!</table>');
    expect(hasClass(tree._vNode, 'table-responsive')).toBe(true);
    expect(scryRenderedDOMElementsWithClass(tree, 'table').length).toBe(1);
  });

  it('should render responsive wrapper class for md', () => {
    const tree = renderIntoDocument(<Table responsive="md">Yo!</Table>)

    expect(getInnerHTML(tree._vNode)).toBe('<table class="table">Yo!</table>');
    expect(hasClass(tree._vNode, 'table-responsive-md')).toBe(true);
    expect(scryRenderedDOMElementsWithClass(tree, 'table').length).toBe(1);
  });
});