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
    seconds: 15
};

  private dasharray: number = 345.5;
  private dashoffset: number = 0;

  constructor(private changeDetector: ChangeDetectorRef) { }

  ngOnInit() {

    // this.timer();
  }

  private timer() {
    let timer: Observable<number> = interval(1000);
    timer.subscribe(
      num => {
        this.date.seconds -= 1;
        this.animateSeconds();
        if(this.date.seconds === -1) {
          this.date.seconds = 59;
          this.date.minutes -= 1;
          this.animateMinutes();
        }
        if(this.date.minutes === -1) {
          this.date.minutes = 59;
          this.date.hours -= 1;
          this.animateHours();
        }
        this.changeDetector.detectChanges();
      }
    );
  }

  private animateSeconds() {}
  private animateMinutes() {}
  private animateHours() {}

}
