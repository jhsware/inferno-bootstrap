import { Page } from './components.jsx'

import AlertSection from './Basic/Alert.jsx'
import BadgeSection from './Basic/Badge.jsx'
import BreadcrumbSection from './Basic/Breadcrumb.jsx'
import ButtonSection from './Basic/Button.jsx'
import JumbotronSection from './Basic/Jumbotron.jsx'
import ProgressSection from './Basic/Progress.jsx'
import CollapseSection from './Basic/Collapse.jsx'
import LayoutSection from './Basic/Layout.jsx'
import TabsSection from './Basic/Tabs.jsx'
import PopoversSection from './Basic/Popovers.jsx'
import PaginationSection from './Basic/Pagination.jsx'

// import Modal from '../../../lib/Modal.jsx'


export default function BasicPage (props) {
  return (
    <Page>
      <AlertSection />
      <BadgeSection />
      <BreadcrumbSection />
      <ButtonSection />
      <JumbotronSection />
      <ProgressSection />
      <CollapseSection />
      <LayoutSection />
      <TabsSection />
      <PopoversSection />
      <PaginationSection />
    </Page>
  )
}
