import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material.module';
import { BrowserModule } from '@angular/platform-browser';
import { IvyCarouselModule } from 'angular-responsive-carousel';
import { AnimatedHeadingComponent } from './animated-heading/animated-heading.component';
@NgModule({
  declarations: [AnimatedHeadingComponent],
  imports: [
    CommonModule,
    MaterialModule,
    BrowserModule,
    IvyCarouselModule
  ],
  exports:[
    MaterialModule,
    BrowserModule,
    IvyCarouselModule,
    AnimatedHeadingComponent
  ]
})
export class SharedModule { }
