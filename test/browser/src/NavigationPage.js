import { Page } from './components'

import HorizontalSection from './Navigation/Horizontal'
import VerticalSection from './Navigation/Vertical'
import TabbedSection from './Navigation/Tabbed'
import PillsSection from './Navigation/Pills'

// import Modal from '../../../lib/Modal'


export default function NavigationPage (props) {
  return (
    <Page>
      <HorizontalSection />
      <VerticalSection />
      <TabbedSection />
      <PillsSection />
    </Page>
  )
}
