import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MyFormComponent } from './my-form/my-form.component';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    MyFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    CommonModule,
    FormsModule,
    MyFormComponent,
    ReactiveFormsModule,
  ]
})
export class SharedModule { }
