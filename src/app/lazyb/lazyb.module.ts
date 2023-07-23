import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MrzScannerComponent } from '../mrz-scanner/mrz-scanner.component';
import { LazybRoutingModule } from './lazyb-routing.module';
import { LazybComponent } from './lazyb.component';
import { DynamsoftModule } from '../dynamsoft/dynamsoft.module';


@NgModule({
  declarations: [
    LazybComponent,
    MrzScannerComponent
  ],
  imports: [
    CommonModule,
    LazybRoutingModule,
    DynamsoftModule,
  ]
})
export class LazybModule { }
