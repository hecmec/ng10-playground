import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'LifecycleHooks';

  text = 'new app comp text';

  public dataTree: any = {};

  ngOnInit(): void {
    console.log('AppComponent.ngOnInit()');

    this.dataTree = {
      parentObj: {
        parentName: 'Garfield',
        parentAge: 10,

        childObj: {
          childName: 'Snoopy',
          childAge: 50,
        },
      },
    };
  }
}
