import { Component } from 'inferno'
import { Section, Stage, Scene, Code, Narrative } from '../components'

import Button from '../../../../lib/Button'
import ButtonGroup from '../../../../lib/ButtonGroup'
import Modal from '../../../../lib/Modal/Modal'
import ModalHeader from '../../../../lib/Modal/ModalHeader'
import ModalBody from '../../../../lib/Modal/ModalBody'
import ModalFooter from '../../../../lib/Modal/ModalFooter'

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

        <h3>CSS for modal transitions:</h3>
        <Scene>
          <Code language="css">
{`/* You ALLWAYS need to override Bootstrap .modal **display** because inferno-animation does animations */
.modal {
  display: block;
}

/* The actual modal */

.MyModalDialogAnimation-leave {
  transform: translateY(0);
  opacity: 1;
}

.MyModalDialogAnimation-leave-active {
  overflow: hidden;
  transition: transform 0.5s ease-in, opacity 0.4s ease-in;
}

.MyModalDialogAnimation-leave-end {
  transform: translateY(-150%);
  opacity: 0;
}

.MyModalDialogAnimation-enter {
  transform: translateY(-150%);
  opacity: 0;
}

.MyModalDialogAnimation-enter-active {
  transition: transform 0.5s ease-out, opacity 0.4s ease-in;
}

.MyModalDialogAnimation-enter-end {
  transform: translateY(0);
  opacity: 1;
}

/* The modal background */

.MyModalBackgroundAnimation-leave {
  opacity: 0.5;
}

.MyModalBackgroundAnimation-leave-active {
  overflow: hidden;
  transition: opacity 0.3s ease-in;
}

.MyModalBackgroundAnimation-leave-end {
  opacity: 0!important;
}

.MyModalBackgroundAnimation-enter {
  opacity: 0!important;
}

.MyModalBackgroundAnimation-enter-active {
  transition: opacity 0.3s ease-in;
}

.MyModalBackgroundAnimation-enter-end {
  opacity: 0.5;
}`}  
          </Code>
        </Scene>
      </Stage>
    </Section>
  )
}
