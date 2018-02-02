import { Page } from './components'

import InputSection from './Form/Input'
import InputGroupSection from './Form/InputGroup'
import InputWithButton from './Form/InputWithButton'

export default function FormPage (props) {
  return (
    <Page>
      <InputSection />
      <InputGroupSection />
      <InputWithButton />
    </Page>
  )
}
