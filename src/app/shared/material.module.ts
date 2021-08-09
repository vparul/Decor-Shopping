import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon'
import {MatMenuModule} from '@angular/material/menu';
import {MatBadgeModule} from '@angular/material/badge';

const MATERIAL_MODULES = [
  MatButtonModule,
  MatIconModule,
  MatMenuModule,
  MatBadgeModule
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ...MATERIAL_MODULES
  ],
  exports:[
   ...MATERIAL_MODULES
  ]
})
export class MaterialModule { }
