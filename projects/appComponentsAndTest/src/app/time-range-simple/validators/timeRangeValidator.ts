import { FormControl, Validators, ValidatorFn } from '@angular/forms';

/**
* Validates a standard time

https://itnext.io/angular-creating-custom-validator-for-reactive-form-field-54d70057990a
 */
export function timeRangeValidator(control: FormControl): ValidatorFn {
  /*
  return:
    a {[key]: [value]} expression, if an error exists
    null if it’s valid
  */
  // if(!control.value) {
  //     return null;
  // }
  return null;
}
