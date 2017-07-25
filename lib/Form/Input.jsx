/* eslint react/prefer-stateless-function: 0 */

import Inferno from 'inferno';
import Component from 'inferno-component';
import classNames from 'classnames';
import { mapToCssModules } from '../utils';

const defaultProps = {
  el: 'p',
  type: 'text',
};

class Input extends Component {
  render() {
    const {
      className,
      cssModule,
      type,
      size,
      state,
      el,
      addon,
      static: staticInput,
      getRef,
      ...attributes
    } = this.props;

    const checkInput = ['radio', 'checkbox'].indexOf(type) > -1;

    const fileInput = type === 'file';
    const textareaInput = type === 'textarea';
    const selectInput = type === 'select';
    let El = selectInput || textareaInput ? type : 'input';

    let formControlClass = 'form-control';

    if (staticInput) {
      formControlClass = `${formControlClass}-static`;
      El = el;
    } else if (fileInput) {
      formControlClass = `${formControlClass}-file`;
    } else if (checkInput) {
      if (addon) {
        formControlClass = null;
      } else {
        formControlClass = 'form-check-input';
      }
    }

    const classes = mapToCssModules(classNames(
      className,
      state ? `form-control-${state}` : false,
      size ? `form-control-${size}` : false,
      formControlClass
    ), cssModule);

    if (El === 'input') {
      attributes.type = type;
    }

    return (
      <El {...attributes} ref={getRef} className={classes} />
    );
  }
}

Input.defaultProps = defaultProps;

export default Input;
