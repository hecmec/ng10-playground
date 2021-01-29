import { Component, Input, OnInit } from '@angular/core';
import { Parent1Component } from '../parent1/parent1.component';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.scss'],
})
export class Child1Component implements OnInit {
  @Input() myDataTree: any;
  title = 'Child1Component';

  constructor(private parent: Parent1Component) {
    // this.parent.title = 'updated from child1'
  }

  ngOnInit(): void {}
}
