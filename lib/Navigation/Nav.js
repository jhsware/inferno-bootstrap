import classNames from 'classnames';
import { mapToCssModules } from '../utils';


const defaultProps = {
  tag: 'ul',
  vertical: false,
};

const getVerticalClass = (vertical) => {
  if (vertical === false) {
    return false;
  } else if (vertical === true || vertical === 'xs') {
    return 'flex-column';
  }

  return `flex-${vertical}-column`;
};

const Nav = (props) => {
  const {
    className,
    cssModule,
    tabs,
    pills,
    vertical,
    horizontal,
    justified,
    fill,
    navbar,
    card,
    tag: Tag,
    ...attributes
  } = props;

  const classes = mapToCssModules(classNames(
    className,
    navbar ? 'navbar-nav' : 'nav',
    horizontal ? `justify-content-${horizontal}` : false,
    getVerticalClass(vertical),
    {
      'nav-tabs': tabs,
      'card-header-tabs': card && tabs,
      'nav-pills': pills,
      'card-header-pills': card && pills,
      'nav-justified': justified,
      'nav-fill': fill,
    }
  ), cssModule);

  return (
    <Tag {...attributes} className={classes} />
  );
};

Nav.defaultProps = defaultProps;

export default Nav;