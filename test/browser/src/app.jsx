import Inferno from 'inferno'
import Component from 'inferno-component'
require('inferno-devtools')
import { Router, Route, Redirect, IndexRoute, Link } from 'inferno-router'
import createBrowserHistory from 'history/createBrowserHistory'

import BasicPage from './BasicPage.jsx'
import CardPage from './CardPage.jsx'
import FormPage from './FormPage.jsx'
import ModalPage from './ModalPage.jsx'
import NavigationPage from './NavigationPage.jsx'

function AppLayout (props) {    
  return (
      <div className="Content">
        {props.children}
      </div>
  )
}

if (typeof window !== 'undefined') {
  const browserHistory = createBrowserHistory()

  const appRoutes = (
    <Router history={ browserHistory }>
      <Route path="/inferno-bootstrap-docs" component={ AppLayout }>
        <IndexRoute component={ BasicPage } />
        <Route path="/basic" component={BasicPage} />
        <Route path="/card" component={ CardPage } />
        <Route path="/form" component={FormPage} />
        <Route path="/modal" component={ModalPage} />
        <Route path="/navigation" component={NavigationPage} />
      </Route>
      <Redirect from="/*" to="/inferno-bootstrap-docs" />
    </Router>
  )
  Inferno.render(appRoutes, document.getElementById('app'))
}