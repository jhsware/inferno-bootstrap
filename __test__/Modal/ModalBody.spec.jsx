import { render } from "inferno"
import { renderIntoElement } from '../utils'

import { getInstance, hasClass, getTagName, getInnerHTML } from "../utils"

import ModalBody from '../../lib/Modal/ModalBody'

describe('ModalBody', () => {
  it('should render with "modal-body" class', () => {
    const DOM = renderIntoElement(<ModalBody>Yo!</ModalBody>);

    expect(DOM.innerHTML).toBe('Yo!');
    expect(hasClass(DOM, 'modal-body')).toBe(true);
  });

  it('should render additional classes', () => {
    const DOM = renderIntoElement(<ModalBody className="other">Yo!</ModalBody>);

    expect(hasClass(DOM, 'other')).toBe(true);
    expect(hasClass(DOM, 'modal-body')).toBe(true);
  });

  it('should render custom tag', () => {
    const DOM = renderIntoElement(<ModalBody tag="main">Yo!</ModalBody>);


    expect(DOM.innerHTML).toBe('Yo!');
    expect(hasClass(DOM, 'modal-body')).toBe(true);
    expect(getTagName(DOM)).toBe('main');
  });
});
