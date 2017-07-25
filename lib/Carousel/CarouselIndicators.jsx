import Inferno from 'inferno';
import classNames from 'classnames';
import { mapToCssModules } from '../utils';

const CarouselIndicators = (props) => {
  const { items, activeIndex, cssModule, onClickHandler } = props;

  const listClasses = mapToCssModules('carousel-indicators', cssModule);
  const indicators = items.map((item, idx) => {
    const indicatorClasses = mapToCssModules(classNames(
          { active: activeIndex === idx }
      ), cssModule);
    return (
      <li
        key={idx} onClick={(e) => {
          e.preventDefault();
          onClickHandler(idx);
        }} className={indicatorClasses}
      />);
  });

  return (
    <ol className={listClasses}>
      {indicators}
    </ol>
  );
};

export default CarouselIndicators;
