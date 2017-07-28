import Inferno from 'inferno'
import Component from 'inferno-component'
import { Router, Route, IndexRoute, Link } from 'inferno-router'
import createBrowserHistory from 'history/createBrowserHistory'

import BasicPage from './BasicPage.jsx'
import CardPage from './CardPage.jsx'
import FormPage from './FormPage.jsx'
import ModalPage from './ModalPage.jsx'

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
      <Route component={ AppLayout }>
        <IndexRoute component={ BasicPage } />
        <Route path="/basic" component={BasicPage} />
        <Route path="/card" component={ CardPage } />
        <Route path="/form" component={FormPage} />
        <Route path="/modal" component={ ModalPage } />
      </Route>
    </Router>
  )
  Inferno.render(appRoutes, document.getElementById('app'))
}