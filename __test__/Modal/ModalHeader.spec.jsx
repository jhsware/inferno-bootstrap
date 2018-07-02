import { render } from "inferno"
import { renderIntoDocument } from '../utils'
import {
  scryRenderedDOMElementsWithClass,
  findRenderedDOMElementWithTag
} from 'inferno-test-utils'

import { getInstance, hasClass, getTagName, getInnerHTML, getOuterHTML } from "../utils"
import ModalHeader from '../../lib/Modal/ModalHeader';

describe('ModalHeader', () => {
  it('should render with "modal-header" class', () => {
    const tree = renderIntoDocument(<ModalHeader>Yo!</ModalHeader>);

    expect(getInnerHTML(tree.$V)).toBe('<h4 class=\"modal-title\">Yo!</h4>');
    expect(hasClass(tree.$V, 'modal-header')).toBe(true);
  });

  it('should render additional classes', () => {
    const tree = renderIntoDocument(<ModalHeader className="other">Yo!</ModalHeader>);

    expect(hasClass(tree.$V, 'other')).toBe(true);
    expect(hasClass(tree.$V, 'modal-header')).toBe(true);
  });

  it('should render close button', () => {
    const tree = renderIntoDocument(<ModalHeader toggle={() => {}} className="other">Yo!</ModalHeader>);

    expect(hasClass(tree.$V, 'other')).toBe(true);
    expect(hasClass(tree.$V, 'modal-header')).toBe(true);
    expect(scryRenderedDOMElementsWithClass(tree, 'close').length).toBe(1);
  });

  it('should render custom tag', () => {
    const tree = renderIntoDocument(<ModalHeader tag="p">Yo!</ModalHeader>);

    expect(getInnerHTML(tree.$V)).toBe('<p class=\"modal-title\">Yo!</p>');
    expect(findRenderedDOMElementWithTag(tree, 'p')).toBeDefined();
  });

  it('should render custom wrapping tag', () => {
    const tree = renderIntoDocument(<ModalHeader wrapTag="main">Yo!</ModalHeader>);

    expect(getTagName(tree.$V)).toBe('main');
  });
});
