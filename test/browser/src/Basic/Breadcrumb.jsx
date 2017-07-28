import { Section, Stage, Scene, Code, Narrative } from '../components.jsx'

import Breadcrumb from '../../../../lib/Breadcrumb.jsx'
import BreadcrumbItem from '../../../../lib/BreadcrumbItem.jsx'

export default function () {
  return (
    <Section title="Breadcrumbs">
      <Narrative>
        <p>Indicate the current page’s location within a navigational hierarchy. Separators are automatically added in CSS through <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/::before"><code class="highlighter-rouge">::before</code></a> and <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/content"> <code class="highlighter-rouge">content</code></a>.</p>
      </Narrative>
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
          <Code>
{`<Breadcrumb>
  <BreadcrumbItem>
    <a href="#">Home</a>
  </BreadcrumbItem>
  <BreadcrumbItem>
    <a href="#">Section</a>
  </BreadcrumbItem>
  <BreadcrumbItem active="true">
    This page
  </BreadcrumbItem>
</Breadcrumb>`}
          </Code>
        </Scene>
      </Stage>
    </Section>
  )
}
