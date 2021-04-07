import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-status-card',
  templateUrl: './status-card.component.html',
  styleUrls: ['./status-card.component.scss']
})
export class StatusCardComponent implements OnInit {
@Input() statusCard;
on=true;
  constructor() { }

  ngOnInit(): void {
  }

}
