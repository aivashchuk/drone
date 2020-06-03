import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-advantages',
  templateUrl: './advantages.component.html',
  styleUrls: ['./advantages.component.less']
})
export class AdvantagesComponent implements OnInit {
  @Input() title: string;
  @Input() subTitle: string;

  constructor() { }

  ngOnInit() {
  }

}
