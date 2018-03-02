import { render, Component } from 'inferno'
// require('inferno-devtools')
import { BrowserRouter, Switch, Redirect, Route, Link } from 'inferno-router'

import BasicPage from './BasicPage'
import CardPage from './CardPage'
import FormPage from './FormPage'
import ModalPage from './ModalPage'
import NavigationPage from './NavigationPage'

function NoMatch () {

}

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
      <div className="Content">
        <Switch>
          <Route path="/inferno-bootstrap-docs" component={ Content } />
          <Redirect to="/inferno-bootstrap-docs/basic" />
        </Switch>
      </div>
    )
  }
}

if (typeof window !== 'undefined') {
  render(<BrowserRouter><App /></BrowserRouter>, document.getElementById('app'))
}