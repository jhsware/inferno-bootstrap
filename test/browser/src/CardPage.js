import { Page } from './components'

import TextCardSection from './Card/TextCard'
import HeaderCardSection from './Card/HeaderCard'

export default function CardPage (props) {
  return (
    <Page>
      <TextCardSection />
      <HeaderCardSection />
    </Page>
  )
}
