import { render } from "inferno"
import { renderIntoDocument } from 'inferno-test-utils'

import { getInstance, hasClass, getTagName, getInnerHTML } from "../utils"

import ModalBody from '../../lib/Modal/ModalBody.jsx'

describe('ModalBody', () => {
  it('should render with "modal-body" class', () => {
    const tree = renderIntoDocument(<ModalBody>Yo!</ModalBody>);

    expect(getInnerHTML(tree._vNode)).toBe('Yo!');
    expect(hasClass(tree._vNode, 'modal-body')).toBe(true);
  });

  it('should render additional classes', () => {
    const tree = renderIntoDocument(<ModalBody className="other">Yo!</ModalBody>);

    expect(hasClass(tree._vNode, 'other')).toBe(true);
    expect(hasClass(tree._vNode, 'modal-body')).toBe(true);
  });

  it('should render custom tag', () => {
    const tree = renderIntoDocument(<ModalBody el="main">Yo!</ModalBody>);


    expect(getInnerHTML(tree._vNode)).toBe('Yo!');
    expect(hasClass(tree._vNode, 'modal-body')).toBe(true);
    expect(getTagName(tree._vNode)).toBe('main');
  });
});
