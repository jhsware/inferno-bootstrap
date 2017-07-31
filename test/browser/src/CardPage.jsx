import { Page } from './components.jsx'

import TextCardSection from './Card/TextCard.jsx'
import HeaderCardSection from './Card/HeaderCard.jsx'

export default function CardPage (props) {
  return (
    <Page>
      <TextCardSection />
      <HeaderCardSection />
    </Page>
  )
}
