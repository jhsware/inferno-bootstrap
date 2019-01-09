import { Section, Stage, Scene, Code, Narrative } from '../components'

import { Media, MediaBody,  Image } from '../../../../src/Media'

const svgData = "data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%2264%22%20height%3D%2264%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2064%2064%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_16831fcfed4%20text%20%7B%20fill%3A%23AAAAAA%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A10pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_16831fcfed4%22%3E%3Crect%20width%3D%2264%22%20height%3D%2264%22%20fill%3D%22%23EEEEEE%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2213.46875%22%20y%3D%2236.5%22%3E64x64%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E"

export default function () {
  return (
    <Section title="Media">
      <Narrative>
        <p>Use media objects to display content containing images.</p>
      </Narrative>
      <Stage>
        <Scene>
          <Media>
            <Image className="mr-2" src={svgData} alt="Generic placeholder image" />
            <MediaBody>
              <h4>A Nice Heading</h4>
              <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
            </MediaBody>
          </Media>
          
          <Code>
{`<Media>
  <Image className="mr-2" src={svgData} alt="Generic placeholder image" />
  <MediaBody>
    <h4>A Nice Heading</h4>
    <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
  </MediaBody>
</Media>`}
          </Code>
        </Scene>
      </Stage>
      <Narrative>
        <p>You can align media holders.</p>
      </Narrative>
      <Stage>
        <Scene>
          <Media className="mt-1">
            <Image top className="mr-2" href="#" src={svgData} alt="Generic placeholder image" />
            <MediaBody>
              <h4>Top aligned media</h4>
              <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
            </MediaBody>
          </Media>
          <Media className="mt-1">
            <Image middle className="mr-2" href="#" src={svgData} alt="Generic placeholder image" />
            <MediaBody>
              <h4>Middle aligned media</h4>
              <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
            </MediaBody>
          </Media>
          <Media className="mt-1">
            <Image bottom className="mr-2" href="#" src={svgData} alt="Generic placeholder image" />
            <MediaBody>
              <h4>Middle aligned media</h4>
              <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
            </MediaBody>
          </Media>
          
          <Code>
{`<Media className="mt-1">
  <Image top className="mr-2" href="#" src={svgData} alt="Generic placeholder image" />
  <MediaBody>
    <h4>Top aligned media</h4>
    <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
  </MediaBody>
  </Media>
  <Media className="mt-1">
  <Image middle className="mr-2" href="#" src={svgData} alt="Generic placeholder image" />
  <MediaBody>
    <h4>Middle aligned media</h4>
    <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
  </MediaBody>
  </Media>
  <Media className="mt-1">
  <Image bottom className="mr-2" href="#" src={svgData} alt="Generic placeholder image" />
  <MediaBody>
    <h4>Middle aligned media</h4>
    <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
  </MediaBody>
</Media>`}
          </Code>
        </Scene>
      </Stage>
      <Narrative>
        <p>You can stack your image vertically.</p>
      </Narrative>
      <Stage>
        <Scene>
          <div className="w-50">
            <Media vertical>
              <Image responsive="16by9" spacing="mb-2" src={svgData} alt="Generic placeholder image" />
              <MediaBody>
                <h4>A Nice Heading</h4>
                <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
              </MediaBody>
            </Media>
          </div>          
          <Code>
{`<Media vertical>
  <Image responsive="16by9" spacing="mb-2" src={svgData} alt="Generic placeholder image" />
  <MediaBody>
    <h4>A Nice Heading</h4>
    <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
  </MediaBody>
</Media>`}
          </Code>
        </Scene>
      </Stage>
    </Section>
  )
}
