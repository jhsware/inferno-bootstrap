import { Section, Stage, Scene } from '../components.jsx'

import Breadcrumb from '../../../../lib/Breadcrumb.jsx'
import BreadcrumbItem from '../../../../lib/BreadcrumbItem.jsx'

export default function () {
  return (
    <Section>
      <h2>Breadcrumb Examples</h2>
      <Stage>
        <Scene>
          <Breadcrumb>
            <BreadcrumbItem>
              <a href="#">Home</a>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <a href="#">Section</a>
            </BreadcrumbItem>
            <BreadcrumbItem active="true">
              This page
            </BreadcrumbItem>
          </Breadcrumb>
        </Scene>
      </Stage>
    </Section>
  )
}
