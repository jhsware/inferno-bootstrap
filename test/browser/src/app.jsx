import Inferno from 'inferno'

import { Router, Route, IndexRoute, Link } from 'inferno-router'
import createBrowserHistory from 'history/createBrowserHistory'

import BasicPage from './BasicPage.jsx'
import CardPage from './CardPage.jsx'
import CarouselPage from './CarouselPage.jsx'
import FormPage from './FormPage.jsx'


function AppLayout (props) {
  return (
    <div>
      <div className="Menu">
        <Link to="/basic">Basic</Link>
        <Link to="/card">Card</Link>
        <Link to="/carousel">Carousel</Link>
        <Link to="/form">Form</Link>
      </div>
      <div className="Content">
        {props.children}
      </div>
    </div>
  )
}

if (typeof window !== 'undefined') {
  const browserHistory = createBrowserHistory()

  const appRoutes = (
    <Router history={ browserHistory }>
      <Route component={ AppLayout }>
        <IndexRoute component={ BasicPage } />
        <Route path="/basic" component={ BasicPage } />
        <Route path="/card" component={ CardPage } />
        <Route path="/carousel" component={ CarouselPage } />
        <Route path="/form" component={ FormPage } />
      </Route>
    </Router>
  )
  Inferno.render(appRoutes, document.getElementById('app'))
}