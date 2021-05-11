import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-expression',
  templateUrl: './expression.component.html',
  styleUrls: ['./expression.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExpressionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
