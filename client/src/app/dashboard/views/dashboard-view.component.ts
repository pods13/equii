import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';

@Component({
  selector: 'eq-dashboard-view',
  templateUrl: './dashboard-view.component.html',
  styleUrls: ['./dashboard-view.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardViewComponent implements OnInit {

  data = [
    {
      name: 'Germany',
      value: 8940000
    },
    {
      name: 'USA',
      value: 5000000
    },
    {
      name: 'France',
      value: 7200000
    },
    {
      name: 'Italy',
      value: 4500000
    },
    {
      name: 'Spain',
      value: 5730000
    }, {
      name: 'UK',
      value: 8200000
    }
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

}
