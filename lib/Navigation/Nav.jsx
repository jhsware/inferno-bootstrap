import classNames from 'classnames';
import { mapToCssModules } from '../utils';

const defaultProps = {
  tag: 'ul'
};

const Nav = (props) => {
  const {
    className,
    cssModule,
    tabs,
    pills,
    vertical,
    justified,
    navbar,
    tag: Tag,
    ...attributes
  } = props;

  const classes = mapToCssModules(classNames(
    className,
    navbar ? 'navbar-nav' : 'nav',
    {
      'nav-tabs': tabs,
      'nav-pills': pills,
      'nav-justified': justified,
      'flex-column': vertical
    }
  ), cssModule);

  return (
    <Tag {...attributes} className={classes} />
  );
};

Nav.defaultProps = defaultProps;

export default Nav;
