import { render } from "inferno"
import sinon from "sinon"
import { renderIntoDocument } from './utils'
import { 
  scryRenderedDOMElementsWithTag,
  findRenderedDOMElementWithTag,
  isVNode
} from 'inferno-test-utils'

import { hasClass, getTagName, getInnerHTML, getOuterHTML } from "./utils"

import Jumbotron from '../lib/Jumbotron';

describe('Jumbotron', () => {
  it('should render children', () => {
    const tree = renderIntoDocument(<Jumbotron>Hello World</Jumbotron>);

    expect(getInnerHTML(tree.$V)).toBe('Hello World');
  });

  it('should render elements as children', () => {
    const tree = renderIntoDocument(<Jumbotron><h1>Hello from h1</h1></Jumbotron>);

    expect(scryRenderedDOMElementsWithTag(tree, 'h1').length).toBe(1);
    expect(findRenderedDOMElementWithTag(tree, 'h1').innerHTML).toBe('Hello from h1');
  });

  it('should have class jumbotron', () => {
    const tree = renderIntoDocument(<Jumbotron>Hello</Jumbotron>);

    expect(hasClass(tree.$V, 'jumbotron')).toBe(true);
  });

  it('should render fluid jumbotron', () => {
    const tree = renderIntoDocument(<Jumbotron fluid>Hello</Jumbotron>);

    expect(hasClass(tree.$V, 'jumbotron')).toBe(true);
    expect(hasClass(tree.$V, 'jumbotron-fluid')).toBe(true);
  });

  it('should render custom class', () => {
    const tree = renderIntoDocument(<Jumbotron className="custom-class">Hello</Jumbotron>);

    expect(hasClass(tree.$V, 'custom-class')).toBe(true);
  });
});
