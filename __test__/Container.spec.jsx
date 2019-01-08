import { render } from "inferno"
import sinon from "sinon"
import { renderIntoElement } from './utils'

import { hasClass, getTagName } from "./utils"

import Container from '../lib/Container';

describe('Container', () => {
  it('should render .container markup', () => {
    const DOM = renderIntoElement(<Container />);

    expect(DOM.outerHTML).toBe('<div class="container"></div>');
  });

  it('should render .container-fluid markup', () => {
    const DOM = renderIntoElement(<Container fluid />);

    expect(DOM.outerHTML).toBe('<div class="container-fluid"></div>');
  });

  it('should render children', () => {
    const DOM = renderIntoElement(<Container>Children</Container>);

    expect(DOM.outerHTML).toBe('<div class="container">Children</div>');
  });

  it('should pass additional classNames', () => {
    const DOM = renderIntoElement(<Container className="extra" />);

    expect(hasClass(DOM, 'extra')).toBe(true);
    expect(hasClass(DOM, 'container')).toBe(true);
  });

  it('should render custom tag', () => {
    const DOM = renderIntoElement(<Container tag="main">Yo!</Container>);

    expect(DOM.innerHTML).toBe('Yo!');
    expect(hasClass(DOM, 'container')).toBe(true);
    expect(getTagName(DOM)).toBe('main');
  });
});
