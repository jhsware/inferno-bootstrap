import Component from 'inferno-component'

import { Section, Stage } from './components.jsx'

function ContentSection () {
  return (
    <Section>
      <h2>Contents</h2>
      <Stage>
        
      </Stage>
    </Section>
  )
}

class CardPage extends Component {
  constructor (props) {
    super(props)
    
    this.state = {
      active: false
    }
  }

  componentDidMount () {
    setTimeout(() => {
      this.setState({
        active: true
      })
    }, 10)
  }

  render () {

    return (
      <div className={!this.state.active ? 'InfernoAnimation--noAnim' : ''}>
        <ContentSection />
      </div>
    )
  }
}

export default CardPage
