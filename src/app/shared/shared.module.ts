import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { TopMenuComponent } from './top-menu/top-menu.component';
import { CounterComponent } from './counter/counter.component';
import { VideoBlockComponent } from './video-block/video-block.component';
import { AdvantagesComponent } from './advantages/advantages.component';
import { CallbackBtnComponent } from './callback-btn/callback-btn.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { HowToOrderComponent } from './how-to-order/how-to-order.component';
import { FormComponent } from './form/form.component';
import { MatInputModule } from '@angular/material/input';


@NgModule({
  declarations: [TopMenuComponent,
    CounterComponent,
    VideoBlockComponent,
    AdvantagesComponent,
    CallbackBtnComponent,
    ReviewsComponent,
    HowToOrderComponent,
    FormComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatInputModule

  ],
  exports: [
    FlexLayoutModule,
    TopMenuComponent,
    CounterComponent,
    VideoBlockComponent,
    AdvantagesComponent,
    CallbackBtnComponent,
    ReviewsComponent,
    HowToOrderComponent,
    FormComponent,
    MatInputModule
  ]
})
export class SharedModule { }
