import { render, Component } from 'inferno'
// require('inferno-devtools')
import { BrowserRouter, Switch, Redirect, Route, Link } from 'inferno-router'

import Nav from '../../../lib/Navigation/Nav'
import NavItem from '../../../lib/Navigation/NavItem'
import NavLink from '../../../lib/Navigation/NavLink'

import BasicPage from './BasicPage'
import CardPage from './CardPage'
import FormPage from './FormPage'
import ModalPage from './ModalPage'
import NavigationPage from './NavigationPage'

function Content ({ match }) {
  return (
    <div>
      <Switch>
        <Route path={`${match.path}/basic`} component={ BasicPage } />
        <Route path={`${match.path}/card`} component={ CardPage } />
        <Route path={`${match.path}/form`} component={ FormPage } />
        <Route path={`${match.path}/modal`} component={ ModalPage } />
        <Route path={`${match.path}/navigation`} component={ NavigationPage } />
        <Redirect to="/inferno-bootstrap-docs/basic" />
      </Switch>
    </div>
  )
}

class App extends Component {
  
  getChildContext() {
    return {
      pageLinks: [
        {link: "/inferno-bootstrap-docs/basic", title: "Basic"},
        {link: "/inferno-bootstrap-docs/card", title: "Card"},
        {link: "/inferno-bootstrap-docs/form", title: "Form"},
        {link: "/inferno-bootstrap-docs/modal", title: "Modal"},
        {link: "/inferno-bootstrap-docs/navigation", title: "Navigation"}
      ]
    }
  }

  render () {
    return (
      <div>
        <Nav>
          <NavItem>
            <NavLink href="//jhsware.github.io/inferno-bootstrap-docs">Inferno Bootstrap</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="https://github.com/jhsware/inferno-bootstrap">Github</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="https://infernojs.org/">Inferno.js</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="https://getbootstrap.com/docs/4.0/components/alerts/">Bootstrap 4 Docs</NavLink>
          </NavItem>
        </Nav>
        <div className="Content">
          <Switch>
            <Route path="/inferno-bootstrap-docs" component={ Content } />
            <Redirect to="/inferno-bootstrap-docs/basic" />
          </Switch>
        </div>
      </div>
    )
  }
}

if (typeof window !== 'undefined') {
  render(<BrowserRouter><App /></BrowserRouter>, document.getElementById('app'))
}