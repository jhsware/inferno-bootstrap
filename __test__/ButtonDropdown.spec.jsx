import { render } from "inferno"
import sinon from "sinon"
import { 
  renderIntoDocument,
  scryRenderedDOMElementsWithClass,
  scryRenderedDOMElementsWithTag,
  findRenderedDOMElementWithClass,
  findRenderedDOMElementWithTag,
  isVNode
} from 'inferno-test-utils'

import { hasClass, getTagName, getInstance, getInnerHTML, getOuterHTML, unmountComponentAtNode, getAnimationFramPolyfill } from "./utils"

getAnimationFramPolyfill()

import ButtonDropdown from '../lib/ButtonDropdown.jsx';
import DropdownToggle from '../lib/DropdownToggle.jsx';
import DropdownMenu from '../lib/DropdownMenu.jsx';
import DropdownItem from '../lib/DropdownItem.jsx';

describe('ButtonDropdown', () => {
  let isOpen;
  let toggle;

  beforeEach(() => {
    isOpen = false;
    toggle = () => { isOpen = !isOpen; };
  });

  it('should render a single child', () => {
    const tree = renderIntoDocument(<ButtonDropdown isOpen={isOpen} toggle={toggle}>Ello world</ButtonDropdown>);

    expect(findRenderedDOMElementWithClass(tree, 'btn-group').innerHTML).toBe('Ello world');
  });

  it('should render multiple children when isOpen', () => {
    isOpen = true;
    const tree = renderIntoDocument(
      <ButtonDropdown isOpen={isOpen} toggle={toggle}>
        <DropdownToggle>Toggle</DropdownToggle>
        <DropdownMenu>
          <DropdownItem>Test</DropdownItem>
        </DropdownMenu>
      </ButtonDropdown>
    );

    expect(findRenderedDOMElementWithClass(tree, 'btn').innerHTML).toBe('Toggle');
    expect(scryRenderedDOMElementsWithClass(tree, 'btn-group').length).toBe(1);
    expect(scryRenderedDOMElementsWithClass(tree, 'dropdown-item').length).toBe(1);
    // expect(wrapper.children().length).toBe(2);
  });
});
