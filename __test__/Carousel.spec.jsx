import Component from "inferno-component"
import sinon from "sinon"
import { 
  renderIntoDocument,
  findRenderedVNodeWithType,
  findRenderedDOMElementWithClass,
  findRenderedDOMElementWithTag,
  scryRenderedDOMElementsWithClass,
  scryRenderedDOMElementsWithTag,
  scryRenderedVNodesWithType,
  isVNode,
  isVNodeOfType
} from 'inferno-test-utils'

import { hasClass, getTagName, getInnerHTML, getOuterHTML } from "./utils"

import Carousel from '../lib/Carousel/Carousel.jsx';
import CarouselItem from '../lib/Carousel/CarouselItem.jsx';
import CarouselIndicators from '../lib/Carousel/CarouselIndicators.jsx';
import CarouselControl from '../lib/Carousel/CarouselControl.jsx';
import CarouselCaption from '../lib/Carousel/CarouselCaption.jsx';

describe('Carousel', () => {

  const items = [
      { src: '', altText: 'a', caption: 'caption 1' },
      { src: '', altText: 'b', caption: 'caption 2' },
      { src: '', altText: 'c', caption: 'caption 3' }
  ];

  describe('captions', () => {
    it('should render a header and a caption', () => {
      const tree = renderIntoDocument(<CarouselCaption captionHeader="abc" captionText="def" />);

      expect(findRenderedDOMElementWithTag(tree, 'h3')).toBeDefined();
      expect(findRenderedDOMElementWithTag(tree, 'p')).toBeDefined();
    });
  });

  describe('items', () => {
    it('should render an img tag', () => {
      const tree = renderIntoDocument(<CarouselItem src={items[0].src} altText={items[0].src} />);

      expect(findRenderedDOMElementWithTag(tree, 'img')).toBeDefined();
    });

    it('should render a caption if one is passed in', () => {
      const tree = renderIntoDocument(
        <CarouselItem src={items[0].src} altText={items[0].src}>
          <CarouselCaption captionHeader="text" captionText="text" />
        </CarouselItem>
      );
      
      expect(findRenderedVNodeWithType(tree, CarouselCaption)).toBeDefined();
    });

    // TODO: Fix transition tests
    /*
    describe('transitions', () => {
      it('should add the appropriate classes when componentWillEnter is fired', () => {
        const tree = renderIntoDocument(<CarouselItem src={items[0].src} altText={items[0].src} />, { context: { direction: 'right' } });
        wrapper.instance().componentWillEnter();
        expect(wrapper.state('animation')).toEqual(['carousel-item-next', 'carousel-item-left']);
        wrapper.setContext({ direction: 'left' });
        wrapper.instance().componentWillEnter();
        expect(wrapper.state('animation')).toEqual(['carousel-item-prev', 'carousel-item-right']);
      });

      it('should call the callback after 500 when componentWillEnter is called', () => {
        const callback = jasmine.createSpy('callback');
        const tree = renderIntoDocument(<CarouselItem src={items[0].src} altText={items[0].src} />, { context: { direction: 'right' } });
        wrapper.instance().componentWillEnter(callback);
        jasmine.clock().tick(500);
        expect(callback).toHaveBeenCalled();
      });

      it('should add the appropriate classes when componentDidEnter is fired', () => {
        const tree = renderIntoDocument(<CarouselItem src={items[0].src} altText={items[0].src} />, { context: { direction: 'right' } });
        wrapper.instance().componentDidEnter();
        expect(wrapper.state('animation')).toEqual(['active']);
      });

      it('should add the appropriate classes when componentWillLeave is fired', () => {
        const tree = renderIntoDocument(<CarouselItem src={items[0].src} altText={items[0].src} />, { context: { direction: 'right' } });
        wrapper.instance().componentWillLeave();
        expect(wrapper.state('animation')).toEqual(['carousel-item-left', 'active']);
        wrapper.setContext({ direction: 'left' });
        wrapper.instance().componentWillLeave();
        expect(wrapper.state('animation')).toEqual(['carousel-item-right', 'active']);
      });

      it('should call the callback after 500 when componentWillLeave is called', () => {
        const callback = jasmine.createSpy('callback');
        const tree = renderIntoDocument(<CarouselItem src={items[0].src} altText={items[0].src} />, { context: { direction: 'right' } });
        wrapper.instance().componentWillLeave(callback);
        // jasmine.clock().tick(500);
        expect(callback).toHaveBeenCalled();
      });

      it('should add the appropriate classes when componentDidLeave is fired', () => {
        const tree = renderIntoDocument(<CarouselItem src={items[0].src} altText={items[0].src} />, { context: { direction: 'right' } });
        wrapper.instance().componentDidLeave();
        expect(wrapper.state('animation')).toEqual([]);
      });

      it('should add the appropriate classes when componentWillAppear is fired', () => {
        const tree = renderIntoDocument(<CarouselItem src={items[0].src} altText={items[0].src} />, { context: { direction: 'right' } });
        wrapper.instance().componentWillAppear(() => {});
        expect(wrapper.state('animation')).toEqual(['active']);
      });
    });
    */
  });

  describe('indicators', () => {
    it('should render a list with the right number of items', () => {
      const tree = renderIntoDocument(<CarouselIndicators items={items} />);
      // expect(wrapper.find('ol').length).toEqual(1);
      expect(scryRenderedDOMElementsWithTag(tree, 'ol').length).toEqual(1);
      // expect(wrapper.find('li').length).toEqual(3);
      expect(scryRenderedDOMElementsWithTag(tree, 'li').length).toEqual(3);
    });

    it('should append the correct active class', () => {
      const tree = renderIntoDocument(<CarouselIndicators items={items} activeIndex={0} />);
      expect(scryRenderedDOMElementsWithClass(tree, 'active').length).toEqual(1);
    });

    it('should call the click handler', () => {
      const testClick = {
        didClick: () => {}
      }
      const clickSpy = sinon.spy(testClick, 'didClick')

      const tree = renderIntoDocument(<CarouselIndicators items={items} activeIndex={0} onClickHandler={testClick.didClick} />);
      
      scryRenderedDOMElementsWithTag(tree, 'li')[0].click()
      expect(clickSpy.calledOnce).toBe(true)
    });
  });

  describe('controls', () => {
    it('should render an anchor tag', () => {
      const tree = renderIntoDocument(<CarouselControl />);
      expect(scryRenderedDOMElementsWithTag(tree, 'a').length).toEqual(1);
    });

    it('should call the onClickHandler', () => {
      const testClick = {
        didClick: () => {}
      }
      const clickSpy = sinon.spy(testClick, 'didClick')

      const tree = renderIntoDocument(<CarouselControl onClickHandler={testClick.didClick} />);
      
      scryRenderedDOMElementsWithTag(tree, 'a')[0].click()
      expect(clickSpy.calledOnce).toBe(true)
    });
  });

  // TODO: Fix these tests!
  /*
  describe('rendering', () => {
    it('should show the carousel indicators', () => {
      const slides = items.map((item, idx) => {
        return (
          <CarouselItem
            key={idx}
            src={item.src}
            altText={item.altText}
          >
            <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
          </CarouselItem>
        );
      });

      const tree = renderIntoDocument(
        <Carousel activeIndex={0}>
          <CarouselIndicators items={slides} activeIndex={0} />
          {slides}
        </Carousel>
      );

      expect(findRenderedVNodeWithType(tree, CarouselIndicators)).toBeDefined();
    });

    it('should show controls', () => {
      const slides = items.map((item, idx) => {
        return (
          <CarouselItem
            key={idx}
            src={item.src}
            altText={item.altText}
          >
            <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
          </CarouselItem>
        );
      });

      const tree = renderIntoDocument(
        <Carousel activeIndex={0}>
          {slides}
          <CarouselControl direction="prev" directionText="Previous" />
          <CarouselControl direction="next" directionText="Next" />
        </Carousel>
      );

      const html = getOuterHTML(tree)


      expect(scryRenderedVNodesWithType(tree, CarouselControl).length).toEqual(2);
    });

    it('should show a single slide', () => {
      const slides = items.map((item, idx) => {
        return (
          <CarouselItem
            key={idx}
            src={item.src}
            altText={item.altText}
          >
            <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
          </CarouselItem>
        );
      });

      const tree = renderIntoDocument(
        <Carousel activeIndex={0}>
          {slides}
        </Carousel>
      );
      
      expect(findRenderedVNodeWithType(tree, CarouselItem)).toBeDefined();
    });

    it('should show indicators and controls', () => {
      const slides = items.map((item, idx) => {
        return (
          <CarouselItem
            key={idx}
            src={item.src}
            altText={item.altText}
          >
            <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
          </CarouselItem>
        );
      });

      const tree = renderIntoDocument(
        <Carousel activeIndex={0}>
          <CarouselIndicators items={slides} activeIndex={0} />
          {slides}
          <CarouselControl direction="prev" directionText="Previous" />
          <CarouselControl direction="next" directionText="Next" />
        </Carousel>
      );

      expect(scryRenderedVNodesWithType(tree, CarouselControl).length).toEqual(2);
      expect(findRenderedVNodeWithType(tree, CarouselIndicators)).toBeDefined();
    });
  });

  describe('carouseling', () => {
    it('should go right when the index increases', () => {
      const slides = items.map((item, idx) => {
        return (
          <CarouselItem
            key={idx}
            src={item.src}
            altText={item.altText}
          >
            <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
          </CarouselItem>
        );
      });

      let doSlide
      class Wrapper extends Component {
        constructor() {
          super()
          this.state = {
            activeIndex: 0
          }
          doSlide = this.doSlide = this.doSlide.bind(this) 
        }

        doSlide () {
          this.setState({
            activeIndex: this.state.activeIndex + 1
          })
        }

        render () {
          return <div>{this.props.children}</div>
        }
      }

      const tree = renderIntoDocument(
        <Wrapper>
          <Carousel interval={1000} activeIndex={0}>
            {slides}
          </Carousel>
        </Wrapper>
      );

      const carousel = findRenderedVNodeWithType(tree, Carousel)
      doSlide()
      // expect(wrapper.state().direction).toEqual('right');
      expect(carousel.children.state.direction).toEqual('right')
    });

    it('should go left when the index decreases', () => {
      const slides = items.map((item, idx) => {
        return (
          <CarouselItem
            key={idx}
            src={item.src}
            altText={item.altText}
          >
            <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
          </CarouselItem>
        );
      });

      const tree = renderIntoDocument(
        <Carousel interval={1000} activeIndex={1}>
          {slides}
        </Carousel>
      );

      wrapper.setProps({ activeIndex: 0 });
      expect(wrapper.state().direction).toEqual('left');
    });

    it('should go right if transitioning from the last to first slide', () => {
      const slides = items.map((item, idx) => {
        return (
          <CarouselItem
            key={idx}
            src={item.src}
            altText={item.altText}
          >
            <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
          </CarouselItem>
        );
      });

      const tree = renderIntoDocument(
        <Carousel interval={1000} activeIndex={2}>
          {slides}
        </Carousel>
      );

      wrapper.setProps({ activeIndex: 0 });
      expect(wrapper.state().direction).toEqual('right');
    });

    it('should go left if transitioning from the first to last slide', () => {
      const slides = items.map((item, idx) => {
        return (
          <CarouselItem
            key={idx}
            src={item.src}
            altText={item.altText}
          >
            <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
          </CarouselItem>
        );
      });

      const tree = renderIntoDocument(
        <Carousel interval={1000} activeIndex={0}>
          {slides}
        </Carousel>
      );

      wrapper.setProps({ activeIndex: 2 });
      expect(wrapper.state().direction).toEqual('left');
    });
  });

  describe('interval', () => {
    it('should not cycle when paused', () => {
      const next = jasmine.createSpy('next');
      const slides = items.map((item, idx) => {
        return (
          <CarouselItem
            key={idx}
            src={item.src}
            altText={item.altText}
          >
            <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
          </CarouselItem>
        );
      });

      const tree = renderIntoDocument(
        <Carousel next={next} interval={1000} activeIndex={0} paused>
          {slides}
        </Carousel>
      );
      jasmine.clock().tick(1000);
      expect(next).not.toHaveBeenCalled();
      wrapper.unmount();
    });

    it('should accept a number', () => {
      const next = jasmine.createSpy('next');
      const slides = items.map((item, idx) => {
        return (
          <CarouselItem
            key={idx}
            src={item.src}
            altText={item.altText}
          >
            <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
          </CarouselItem>
        );
      });

      const tree = renderIntoDocument(
        <Carousel next={next} interval={1000} activeIndex={0}>
          {slides}
        </Carousel>
      );
      jasmine.clock().tick(1000);
      expect(next).toHaveBeenCalled();
      wrapper.unmount();
    });

    it('should accept a boolean', () => {
      const next = jasmine.createSpy('next');
      const slides = items.map((item, idx) => {
        return (
          <CarouselItem
            key={idx}
            src={item.src}
            altText={item.altText}
          >
            <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
          </CarouselItem>
        );
      });

      const tree = renderIntoDocument(
        <Carousel next={next} activeIndex={0} interval={false}>
          {slides}
        </Carousel>
      );
      jasmine.clock().tick(5000);
      expect(next).not.toHaveBeenCalled();
      wrapper.unmount();
    });

    it('should default to 5000', () => {
      const next = jasmine.createSpy('next');
      const slides = items.map((item, idx) => {
        return (
          <CarouselItem
            key={idx}
            src={item.src}
            altText={item.altText}
          >
            <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
          </CarouselItem>
        );
      });

      const tree = renderIntoDocument(
        <Carousel next={next} activeIndex={0}>
          {slides}
        </Carousel>
      );
      jasmine.clock().tick(5000);
      expect(next).toHaveBeenCalled();
      wrapper.unmount();
    });

    it('it should accept a string', () => {
      const next = jasmine.createSpy('next');
      const slides = items.map((item, idx) => {
        return (
          <CarouselItem
            key={idx}
            src={item.src}
            altText={item.altText}
          >
            <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
          </CarouselItem>
        );
      });
      const tree = renderIntoDocument(
        <Carousel next={next} interval="1000" activeIndex={0}>
          {slides}
        </Carousel>
      );
      jasmine.clock().tick(1000);
      expect(next).toHaveBeenCalled();
      wrapper.unmount();
    });
  });
  */
});
