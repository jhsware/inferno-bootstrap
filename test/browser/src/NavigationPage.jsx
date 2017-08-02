import { Page } from './components.jsx'

import HorizontalSection from './Navigation/Horizontal.jsx'
import VerticalSection from './Navigation/Vertical.jsx'
import TabbedSection from './Navigation/Tabbed.jsx'
import PillsSection from './Navigation/Pills.jsx'

// import Modal from '../../../lib/Modal.jsx'


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
