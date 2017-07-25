import Component from 'inferno-component'

import AlertSection from './Basic/Alert.jsx'
import BadgeSection from './Basic/Badge.jsx'
import BreadcrumbSection from './Basic/Breadcrumb.jsx'

import Button from '../../../lib/Button.jsx'
import ButtonGroup from '../../../lib/ButtonGroup.jsx'
import ButtonToolbar from '../../../lib/ButtonToolbar.jsx'
import Modal from '../../../lib/Modal.jsx'
import Progress from '../../../lib/Progress.jsx'



class BasicPage extends Component {
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
        <AlertSection />
        <BadgeSection />
        <BreadcrumbSection />
      </div>
    )
  }
}

export default BasicPage
