import { renderIntoElement } from './utils'

import Spinner from '../lib/Spinner';

 describe('Spinner', () => {
  it('should render .spinner-border markup', () => {
    const DOM = renderIntoElement(<Spinner />);

     expect(DOM.outerHTML).toBe(
      '<div class="spinner-border" role="status"><span class="sr-only">Loading...</span></div>'
    );
  });

   it('should render .spinner-grow markup', () => {
    const DOM = renderIntoElement(<Spinner type="grow" />);

     expect(DOM.outerHTML).toBe(
      '<div class="spinner-grow" role="status"><span class="sr-only">Loading...</span></div>'
    );
  });

   it('should render children', () => {
    const DOM = renderIntoElement(<Spinner>Waiting...</Spinner>);

     expect(DOM.outerHTML).toBe(
      '<div class="spinner-border" role="status"><span class="sr-only">Waiting...</span></div>'
    );
  });

   it('should pass additional classNames', () => {
    const DOM = renderIntoElement(<Spinner className="extra" />);

    expect(DOM.className.indexOf('extra')).not.toBe(-1);
    expect(DOM.className.indexOf('spinner-border')).not.toBe(-1);
  });
});
