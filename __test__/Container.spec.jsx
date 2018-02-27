import { render } from "inferno"
import sinon from "sinon"
import { renderIntoDocument } from './utils'
import { 
  scryRenderedDOMElementsWithClass,
  scryRenderedDOMElementsWithTag,
  findRenderedDOMElementWithClass,
  findRenderedDOMElementWithTag,
  isVNode
} from 'inferno-test-utils'

import { hasClass, getTagName, getInstance, getInnerHTML, getOuterHTML, unmountComponentAtNode } from "./utils"

import Container from '../dist/Container';

describe('Container', () => {
  it('should render .container markup', () => {
    const tree = renderIntoDocument(<Container />);

    expect(getOuterHTML(tree.$V)).toBe('<div class="container"></div>');
  });

  it('should render .container-fluid markup', () => {
    const tree = renderIntoDocument(<Container fluid />);

    expect(getOuterHTML(tree.$V)).toBe('<div class="container-fluid"></div>');
  });

  it('should render children', () => {
    const tree = renderIntoDocument(<Container>Children</Container>);

    expect(getOuterHTML(tree.$V)).toBe('<div class="container">Children</div>');
  });

  it('should pass additional classNames', () => {
    const tree = renderIntoDocument(<Container className="extra" />);

    expect(hasClass(tree.$V, 'extra')).toBe(true);
    expect(hasClass(tree.$V, 'container')).toBe(true);
  });

  it('should render custom tag', () => {
    const tree = renderIntoDocument(<Container tag="main">Yo!</Container>);

    expect(getInnerHTML(tree.$V)).toBe('Yo!');
    expect(hasClass(tree.$V, 'container')).toBe(true);
    expect(getTagName(tree.$V)).toBe('main');
  });
});
