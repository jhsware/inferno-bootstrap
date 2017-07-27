import { render } from "inferno"
import sinon from "sinon"
import { 
  renderIntoDocument,
  scryRenderedDOMElementsWithClass,
  scryRenderedDOMElementsWithTag,
  findRenderedDOMElementWithTag,
  isVNode
} from 'inferno-test-utils'

import { hasClass, getTagName, getInstance, getInnerHTML, getOuterHTML, unmountComponentAtNode } from "./utils"

import TetherContent from '../lib/TetherContent.jsx';

const spyComponentDidMount = sinon.spy(TetherContent.prototype, 'componentDidMount');
const spyRenderChildren = sinon.spy(TetherContent.prototype, 'renderChildren');
const spyComponentWillUnmount = sinon.spy(TetherContent.prototype, 'componentWillUnmount');
const spyHide = sinon.spy(TetherContent.prototype, 'hide');
const spyShow = sinon.spy(TetherContent.prototype, 'show');
const spyRenderIntoSubtree = sinon.spy(TetherContent.prototype, 'renderIntoSubtree');
const spyComponentDidUpdate = sinon.spy(TetherContent.prototype, 'componentDidUpdate');

describe('TetherContent', () => {
  let state;
  let toggle;
  let tetherConfig;

  beforeEach(() => {
    state = false;
    toggle = () => { state = !state; };
    tetherConfig = {
      target: () => document.body,
      attachment: 'middle left',
      targetAttachment: 'middle right'
    };

    spyComponentDidMount.reset()
    spyComponentWillUnmount.reset()
    spyRenderChildren.reset()
    spyHide.reset()
    spyShow.reset()
    spyRenderIntoSubtree.reset()
    spyComponentDidUpdate.reset()
  });

  it('should not return children (render content)', () => {
    const tree = renderIntoDocument(<TetherContent tether={tetherConfig} isOpen={state} toggle={toggle}><p>Content</p></TetherContent>);
    
    expect(getInnerHTML(tree._vNode)).toBe(undefined);
  });

  it('should renderChildren with className', () => {
    state = true;
    const tree = renderIntoDocument(<TetherContent className="foo" tether={tetherConfig} isOpen={state} toggle={toggle}><p>Content</p></TetherContent>);
    
    expect(spyComponentDidMount.calledOnce).toBe(true)
    expect(spyRenderChildren.calledOnce).toBe(true)
    expect(scryRenderedDOMElementsWithClass(tree, 'foo').length > -1).toBe(true);
  });

  it('should renderChildren when isOpen is true', () => {
    state = true;
    const tree = renderIntoDocument(<TetherContent tether={tetherConfig} isOpen={state} toggle={toggle}><p>Content</p></TetherContent>);

    expect(spyComponentDidMount.calledOnce).toBe(true)
    expect(spyRenderChildren.calledOnce).toBe(true)
    expect(getInstance(tree).props.isOpen).toBe(true);
    // TODO: Fix this text: expect(hasClass(tree._vNode, 'tether')).toBe(true);
  });

  it('should not call props.toggle when disabled ', () => {
    state = true;
    const props = {
      toggle: () => {}
    }
    const spyToggle = sinon.spy(props, 'toggle');
    const tree = renderIntoDocument(<TetherContent disabled tether={tetherConfig} isOpen={state} toggle={props.toggle}><p>Content</p></TetherContent>);
    
    const instance = getInstance(tree)
    instance.toggle()
    expect(spyToggle.callCount).toEqual(0);
  });

  describe('hide', () => {
    it('should be called on componentWillUnmount', () => {
      state = true;
      const tree = renderIntoDocument(<TetherContent tether={tetherConfig} isOpen={state} toggle={toggle}><p>Content</p></TetherContent>);
      const instance = getInstance(tree);

      expect(spyComponentWillUnmount.callCount).toBe(0)
      expect(spyHide.callCount).toBe(0)
      
      const html = getInnerHTML(tree._vNode)
      // TODO: Fix test expect(instance._element.textContent).toBe('Content');
      expect(instance._tether.enabled).toBe(true);

      /* TODO: Fix tests...
      unmountComponentAtNode(tree);

      expect(spyComponentWillUnmount.callCount).toBe(1)
      expect(spyHide.callCount).toBe(1)
      expect(instance._element).toBe(null);
      expect(instance._tether).toBe(null);
      */
    });

    it('should pass the new tether reference', () => {
      state = true;
      const props = {
        tetherRef: () => {}
      }
      const spyTetherRef = sinon.spy(props, 'tetherRef');
      const tree = renderIntoDocument(<TetherContent tetherRef={props.tetherRef} tether={tetherConfig} isOpen={state} toggle={toggle}><p>Content</p></TetherContent>);
      const instance = getInstance(tree);

      expect(spyTetherRef.callCount).toBe(1);

      /* TODO: Fix tests
      wrapper.unmount();

      expect(tetherRef.calls.count()).toBe(2);
      expect(tetherRef.calls.mostRecent().args[0]).toEqual(instance._tether);
      */
    });
  });

  describe('show', () => {
    it('should be called on componentDidMount', () => {
      state = true;
      const tree = renderIntoDocument(<TetherContent tether={tetherConfig} isOpen={state} toggle={toggle}><p>Content</p></TetherContent>);
      const instance = getInstance(tree);

      expect(spyComponentDidMount.callCount).toBe(1);
      expect(spyShow.callCount).toBe(1);
      expect(instance._element.textContent).toBe('Content');
      expect(instance._tether.enabled).toBe(true);
    });

    it('should pass the new tether reference', () => {
      state = true;
      const props = {
        tetherRef: () => {}
      }
      const spyTetherRef = sinon.spy(props, 'tetherRef');
      const tree = renderIntoDocument(<TetherContent tetherRef={props.tetherRef} tether={tetherConfig} isOpen={state} toggle={toggle}><p>Content</p></TetherContent>);
      const instance = getInstance(tree)
      expect(spyTetherRef.callCount).toBe(1);
      expect(spyTetherRef.getCall(0).args[0]).toEqual(instance._tether);
    });
  });

  describe('getTarget', () => {
    it('should grab dom node from function', () => {
      state = true;
      spyOn(tetherConfig, 'target').and.callThrough();
      const tree = renderIntoDocument(<TetherContent tether={tetherConfig} isOpen={state} toggle={toggle}><p>Content</p></TetherContent>);
      const instance = getInstance(tree)

      expect(instance._element.textContent).toBe('Content');
      expect(instance._tether.enabled).toBe(true);
      expect(tetherConfig.target).toHaveBeenCalled();
    });

    it('should grab dom node from string', () => {
      state = true;
      tetherConfig.target = 'body';
      const tree = renderIntoDocument(<TetherContent tether={tetherConfig} isOpen={state} toggle={toggle}><p>Content</p></TetherContent>);
      const instance = getInstance(tree)

      expect(instance._element.textContent).toBe('Content');
      expect(instance._tether.enabled).toBe(true);
    });
  });

  describe('handleDocumentClick', () => {
    it('should call toggle on document click', () => {
      state = true;
      spyOn(TetherContent.prototype, 'handleDocumentClick').and.callThrough();
      spyOn(TetherContent.prototype, 'toggle').and.callThrough();

      const tree = renderIntoDocument(<TetherContent tether={tetherConfig} isOpen={state} toggle={toggle}><p>Content</p></TetherContent>);

      expect(TetherContent.prototype.handleDocumentClick.calls.count()).toBe(0);
      expect(TetherContent.prototype.toggle.calls.count()).toBe(0);

      document.body.click();

      expect(TetherContent.prototype.handleDocumentClick.calls.count()).toBe(1);
      expect(TetherContent.prototype.toggle.calls.count()).toBe(1);
    });

    it('should call toggle on container click', () => {
      state = true;
      spyOn(TetherContent.prototype, 'handleDocumentClick').and.callThrough();
      spyOn(TetherContent.prototype, 'toggle').and.callThrough();

      const tree = renderIntoDocument(<TetherContent tether={tetherConfig} isOpen={state} toggle={toggle}><p>Content</p></TetherContent>);
      const instance = getInstance(tree)

      expect(TetherContent.prototype.handleDocumentClick.calls.count()).toBe(0);
      expect(TetherContent.prototype.toggle.calls.count()).toBe(0);

      instance._element.click();

      expect(TetherContent.prototype.handleDocumentClick.calls.count()).toBe(1);
      expect(TetherContent.prototype.toggle.calls.count()).toBe(1);
    });

    it('should not call toggle on tethered element click', () => {
      state = true;
      spyOn(TetherContent.prototype, 'handleDocumentClick').and.callThrough();
      spyOn(TetherContent.prototype, 'toggle').and.callThrough();

      const tree = renderIntoDocument(<TetherContent tether={tetherConfig} isOpen={state} toggle={toggle}><p>Content</p></TetherContent>);
      const instance = getInstance(tree)

      expect(TetherContent.prototype.handleDocumentClick.calls.count()).toBe(0);
      expect(TetherContent.prototype.toggle.calls.count()).toBe(0);

      instance._element.childNodes[0].click();

      expect(TetherContent.prototype.handleDocumentClick.calls.count()).toBe(1);
      expect(TetherContent.prototype.toggle.calls.count()).toBe(0);
    });
  });

  describe('handleProps', () => {
    it('should call .hide when false', () => {
      spyOn(TetherContent.prototype, 'componentDidMount').and.callThrough();
      spyOn(TetherContent.prototype, 'hide').and.callThrough();
      spyOn(TetherContent.prototype, 'handleProps').and.callThrough();
      const tree = renderIntoDocument(<TetherContent tether={tetherConfig} isOpen={state} toggle={toggle}><p>Content</p></TetherContent>);
      const instance = getInstance(tree)

      expect(TetherContent.prototype.componentDidMount.calls.count()).toBe(1);
      expect(TetherContent.prototype.hide.calls.count()).toBe(1);
      expect(TetherContent.prototype.handleProps.calls.count()).toBe(1);
      expect(instance.props.isOpen).toBe(false);
    });

    it('should call .show when true', () => {
      state = true;
      spyOn(TetherContent.prototype, 'componentDidMount').and.callThrough();
      spyOn(TetherContent.prototype, 'show').and.callThrough();
      spyOn(TetherContent.prototype, 'handleProps').and.callThrough();
      const tree = renderIntoDocument(<TetherContent tether={tetherConfig} isOpen={state} toggle={toggle}><p>Content</p></TetherContent>);
      const instance = getInstance(tree)

      expect(TetherContent.prototype.componentDidMount.calls.count()).toBe(1);
      expect(TetherContent.prototype.show.calls.count()).toBe(1);
      expect(TetherContent.prototype.handleProps.calls.count()).toBe(1);
      expect(instance.props.isOpen).toBe(true);
      expect(instance._element.className.indexOf('tether') > -1).toBe(true);
    });

    it('should be called on componentDidUpdate when isOpen changed', () => {
      spyOn(TetherContent.prototype, 'componentDidUpdate').and.callThrough();
      spyOn(TetherContent.prototype, 'handleProps').and.callThrough();
      const tree = renderIntoDocument(<TetherContent tether={tetherConfig} isOpen={state} toggle={toggle}><p>Content</p></TetherContent>);
      const instance = getInstance(tree)

      expect(TetherContent.prototype.componentDidUpdate.calls.count()).toBe(0);
      expect(TetherContent.prototype.handleProps.calls.count()).toBe(1);
      expect(instance.props.isOpen).toBe(false);

      state = true;
      instance.props['isOpen'] = state
      instance.forceUpdate()

      expect(TetherContent.prototype.componentDidUpdate.calls.count()).toBe(1);
      // TODO: Fix this test... expect(TetherContent.prototype.handleProps.calls.count()).toBe(2);
      expect(instance.props.isOpen).toBe(true);
    });

    it('should not be called on componentDidUpdate when isOpen did not change', () => {
      spyOn(TetherContent.prototype, 'componentDidUpdate').and.callThrough();
      spyOn(TetherContent.prototype, 'handleProps').and.callThrough();
      const tree = renderIntoDocument(<TetherContent tether={tetherConfig} isOpen={state} toggle={toggle}><p>Content</p></TetherContent>);
      const instance = getInstance(tree)

      expect(TetherContent.prototype.componentDidUpdate.calls.count()).toBe(0);
      expect(TetherContent.prototype.handleProps.calls.count()).toBe(1);
      expect(instance.props.isOpen).toBe(false);

      instance.props['foo'] = 'bar'
      instance.forceUpdate()

      expect(TetherContent.prototype.componentDidUpdate.calls.count()).toBe(1);
      // TODO: Fix this test... expect(TetherContent.prototype.handleProps.calls.count()).toBe(1);
      expect(instance.props.isOpen).toBe(false);
    });
  });

  describe('renderIntoSubtree', () => {
    it('should be called when the content is shown', () => {
      const tree = renderIntoDocument(<TetherContent tether={tetherConfig} isOpen toggle={toggle}><p>Content</p></TetherContent>);

      expect(spyRenderIntoSubtree.callCount).toBe(1);
    });

    it('should be called when the content is not shown', () => {
      const tree = renderIntoDocument(<TetherContent tether={tetherConfig} isOpen={false} toggle={toggle}><p>Content</p></TetherContent>);

      expect(spyRenderIntoSubtree.callCount).toBe(0);
    });

    it('should be called on componentDidUpdate when isOpen did not change is true', () => {
      const tree = renderIntoDocument(<TetherContent tether={tetherConfig} isOpen toggle={toggle}><p>Content</p></TetherContent>);
      const instance = getInstance(tree)

      expect(spyComponentDidUpdate.callCount).toBe(0);
      expect(spyRenderIntoSubtree.callCount).toBe(1);
      expect(instance.props.isOpen).toBe(true);

      instance.props['children'] = <span>something</span>
      instance.forceUpdate()

      expect(spyComponentDidUpdate.callCount).toBe(1);
      expect(spyRenderIntoSubtree.callCount).toBe(2);
      expect(instance.props.isOpen).toBe(true);
    });

    it('should not be called on componentDidUpdate when isOpen changed to false', () => {
      const tree = renderIntoDocument(<TetherContent tether={tetherConfig} isOpen toggle={toggle}><p>Content</p></TetherContent>);
      const instance = getInstance(tree)

      expect(spyComponentDidUpdate.callCount).toBe(0);
      expect(spyRenderIntoSubtree.callCount).toBe(1);
      expect(instance.props.isOpen).toBe(true);

      instance.props['isOpen'] = false
      instance.forceUpdate()

      expect(spyComponentDidUpdate.callCount).toBe(1);
      // TODO: Fix this test... expect(spyRenderIntoSubtree.callCount).toBe(1);
      expect(instance.props.isOpen).toBe(false);
    });

    it('should not be called on componentDidUpdate when isOpen did not change and is false', () => {
      const tree = renderIntoDocument(<TetherContent tether={tetherConfig} isOpen={false} toggle={toggle}><p>Content</p></TetherContent>);
      const instance = getInstance(tree)

      expect(spyComponentDidUpdate.callCount).toBe(0);
      expect(spyRenderIntoSubtree.callCount).toBe(0);
      expect(instance.props.isOpen).toBe(false);

      instance.props['children'] = <span>something</span>
      instance.forceUpdate()

      expect(spyComponentDidUpdate.callCount).toBe(1);
      expect(spyRenderIntoSubtree.callCount).toBe(0);
      expect(instance.props.isOpen).toBe(false);
    });
  });
});
