import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopMenuComponent } from "./top-menu/top-menu.component";
import { CounterComponent } from './counter/counter.component';


@NgModule({
  declarations: [TopMenuComponent, CounterComponent],
  imports: [
    CommonModule
  ],
    exports: [
        TopMenuComponent,
        CounterComponent
    ]
})
export class SharedModule { }
