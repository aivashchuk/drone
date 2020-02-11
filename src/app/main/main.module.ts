import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './components/layout/layout.component';
import { HeaderComponent } from './components/header/header.component';
import { SharedModule } from "../shared/shared.module";
import { TopPresentComponent } from './components/header/top-present/top-present.component';
import { HeaderBottomComponent } from './components/header/header-bottom/header-bottom.component';
import { PackItemsComponent } from './components/pack-items/pack-items.component';

@NgModule({
  declarations: [
    LayoutComponent,
    HeaderComponent,
    TopPresentComponent,
    HeaderBottomComponent,
    PackItemsComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    LayoutComponent,
    HeaderComponent,
    PackItemsComponent
  ]
})
export class MainModule { }
