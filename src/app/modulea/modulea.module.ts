import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormOneComponent } from './form-one/form-one.component';
import { DynamsoftModule } from '../dynamsoft/dynamsoft.module';


@NgModule({
  declarations: [
    FormOneComponent
  ],
  imports: [
    CommonModule,
    DynamsoftModule,
  ],
  exports: [
    FormOneComponent
  ]
})
export class ModuleaModule { }
