import Component from 'inferno-component'

import InputSection from './Form/Input.jsx'
import InputGroupSection from './Form/InputGroup.jsx'


class FormPage extends Component {
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
        <InputSection />
        <InputGroupSection />
      </div>
    )
  }
}

export default FormPage
