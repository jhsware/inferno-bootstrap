import { render } from "inferno"
import { renderIntoElement } from '../utils'
import {
  scryRenderedDOMElementsWithClass,
  findRenderedDOMElementWithTag
} from 'inferno-test-utils'

import { getInstance, hasClass, getTagName, getInnerHTML, getOuterHTML } from "../utils"
import ModalHeader from '../../lib/Modal/ModalHeader';

describe('ModalHeader', () => {
  it('should render with "modal-header" class', () => {
    const DOM = renderIntoElement(<ModalHeader>Yo!</ModalHeader>);

    expect(DOM.innerHTML).toBe('<h4 class=\"modal-title\">Yo!</h4>');
    expect(hasClass(DOM, 'modal-header')).toBe(true);
  });

  it('should render additional classes', () => {
    const DOM = renderIntoElement(<ModalHeader className="other">Yo!</ModalHeader>);

    expect(hasClass(DOM, 'other')).toBe(true);
    expect(hasClass(DOM, 'modal-header')).toBe(true);
  });

  it('should render close button', () => {
    const DOM = renderIntoElement(<ModalHeader toggle={() => {}} className="other">Yo!</ModalHeader>);

    expect(hasClass(DOM, 'other')).toBe(true);
    expect(hasClass(DOM, 'modal-header')).toBe(true);
    expect(DOM.getElementsByClassName('close').length).toBe(1);
  });

  it('should render custom tag', () => {
    const DOM = renderIntoElement(<ModalHeader tag="p">Yo!</ModalHeader>);

    expect(DOM.innerHTML).toBe('<p class="modal-title">Yo!</p>');
    //expect(findRenderedDOMElementWithTag(tree, 'p')).toBeDefined();
  });

  it('should render custom wrapping tag', () => {
    const DOM = renderIntoElement(<ModalHeader wrapTag="main">Yo!</ModalHeader>);

    expect(getTagName(DOM)).toBe('main');
  });
});
