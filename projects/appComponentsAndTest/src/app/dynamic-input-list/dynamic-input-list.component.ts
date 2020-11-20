import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormArray,
  FormControl,
  ValidatorFn,
} from '@angular/forms';

/**
 * https://appdividend.com/2018/10/03/angular-ngmodel-directive-example-tutorial/
 */

@Component({
  selector: 'app-dynamic-input-list',
  templateUrl: './dynamic-input-list.component.html',
  styleUrls: ['./dynamic-input-list.component.scss'],
})
export class DynamicInputListComponent implements OnInit {
  ordersForm: FormGroup;

  ordersData = [
    { id: 1, name: 'order 1' },
    { id: 2, name: 'order 2' },
    { id: 3, name: 'order 3' },
    { id: 4, name: 'order 4' },
  ];

  /**
   * get the orders control group as a FormArray
   */
  get ordersFormArray(): FormArray {
    return this.ordersForm.controls.orders as FormArray;
  }

  numberList = ['1', '2', '3'];

  client = { userName: 'toto', petName: 'minou' };

  /**
   *
   * @param formBuilder
   */
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.ordersForm = this.formBuilder.group({
      orders: new FormArray([]),
    });

    this.addTextboxes();
  }

  addTextboxes() {
    this.ordersData.forEach(() =>
      this.ordersFormArray.push(new FormControl(''))
    );
  }

  submit() {
    const selectedOrderIds = this.ordersForm.value.orders
      .map((checked, i) => (checked ? this.ordersData[i].id : null))
      .filter((v) => v !== null);
    console.log(selectedOrderIds);
  }
}
