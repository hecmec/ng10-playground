import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-material-test',
  templateUrl: './material-test.component.html',
  styleUrls: ['./material-test.component.scss'],
})
export class MaterialTestComponent implements OnInit {
  public title: string = 'my Title';

  constructor() {}

  ngOnInit(): void {}
}
