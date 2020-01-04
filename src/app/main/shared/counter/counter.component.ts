import { ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output, ChangeDetectorRef } from '@angular/core';
import {interval, Observable} from "rxjs";
import { map } from "rxjs/operators";
import { Date } from "./date";

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CounterComponent implements OnInit {

  @Output()
  counterState = new EventEmitter();
  date: Date = {
    days: 5,
    hours:10,
    minutes: 45,
    seconds: 5
};

  private circumference: number = 345.5;
  private step: number = this.circumference / 60;
  private dasharray = this.circumference;
  private dashoffset = {
    days: (this.circumference / 2) * -1 ,
    hours: (this.circumference / 100 * 59) * -1,
    minutes: (this.circumference / 100 * 25) * -1,
    seconds: (this.circumference / 100 * (100 - (this.date.seconds / (60/100)))) * -1
  };

  // private dashoffset: number = 0;
  private secondsTransition: string = '';

  constructor(private changeDetector: ChangeDetectorRef) { }

  ngOnInit() {
    this.timer()
  }

  private timer() {
    let timer: Observable<number> = interval(1000);

    timer.subscribe(
      num => {
        this.animate('seconds');

        if(this.date.seconds === 0) {
          this.animate('minutes');
          this.date.seconds = 60;
        }

        if(this.date.seconds === -1) {
        }
        if(this.date.minutes === 0) {
          this.date.minutes = 59;
          this.date.hours -= 1;
          this.animate('hours');
        }
      }
    );
  }

  private animate(place) {
    if(place === 'seconds') {
      this.date.seconds -= 1;
      this.dashoffset.seconds -= this.step;
    }
    else if (place === 'minutes') {
      this.dashoffset.seconds = 0;
      this.date.minutes -= 1;
      this.dashoffset.minutes -= this.step;
    }
    else if(place === 'hours') {
      this.dashoffset.hours -= this.step;
    }

    this.changeDetector.detectChanges();
  }

}
