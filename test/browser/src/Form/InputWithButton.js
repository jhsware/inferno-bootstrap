import Component from 'inferno-component'
import { Section, Stage, Scene, Code } from '../components'

import Form from '../../../../lib/Form/Form'
import FormGroup from '../../../../lib/Form/FormGroup'
import Input from '../../../../lib/Form/Input'
import InputGroup from '../../../../lib/Form/InputGroup'
import InputGroupButton from '../../../../lib/Form/InputGroupButton'
import Label from '../../../../lib/Form/Label'

import Button from '../../../../lib/Button';
import ButtonGroup from '../../../../lib/ButtonGroup';
import ButtonDropdown from '../../../../lib/ButtonDropdown';
import DropdownToggle from '../../../../lib/DropdownToggle';
import DropdownMenu from '../../../../lib/DropdownMenu';
import DropdownItem from '../../../../lib/DropdownItem';

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