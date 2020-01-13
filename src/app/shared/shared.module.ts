import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { TopMenuComponent } from "./top-menu/top-menu.component";
import { CounterComponent } from "./counter/counter.component";


@NgModule({
  declarations: [TopMenuComponent, CounterComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,

  ],
    exports: [
      FlexLayoutModule,
      TopMenuComponent,
      CounterComponent
    ]
})
export class SharedModule { }
