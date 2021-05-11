import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-capsule-list-item',
  templateUrl: './capsule-list-item.component.html',
  styleUrls: ['./capsule-list-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CapsuleListItemComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
