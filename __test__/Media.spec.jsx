import { renderIntoElement, hasClass, getTagName } from "./utils"
import { Media, MediaBody, Image } from '../lib/Media';

describe('Media', () => {
  it('should render a div tag by default', () => {
    const DOM = renderIntoElement(<Media />);

    expect(getTagName(DOM)).toBe('div');
  });

  it('should render an h4 tag by default for heading', () => {
    const DOM = renderIntoElement(<Media tag="h4" />);

    expect(getTagName(DOM)).toBe('h4');
  });

  it('should render an a tag by default Media with an href', () => {
    const DOM = renderIntoElement(<Media href="#" />);

    expect(getTagName(DOM)).toBe('a');
  });

  it('should render an img tag by default for object', () => {
    const DOM = renderIntoElement(<Image />);

    expect(getTagName(DOM)).toBe('img');
  });

  it('should render an wrapping anchor tag if href provided', () => {
    const DOM = renderIntoElement(<Image href="#"/>);

    expect(getTagName(DOM)).toBe('a');
    expect(getTagName(DOM.firstChild)).toBe('img');
  });

  it('should render a ul tag if defined as such', () => {
    const DOM = renderIntoElement(<Media tag='ul' />);

    expect(getTagName(DOM)).toBe('ul');
  });

  it('should pass additional classNames', () => {
    const DOM = renderIntoElement(<Media className="extra" />);

    expect(hasClass(DOM, 'extra')).toBe(true);
  });

  it('should render custom tag', () => {
    const DOM = renderIntoElement(<Media tag="main" />);

    expect(getTagName(DOM)).toBe('main');
  });

  it('should render body', () => {
    const DOM = renderIntoElement(<MediaBody />);

    expect(hasClass(DOM, 'media-body')).toBe(true);
  });

  it('Image render spacing properly', () => {
    const DOM = renderIntoElement(<Image spacing="mb-2" />);

    expect(hasClass(DOM, 'mb-2')).toBe(true);
  });

  it('Image render spacing and responsive properly', () => {
    const DOM = renderIntoElement(<Image className="extra" responsive="16by9" spacing="mb-2" />);

    expect(hasClass(DOM, 'mb-2')).toBe(true);
    expect(hasClass(DOM, 'embed-responsive-16by9')).toBe(true);
    expect(hasClass(DOM, 'embed-responsive')).toBe(true);
    expect(hasClass(DOM.firstChild, 'embed-responsive-item')).toBe(true);
    expect(hasClass(DOM.firstChild, 'extra')).toBe(true);
  });

  it('should render top', () => {
    const DOM = renderIntoElement(<Image top />);

    expect(hasClass(DOM, 'align-self-start')).toBe(true);
  });

  it('should render bottom', () => {
    const DOM = renderIntoElement(<Image bottom />);

    expect(hasClass(DOM, 'align-self-end')).toBe(true);
  });

  it('should render middle', () => {
    const DOM = renderIntoElement(<Image middle />);

    expect(hasClass(DOM, 'align-self-center')).toBe(true);
  });

  it('should render media', () => {
    const DOM = renderIntoElement(<Media />);

    expect(hasClass(DOM, 'media')).toBe(true);
  });

  it('should render list', () => {
    const DOM = renderIntoElement(
      <Media tag="ul">
        <Media tag="li" />
        <Media tag="li" />
        <Media tag="li" />
      </Media>
    );

    expect(hasClass(DOM, 'media')).toBe(true);
    expect(DOM.getElementsByTagName('li').length).toBe(3);
  });

  it('should render children', () => {
    const DOM = renderIntoElement(
      <Media>
        <MediaBody />
      </Media>
    );

    expect(DOM.getElementsByClassName('media-body').length).toBe(1);
  });
});
