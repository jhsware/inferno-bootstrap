import { render } from "inferno"
import { 
  renderIntoDocument,
  findRenderedVNodeWithType,
  findRenderedDOMElementWithClass,
  isVNode,
  isVNodeOfType
} from 'inferno-test-utils'

import { hasClass, getTagName, getInnerHTML } from "../utils"

import CardImg from '../../dist/Card/CardImg';

describe('CardImg', () => {
  it('should render with "card-img" class', () => {
    const tree = renderIntoDocument(<CardImg src="/path/image.png" />);

    expect(hasClass(tree.$V, 'card-img')).toBe(true);
  });

  it('should render top class name', () => {
    const tree = renderIntoDocument(<CardImg top src="/path/image.png" />);

    expect(hasClass(tree.$V, 'card-img-top')).toBe(true);
  });

  it('should render bottom class name', () => {
    const tree = renderIntoDocument(<CardImg bottom src="/path/image.png" />);

    expect(hasClass(tree.$V, 'card-img-bottom')).toBe(true);
  });

  it('should render custom tag', () => {
    const tree = renderIntoDocument(<CardImg tag="image" src="/path/image.png" />);

    expect(getTagName(tree.$V)).toBe('image');
  });
});
