import { render } from "inferno"
import { renderIntoElement } from '../utils'
import { 
  findRenderedVNodeWithType,
  findRenderedDOMElementWithClass,
  isVNode,
  isVNodeOfType
} from 'inferno-test-utils'

import { hasClass, getTagName, getInnerHTML } from "../utils"

import CardImg from '../../lib/Card/CardImg';

describe('CardImg', () => {
  it('should render with "card-img" class', () => {
    const DOM = renderIntoElement(<CardImg src="/path/image.png" />);

    expect(hasClass(DOM, 'card-img')).toBe(true);
  });

  it('should render top class name', () => {
    const DOM = renderIntoElement(<CardImg top src="/path/image.png" />);

    expect(hasClass(DOM, 'card-img-top')).toBe(true);
  });

  it('should render bottom class name', () => {
    const DOM = renderIntoElement(<CardImg bottom src="/path/image.png" />);

    expect(hasClass(DOM, 'card-img-bottom')).toBe(true);
  });

  it('should render custom tag', () => {
    const DOM = renderIntoElement(<CardImg tag="image" src="/path/image.png" />);

    expect(getTagName(DOM)).toBe('image');
  });
});
