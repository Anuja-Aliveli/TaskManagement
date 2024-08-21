import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-statusCardCount',
  templateUrl: './statusCardCount.component.html',
  styleUrls: ['./statusCardCount.component.css'],
})
export class StatusCardCountComponent implements OnInit {
  @Input() cardText: string = '';
  @Input() cardIcon: string = '';
  @Input() cardColor: string = '';
  @Input() cardIconBackgroundColor: string = '';
  @Input() cardCountValue: string = '';
  @Input() cardTooltip: string = '';
  @Input() showIcon: boolean = false;
  @Input() showText: boolean = false;
  @Input() showCount: boolean = false;
  @Input() showTooltip: boolean = false;

  constructor() {}

  ngOnInit() {}
}
