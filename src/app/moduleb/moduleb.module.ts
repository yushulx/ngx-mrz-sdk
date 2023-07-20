import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormTwoComponent } from './form-two/form-two.component';
import { DynamsoftModule } from '../dynamsoft/dynamsoft.module';


@NgModule({
  declarations: [
    FormTwoComponent
  ],
  imports: [
    CommonModule,
    DynamsoftModule,
  ],
  exports: [
    FormTwoComponent
  ]
})
export class ModulebModule { }
