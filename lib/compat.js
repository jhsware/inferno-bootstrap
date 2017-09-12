import Component from 'inferno-component'
import {
  cloneVNode,
  createVNode,
  render
} from "inferno";
import {
  isArray,
  isNullOrUndef
} from "inferno-shared"

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

const ARR = [];

export const Children = {
  /*
  map: function (children, fn, ctx) {
    if (isNullOrUndef(children)) {
      return children;
    }
    children = Children.toArray(children);
    if (ctx && ctx !== children) {
      fn = fn.bind(ctx);
    }
    return children.map(fn);
  },

  forEach: function (children, fn, ctx) {
    if (isNullOrUndef(children)) {
      return;
    }
    children = Children.toArray(children);
    if (ctx && ctx !== children) {
      fn = fn.bind(ctx);
    }
    for (let i = 0, len = children.length; i < len; i++) {
      fn(children[i], i, children);
    }
  },

  count: function (children) {
    children = Children.toArray(children);
    return children.length;
  },
  */

  only: function (children) {
    children = Children.toArray(children);
    if (children.length !== 1) {
      throw new Error("Children.only() expects only one child.");
    }
    return children[0];
  },

  toArray: function (children) {
    if (isNullOrUndef(children)) {
      return [];
    }
    return isArray(children) ? children : ARR.concat(children);
  }
};

/* /COMPATIBILITY */
