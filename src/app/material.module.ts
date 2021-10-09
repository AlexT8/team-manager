import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatRippleModule} from '@angular/material/core';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  ],
  exports:[
    MatToolbarModule,
    MatIconModule,
    MatDividerModule,
    MatListModule,
    MatProgressSpinnerModule,
    MatRippleModule
  ]
})
export class MaterialModule { }
