import {Component, Input, OnInit} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.less']
})
export class FormComponent implements OnInit {
  @Input() title: string;
  @Input() subTitle: string;

  name = new FormControl('', [
    Validators.required,
  ]);
  mail = new FormControl('', [
    Validators.email
  ]);
  phone = new FormControl('', [
    Validators.required
  ]);
  button = new FormControl();

  constructor() { }

  ngOnInit(): void {

  }

}
