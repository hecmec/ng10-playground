import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormArray,
  FormControl,
  ValidatorFn,
} from '@angular/forms';

/**
 * https://angular.io/guide/forms-overview
 *
 * I have a list of string values and want a form with an input for each
 *
 *
 */
@Component({
  selector: 'app-dynamic-input-list',
  templateUrl: './dynamic-input-list.component.html',
  styleUrls: ['./dynamic-input-list.component.scss'],
})
export class DynamicInputListComponent implements OnInit {
  ordersFormGroup: FormGroup;

  client = {
    userName: 'toto',
    petName: 'minou',
    ordersData: [
      { id: 1, name: 'order 1' },
      { id: 2, name: 'order 2' },
      { id: 3, name: 'order 3' },
      { id: 4, name: 'order 4' },
    ],
  };

  /**
   * get the orders control group as a FormArray
   */
  get ordersFormArray(): FormArray {
    // return this.ordersFormGroup.controls.orders as FormArray;
    // or by name
    return this.ordersFormGroup.get('orders') as FormArray;
  }

  /**
   *
   * @param formBuilder
   */
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.ordersFormGroup = this.formBuilder.group({
      clientName: '',
      orders: new FormArray([]),
    });

    this.addTextboxes();
  }

  addTextboxes() {
    this.client.ordersData.forEach(() =>
      this.ordersFormArray.push(new FormControl(''))
    );
  }

  addNewOrder() {
    this.ordersFormArray.push(this.getNewOrderGroup());
  }

  removeOrder(index: number) {
    this.ordersFormArray.removeAt(index);
  }

  getNewOrderGroup(): FormGroup {
    return this.formBuilder.group({
      id: 0,
      name: '',
    });
  }

  submit() {
    // const selectedOrderIds = this.ordersFormGroup.value.orders
    //   .map((value, i) => (value ? this.ordersData[i].id : null))
    //   .filter((v) => v !== null);
    // console.log(selectedOrderIds);
  }
}
