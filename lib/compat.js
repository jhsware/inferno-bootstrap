import Component from 'inferno-component'
import {
  cloneVNode,
  createVNode,
  render
} from "inferno";

/* COMPATIBILITY */
// TODO: Rewrite implementation for Inferno

export function unmountComponentAtNode(container) {
  render(null, container);
  return true;
}

export function unstable_renderSubtreeIntoContainer(
  parentComponent,
  vNode,
  container,
  callback
) {
  const wrapperVNode = createVNode(4, WrapperComponent, null, null, {
    children: vNode,
    context: parentComponent.context
  });
  const component = render(wrapperVNode, container);

  if (callback) {
    // callback gets the component as context, no other argument.
    callback.call(component);
  }
  return component;
}

export class WrapperComponent extends Component {
  getChildContext() {
    // tslint:disable-next-line
    return this.props["context"];
  }

  render(props) {
    return props.children;
  }
}

/* /COMPATIBILITY */
