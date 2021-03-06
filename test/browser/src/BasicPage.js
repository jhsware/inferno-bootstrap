import { Page } from './components'

import AlertSection from './Basic/Alert'
import BadgeSection from './Basic/Badge'
import BreadcrumbSection from './Basic/Breadcrumb'
import ButtonSection from './Basic/Button'
import DropdownSection from './Basic/Dropdown'
import JumbotronSection from './Basic/Jumbotron'
import ProgressSection from './Basic/Progress'
import CollapseSection from './Basic/Collapse'
import LayoutSection from './Basic/Layout'
import TabsSection from './Basic/Tabs'
import PopoversSection from './Basic/Popovers'
import PaginationSection from './Basic/Pagination'
import ListSection from './Basic/List'
import TooltipSection from './Basic/Tooltip'
import MediaSection from './Basic/Media'
import SpinnerSection from './Basic/Spinner'

// import Modal from '../../../src/Modal'

export default function BasicPage (props) {
  return (
    <Page>
      <AlertSection />
      <BadgeSection />
      <BreadcrumbSection />
      <ButtonSection />
      <DropdownSection />
      <JumbotronSection />
      <ProgressSection />
      <CollapseSection />
      <LayoutSection />
      <ListSection />
      <TabsSection />
      <TooltipSection />
      <PopoversSection />
      <PaginationSection />
      <MediaSection />
      <SpinnerSection />
    </Page>
  )
}
