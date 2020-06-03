import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-how-to-order',
  templateUrl: './how-to-order.component.html',
  styleUrls: ['./how-to-order.component.less']
})
export class HowToOrderComponent implements OnInit {

  @Input() title: string;
  @Input() subTitle: string;

  constructor() { }

  ngOnInit(): void {
  }

}
