import { Component, createComponentVNode } from 'inferno'
import {
  cloneVNode,
  createVNode,
  render
} from "inferno";
import {
  isArray,
  isNullOrUndef
} from "inferno-shared"
import { VNodeFlags } from 'inferno-vnode-flags';

/* COMPATIBILITY */
// TODO: Rewrite implementation for Inferno

export function unmountComponentAtNode(container) {
  render(null, container);
  return true;
}

export function unstable_renderSubtreeIntoContainer(parentComponent, vNode, container, callback) {
  const wrapperVNode = createComponentVNode(VNodeFlags.ComponentClass, WrapperComponent, {
    children: vNode,
    context: parentComponent.context
  });
  render(wrapperVNode, container);
  const component = vNode.children;

  if (callback) {
    // callback gets the component as context, no other argument.
    callback.call(component);
  }
  return component;
}


class WrapperComponent extends Component {
  getChildContext() {
    // tslint:disable-next-line
    return this.props.context;
  }

  render(props) {
    return props.children;
  }
}

const ARR = [];

export const Children = {
  /*
  map(children: Array<InfernoChildren | any>, fn: IterateChildrenFn, ctx: any): any[] {
    if (isNullOrUndef(children)) {
      return children;
    }
    children = Children.toArray(children);
    if (ctx && ctx !== children) {
      fn = fn.bind(ctx);
    }
    return children.map(fn);
  },
  forEach(children: Array<InfernoChildren | any>, fn: IterateChildrenFn, ctx?: any): void {
    if (isNullOrUndef(children)) {
      return;
    }
    children = Children.toArray(children);
    if (ctx && ctx !== children) {
      fn = fn.bind(ctx);
    }
    for (let i = 0, len = children.length; i < len; i++) {
      const child = isInvalid(children[i]) ? null : children[i];

      fn(child, i, children);
    }
  },
  count(children: Array<InfernoChildren | any>): number {
    children = Children.toArray(children);
    return children.length;
  },
  */

  only: function (children) {
    children = Children.toArray(children);
    if (children.length !== 1) {
      throw new Error('Children.only() expects only one child.');
    }
    return children[0];
  },

  toArray: function (children) {
    if (isNullOrUndef(children)) {
      return [];
    }
    // We need to flatten arrays here,
    // because React does it also and application level code might depend on that behavior
    if (isArray(children)) {
      const result = [];

      flatten(children, result);

      return result;
    }
    return ARR.concat(children);
  }
};

/* /COMPATIBILITY */
