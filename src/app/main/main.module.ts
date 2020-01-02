import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './components/layout/layout.component';
import { HeaderComponent } from './components/header/header.component';
import { SharedModule } from "./shared/shared.module";


@NgModule({
  declarations: [LayoutComponent, HeaderComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    LayoutComponent,
    HeaderComponent
  ]
})
export class MainModule { }
