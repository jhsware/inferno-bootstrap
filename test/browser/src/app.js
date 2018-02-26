import { render, Component } from 'inferno'
require('inferno-devtools')
import { BrowserRouter, Route, Link } from 'inferno-router'

import BasicPage from './BasicPage'
import CardPage from './CardPage'
import FormPage from './FormPage'
import ModalPage from './ModalPage'
import NavigationPage from './NavigationPage'

class App extends Component {
  
  getChildContext() {
    return {
      pageLinks: [
        {link: "/basic", title: "Basic"},
        {link: "/card", title: "Card"},
        {link: "/form", title: "Form"},
        {link: "/modal", title: "Modal"},
        {link: "/navigation", title: "Navigation"}
      ]
    }
  }

  render () {
    return (
      <BrowserRouter>
        <div className="Content">
           <Route path="/basic" component={ BasicPage } />
           <Route path="/card" component={ CardPage } />
           <Route path="/form" component={ FormPage } />
           <Route path="/modal" component={ ModalPage } />
           <Route path="/navigation" component={ NavigationPage } />
        </div>
      </BrowserRouter>
    )
  }
}

if (typeof window !== 'undefined') {
  render(<App />, document.getElementById('app'))
}