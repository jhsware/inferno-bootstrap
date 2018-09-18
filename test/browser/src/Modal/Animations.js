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
    <Section title="Customise Animations">
      <Narrative>
        <p>Animations are implemented using <a href="https://github.com/jhsware/inferno-animation">inferno-animation</a>.
        To customise animations you pass the props <b>animationPrefix</b> and <b>backgroundAnimationPrefix</b> and follow
        the css-class naming rules in <b>inferno-animation</b>.</p>  
      </Narrative>  
      <Stage>
        <Scene>
          <Code>
{`<Modal animationPrefix="MyModalDialogAnimation" backgroundAnimationPrefix="MyModalBackgroundAnimation">
    /* ...modal content... */
</Modal>`}
          </Code>  
        </Scene>
      </Stage>
    </Section>
  )
}
