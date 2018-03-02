import { Component } from 'inferno';
import { Section, Stage, Scene, Code, Narrative } from '../components'

import Button from '../../../../lib/Button'
import Collapse from '../../../../lib/Collapse'
import Card from '../../../../lib/Card/Card'
import CardBody from '../../../../lib/Card/CardBody'

export default function () {
  return (
    <Section title="Collapse">
      <Narrative>
        <p>Toggle visibility of content with animation.</p>  
      </Narrative>  
      <Stage>
        <h3>Default open</h3>  
        <Scene>
          <ToggleCollapse defaultOpen={true} />
        </Scene>

        <h3>Default closed</h3>
        <Scene>
          <ToggleCollapse defaultOpen={false} />
        </Scene>

        <h3>Example code:</h3>
        <Scene>
          <Code>
{`class ToggleCollapse extends Component {
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

  render() {
    return (
      <div>
        <Button onClick={this.doToggle}>Do toggle!</Button>
        <Collapse isOpen={this.state.isOpen}>
          <Card className="ExampleCollapseContainer">
            <CardBody>
              <p>My phone number is only two digits off from a local pizzeria’s. I’ve spent my entire life getting occasional wrong-dials from people who accidentally fumbled and hit the wrong number, looking for pizza. One night, it is two am, and our phone rings. I let it go to machine, and am greeted by a rather amusing voicemail from a very drunk man called “Gordon”, who is practically begging for pizza to be delivered to his dorm room at the local college. I try to go back to sleep, but “Gordon” calls back again… and again. On the third call, I answer the phone.</p>
            </CardBody>
          </Card>
        </Collapse>  
      </div>  
    )
  }
}`}
          </Code>
        </Scene>
      </Stage>
    </Section>
  )
}

class ToggleCollapse extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isOpen: props.defaultOpen
    }

    this.doToggle = this.doToggle.bind(this)
  }

  doToggle() {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }

  render() {
    return (
      <div>
        <Button onClick={this.doToggle}>Do toggle!</Button>
        <Collapse isOpen={this.state.isOpen}>
          <Card className="ExampleCollapseContainer">
            <CardBody>
              <p>My phone number is only two digits off from a local pizzeria’s. I’ve spent my entire life getting occasional wrong-dials from people who accidentally fumbled and hit the wrong number, looking for pizza. One night, it is two am, and our phone rings. I let it go to machine, and am greeted by a rather amusing voicemail from a very drunk man called “Gordon”, who is practically begging for pizza to be delivered to his dorm room at the local college. I try to go back to sleep, but “Gordon” calls back again… and again. On the third call, I answer the phone.</p>
            </CardBody>
          </Card>
        </Collapse>  
      </div>  
    )
  }
}