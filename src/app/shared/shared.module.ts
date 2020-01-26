import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { TopMenuComponent } from "./top-menu/top-menu.component";
import { CounterComponent } from "./counter/counter.component";
import { VideoBlockComponent } from './video-block/video-block.component';


@NgModule({
  declarations: [TopMenuComponent, CounterComponent, VideoBlockComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,

  ],
  exports: [
    FlexLayoutModule,
    TopMenuComponent,
    CounterComponent,
    VideoBlockComponent
  ]
})
export class SharedModule { }
