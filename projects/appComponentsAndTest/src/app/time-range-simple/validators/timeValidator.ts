import {
  FormControl,
  Validators,
  ValidatorFn,
  AbstractControl,
} from '@angular/forms';
import { ChrTimeExtended } from '../classes/chr-time-extended.class';

/**
* Validates a standard time

https://itnext.io/angular-creating-custom-validator-for-reactive-form-field-54d70057990a
 */
export function timeValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    let error = null;

    if (control.value) {
      let val: string = control.value as string;
      let time = ChrTimeExtended.createFromHHmmString(val, true);
      if (!time) {
        error = {
          error_no_time: 'not a valid time',
        };
      } else {
        if (time.isTimeExceeding) {
          error = {
            error_time_exceeding: 'time is exceeding upper limit',
          };
        }
      }
    }

    return error;
  };
}
