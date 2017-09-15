import { render } from "inferno"
import { renderIntoDocument } from 'inferno-test-utils'

import { getInstance, hasClass, getTagName, getInnerHTML } from "../utils"
import ModalFooter from '../../lib/Modal/ModalFooter';

describe('ModalFooter', () => {
  it('should render with "modal-footer" class', () => {
    const tree = renderIntoDocument(<ModalFooter>Yo!</ModalFooter>);

    expect(getInnerHTML(tree._vNode)).toBe('Yo!');
    expect(hasClass(tree._vNode, 'modal-footer')).toBe(true);
  });

  it('should render additional classes', () => {
    const tree = renderIntoDocument(<ModalFooter className="other">Yo!</ModalFooter>);

    expect(hasClass(tree._vNode, 'modal-footer')).toBe(true);
    expect(hasClass(tree._vNode, 'other')).toBe(true);
  });

  it('should render custom tag', () => {
    const tree = renderIntoDocument(<ModalFooter tag="main">Yo!</ModalFooter>);

    expect(getInnerHTML(tree._vNode)).toBe('Yo!');
    expect(hasClass(tree._vNode, 'modal-footer')).toBe(true);
    expect(getTagName(tree._vNode)).toBe('main');
  });
});
