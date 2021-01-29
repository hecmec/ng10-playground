import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-parent1',
  templateUrl: './parent1.component.html',
  styleUrls: ['./parent1.component.scss'],
})
export class Parent1Component implements OnInit, OnChanges {
  @Input() myDataTree: any;

  title = 'Parent1Component';

  name: string;

  constructor(private parent: AppComponent) {}

  ngOnInit(): void {
    console.log('Parent1Component.ngOnInit()');

    // this will generate ExpressionChangedAfterItHasBeenCheckedError
    // this.parent.title = 'updated text from p1';
  }

  ngOnChanges(): void {
    console.log('Parent1Component.ngOnChanges()');

    this.name = this.myDataTree.parentObj.parentName;

    // ExpressionChangedAfterItHasBeenCheckedError
    //this.parent.title = 'updated text from p1 ' + Date.now();
  }
}
