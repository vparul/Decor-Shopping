import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material.module';
import { BrowserModule } from '@angular/platform-browser';
import { IvyCarouselModule } from 'angular-responsive-carousel';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MaterialModule,
    BrowserModule,
    IvyCarouselModule

  ],
  exports:[
    MaterialModule,
    BrowserModule,
    IvyCarouselModule

  ]
})
export class SharedModule { }
