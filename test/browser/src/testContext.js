import { Component } from 'inferno'
require('inferno-devtools')

function Child (props, context) {
  return (
    <div>
    {(context.active ? 'ACTIVE' : 'INACTIVE') + '   :   ' + (context.state.active ? 'ACTIVE' : 'INACTIVE')}
    </div>
  ) 
  if (context.active) {
    return <div></div>
  } else {
    return <div>INACTIVE</div>
  }
}

class Container extends Component {
  constructor() {
    super()

    this.state = {
      active: false
    }
  }

  getChildContext() {
    return {
      active: this.state.active,
      state: this.state
    }
  }

  componentWillReceiveProps(nextProps) {
    if (this.state.active !== nextProps.active) {
      this.setState({
        active: nextProps.active
      });
    }
  }

  render () {
    return (
      <Child />
    )
  }
}

class App extends Component {
  constructor() {
    super()

    this.state = {
      active: false
    }

    this.didClick = this.didClick.bind(this)
  }

  didClick (e) {
    this.setState({
      active: !this.state.active
    })
  }

  render () {
    return (
      <div onClick={this.didClick}>
        <Container active={this.state.active} />
      </div>
    )
  }
}



Inferno.render(<App />, document.getElementById('app'))