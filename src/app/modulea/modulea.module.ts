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
    DynamsoftModule.forRoot({ 
      licenseKey: "DLS2eyJoYW5kc2hha2VDb2RlIjoiMjAwMDAxLTE2NDk4Mjk3OTI2MzUiLCJvcmdhbml6YXRpb25JRCI6IjIwMDAwMSIsInNlc3Npb25QYXNzd29yZCI6IndTcGR6Vm05WDJrcEQ5YUoifQ==", 
      dceResourcePath: "assets/dynamsoft-camera-enhancer", 
      dlrResourcePath: "assets/dynamsoft-label-recognizer"}),
  ],
  exports: [
    FormOneComponent
  ]
})
export class ModuleaModule { }
