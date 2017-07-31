import Component from 'inferno-component'
import { Section, Stage, Scene, Code } from '../components.jsx'

import Form from '../../../../lib/Form/Form.jsx'
import FormGroup from '../../../../lib/Form/FormGroup.jsx'
import Input from '../../../../lib/Form/Input.jsx'
import InputGroup from '../../../../lib/Form/InputGroup.jsx'
import InputGroupButton from '../../../../lib/Form/InputGroupButton.jsx'
import Label from '../../../../lib/Form/Label.jsx'

import Button from '../../../../lib/Button.jsx';
import ButtonGroup from '../../../../lib/ButtonGroup.jsx';
import ButtonDropdown from '../../../../lib/ButtonDropdown.jsx';
import DropdownToggle from '../../../../lib/DropdownToggle.jsx';
import DropdownMenu from '../../../../lib/DropdownMenu.jsx';
import DropdownItem from '../../../../lib/DropdownItem.jsx';

export default function () {
  return (
    <Section title="Input With Button">
      <Stage>
        <Scene>
          <Form>
            <FormGroup>
              <Label>Email:</Label>
              <InputGroup>
                <InputGroupButton><Button>I'm a button</Button></InputGroupButton>
                <Input type="email" name="email" placeholder="example@email.com" />
              </InputGroup>
            </FormGroup>
            <FormGroup>
              <Label>Price:</Label>
              <InputGroup>
                <InputGroupButton><Button>Button life</Button></InputGroupButton>  
                <Input type="number" name="Age" />
                <InputGroupButton>
                  <SampleDropdownButton color="primary" split/>
                </InputGroupButton>
              </InputGroup>
            </FormGroup>
          </Form>
          <Code>
{`<Form>
  <FormGroup>
    <Label>Email:</Label>
    <InputGroup>
      <InputGroupButton><Button>I'm a button</Button></InputGroupButton>
      <Input type="email" name="email" placeholder="example@email.com" />
    </InputGroup>
  </FormGroup>
  <FormGroup>
    <Label>Price:</Label>
    <InputGroup>
      <InputGroupButton><Button>Button life</Button></InputGroupButton>  
      <Input type="number" name="Age" />
      <InputGroupButton>
        <SampleDropdownButton color="primary" split/>
      </InputGroupButton>
    </InputGroup>
  </FormGroup>
</Form>`}  
          </Code>  
        </Scene>
      </Stage>
    </Section>
  )
}

class SampleDropdownButton extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isOpen: false
    }

    this.doToggle = this.doToggle.bind(this)
  }

  doToggle() {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }

  render({ children, ...props }) {
    return (
      <ButtonDropdown isOpen={this.state.isOpen} toggle={this.doToggle}>
        <DropdownToggle {...props}>{children}</DropdownToggle>
        <DropdownMenu>
          <DropdownItem>Item 1</DropdownItem>
          <DropdownItem>Item 2</DropdownItem>
          <DropdownItem>Item 3</DropdownItem>
        </DropdownMenu>
      </ButtonDropdown>
    )
  }
}