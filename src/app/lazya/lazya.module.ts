import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MrzReaderComponent } from '../mrz-reader/mrz-reader.component';

import { LazyaRoutingModule } from './lazya-routing.module';
import { LazyaComponent } from './lazya.component';
import { DynamsoftModule } from '../dynamsoft/dynamsoft.module';


@NgModule({
  declarations: [
    LazyaComponent,
    MrzReaderComponent,
  ],
  imports: [
    CommonModule,
    LazyaRoutingModule,
    DynamsoftModule
  ]
})
export class LazyaModule { }
