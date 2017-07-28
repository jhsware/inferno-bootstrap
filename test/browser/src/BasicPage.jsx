import { Page } from './components.jsx'

import AlertSection from './Basic/Alert.jsx'
import BadgeSection from './Basic/Badge.jsx'
import BreadcrumbSection from './Basic/Breadcrumb.jsx'
import ButtonSection from './Basic/Button.jsx'
import JumbotronSection from './Basic/Jumbotron.jsx'
import ProgressSection from './Basic/Progress.jsx'

import Modal from '../../../lib/Modal.jsx'


export default function BasicPage (props) {
  return (
    <Page>
      <AlertSection />
      <BadgeSection />
      <BreadcrumbSection />
      <ButtonSection />
      <JumbotronSection />
      <ProgressSection />
    </Page>
  )
}
