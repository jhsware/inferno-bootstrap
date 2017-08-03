import Component from "inferno-component"
import classnames from 'classnames'
import { Link } from 'inferno-router'
import Prism from "prismjs"
require('prismjs/components/prism-jsx')

export class Section extends Component {
  componentDidMount() {
    this.context.addSection(this.props.title, this.props.title.toLowerCase())
  }

  render({ title, children }) {
    return (
      <div class={classnames(this.props.className, "ExampleSection")} id={this.props.title.toLowerCase()}>
        {title && <h2>{title}</h2>}
        {children}
      </div>
    )
  }
}

export function Stage ({ children }) {
  return (
    <div class="ExampleStage">
      {children}
    </div>
  )
}

export function Scene ({ children }) {
  return (
    <div class="ExampleScene">
      {children}
    </div>
  )
}

export function Narrative ({ children }) {
  return (
    <div class="ExampleNarrative">
      {children}
    </div>
  )
}

export class Code extends Component {

  constructor(props) {
    super(props)

    this._hightlight = this._hightlight.bind(this)
  }

  componentDidMount() {
    this._hightlight();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.children !== this.props.children) {
      this._hightlight();
    }
  }

  _hightlight() {
    Prism.highlightElement(this._domNode, this.props.async);
  }

  render({ children }) {
    const languageCls = 'language-' + (this.props.language || 'jsx')
    return (
      <div className="ExampleScene-Code">
        <pre>
          <code className={languageCls} ref={(domNode) => this._domNode = domNode}>
            {children}
          </code>
        </pre>
      </div>
    )  
  }
}


function smoothScrollVertTo(y, durMs) {
  const k = Math.log(y - window.scrollY) / durMs * 16
  newSmoothScrollVertTo(y, k)
}


function newSmoothScrollVertTo(y, k) {
  const delta = y - window.scrollY
  const step = k * delta
  requestAnimationFrame(() => {
    const scrollStep = delta < 2 * step ? delta : step
    window.scrollTo(0, window.scrollY + scrollStep)
    if (scrollStep >= 1 && window.scrollY + window.innerHeight !== document.body.scrollHeight) {
      newSmoothScrollVertTo(y, k)
    }
  })
}

function PageMenu(props) {
  return (
    <div className="PageMenuContainer">
      <ul className="PageMenu nav flex-column">
        <li class="nav-item">
          <h4 className="PageMenu-Header">Components</h4>  
        </li>  
        <li class="nav-item">
          <Link className="nav-link PageLink" to="/basic">Basic</Link>
        </li>
        <li class="nav-item">
          <Link className="nav-link PageLink" to="/card">Card</Link>
        </li>
        <li class="nav-item">
          <Link className="nav-link PageLink" to="/form">Form</Link>
        </li>
        <li class="nav-item">
          <Link className="nav-link PageLink" to="/modal">Modal</Link>
        </li>
        <li class="nav-item">
          <Link className="nav-link PageLink" to="/navigation">Navigation</Link>
        </li>
        {
          props.pageSections.sort().map((item) => {
            return (
              <li class="nav-item">
                <a className="nav-link SectionLink" href={'#' + item.anchor} onClick={(e) => { 
                  e.preventDefault()
                  const el = document.getElementById(e.target.hash.split('#')[1])
                  const y = el.offsetTop
                  // smoothScrollVertTo(y, 500)
                  smoothScrollVertTo(y, 500)
                }}>{item.title}</a>
              </li>
            )  
          })
        }
      </ul>  
    </div>  
  )
}

export class Page extends Component {
  constructor (props) {
    super(props)
    
    this.state = {
      active: false,
      pageSections: []
    }
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        active: true
      })
    }, 10)
  }

  getChildContext() {
    return {
      addSection: this.addSection.bind(this)
    }
  }

  addSection(title, anchor) {
    const tmp = this.state.pageSections
    tmp.push({ title, anchor })
    this.setState({
      pageSections: tmp
    })
  }

  render() {
    const cls = {
      PageContent: true,
      'InfernoAnimation--noAnim': !this.state.active
    }
    return (
      <div className={classnames(cls)}>
        <PageMenu pageSections={this.state.pageSections} />
        {this.props.children}
      </div>
    )
  }
}