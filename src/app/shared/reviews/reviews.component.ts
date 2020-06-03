import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.less']
})
export class ReviewsComponent implements OnInit {

  @Input() imagesSrc: string[];
  @Input() title: string;


  constructor() { }

  ngOnInit(): void {
  }

}
