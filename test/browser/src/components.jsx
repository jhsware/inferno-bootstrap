import Component from "inferno-component"
import Prism from "prismjs"

export function Section ({ children }) {
  return (
    <div class="ExampleSection">
      {children}
    </div>
  )
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

export class Code extends Component {

  constructor(props) {
    super(props)

    this._hightlight = this._hightlight.bind(this)
  }

  componentDidMount() {
    this._hightlight();
  }

  componentDidUpdate() {
    this._hightlight();
  }

  _hightlight() {
    Prism.highlightElement(this._domNode, this.props.async);
  }

  render ({ children }) {
    return (
      <div className="ExampleScene-Code">
        <pre className="language-javascript" ref={(domNode) => this._domNode = domNode}>
          {children}
        </pre>
      </div>
    )  
  }
}
