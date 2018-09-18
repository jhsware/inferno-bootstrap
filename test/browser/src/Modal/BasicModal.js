import { Component } from 'inferno'
import { Section, Stage, Scene, Code, Narrative } from '../components'

import Button from '../../../../src/Button'
import ButtonGroup from '../../../../src/ButtonGroup'
import Modal from '../../../../src/Modal/Modal'
import ModalHeader from '../../../../src/Modal/ModalHeader'
import ModalBody from '../../../../src/Modal/ModalBody'
import ModalFooter from '../../../../src/Modal/ModalFooter'

export default function () {
  return (
    <Section title="Basic Modal">
      <Narrative>
        <p>Use modals to present essential information that takes over the entire window.</p>  
      </Narrative>  
      <Stage>
        <Scene>

          <ButtonGroup>  
            <ModalExample buttonLabel="Show modal" />
            <ModalExample buttonLabel="Show modal without fade" fade={false} />
          </ButtonGroup>
          <Code>
{`<ButtonGroup>  
  <ModalExample buttonLabel="Show modal" />
  <ModalExample buttonLabel="Show modal (no fade)" fade={false} />
</ButtonGroup>`}
          </Code>  
        </Scene>

        <h3>Implementation of &lt;ModalExample&gt; component:</h3>
        <Scene>
          <Code>
{`class ModalExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    const fadeModal = (props.hasOwnProperty('fade') ? this.props.fade : true)
    return (
      <Button onClick={this.toggle}>{this.props.buttonLabel}
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className} fade={fadeModal}>
          <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
          <ModalBody>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggle}>Do Something</Button>{' '}
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </Button>
    );
  }
}`}
          </Code> 
        </Scene>
      </Stage>
    </Section>
  )
}

class ModalExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    const fadeModal = (this.props.hasOwnProperty('fade') ? this.props.fade : true)
    return (
      <Button onClick={this.toggle}>{this.props.buttonLabel}
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className} fade={fadeModal}>
          <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
          <ModalBody>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggle}>Do Something</Button>{' '}
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </Button>
    );
  }
}
