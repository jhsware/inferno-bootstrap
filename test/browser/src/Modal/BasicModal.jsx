import Component from 'inferno-component'
import { Section, Stage, Scene, Code, Narrative } from '../components.jsx'

import Button from '../../../../lib/Button.jsx'
import ButtonGroup from '../../../../lib/ButtonGroup.jsx'
import Modal from '../../../../lib/Modal/Modal.jsx'
import ModalHeader from '../../../../lib/Modal/ModalHeader.jsx'
import ModalBody from '../../../../lib/Modal/ModalBody.jsx'
import ModalFooter from '../../../../lib/Modal/ModalFooter.jsx'

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

        <h3>CSS for modal transitions:</h3>
        <Scene>
          <Code language="css">
{`/* You need to override Bootstrap .modal because inferno-animation does animations */

.modal {
  display: block;
}

/* The actual modal */

.ModalFade-leave {
  transform: translateY(0);
  opacity: 1;
}

.ModalFade-leave-active {
  overflow: hidden;
  transition: transform 0.5s ease-in, opacity 0.4s ease-in;
}

.ModalFade-leave-end {
  transform: translateY(-150%);
  opacity: 0;
}

.ModalFade-enter {
  transform: translateY(-150%);
  opacity: 0;
}

.ModalFade-enter-active {
  transition: transform 0.5s ease-out, opacity 0.4s ease-in;
}

.ModalFade-enter-end {
  transform: translateY(0);
  opacity: 1;
}

/* The modal background */

.ModalBackdropFade-leave {
  opacity: 0.5;
}

.ModalBackdropFade-leave-active {
  overflow: hidden;
  transition: opacity 0.3s ease-in;
}

.ModalBackdropFade-leave-end {
  opacity: 0!important;
}

.ModalBackdropFade-enter {
  opacity: 0!important;
}

.ModalBackdropFade-enter-active {
  transition: opacity 0.3s ease-in;
}

.ModalBackdropFade-enter-end {
  opacity: 0.5;
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
