import { Page } from './components.jsx'

import InputSection from './Form/Input.jsx'
import InputGroupSection from './Form/InputGroup.jsx'
import InputWithButton from './Form/InputWithButton.jsx'
import ButtonShorthand from './Form/ButtonShorthand.jsx'

export default function FormPage (props) {
  return (
    <Page>
      <InputSection />
      <InputGroupSection />
      <InputWithButton />
      <ButtonShorthand />
    </Page>
  )
}
