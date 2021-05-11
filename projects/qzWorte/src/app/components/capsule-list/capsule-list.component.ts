import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-capsule-list',
  templateUrl: './capsule-list.component.html',
  styleUrls: ['./capsule-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CapsuleListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
