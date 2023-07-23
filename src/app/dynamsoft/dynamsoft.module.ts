import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxMrzReaderComponent } from './ngx-mrz-reader/ngx-mrz-reader.component';
import { NgxMrzScannerComponent } from './ngx-mrz-scanner/ngx-mrz-scanner.component';
import { MrzSdkServiceConfig } from './ngx-mrz-sdk.service';


@NgModule({
  declarations: [
    NgxMrzReaderComponent,
    NgxMrzScannerComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NgxMrzReaderComponent,
    NgxMrzScannerComponent
  ]
})
export class DynamsoftModule { 
  // constructor(@Optional() @SkipSelf() parentModule?: DynamsoftModule) {
  //   if (parentModule) {
  //     throw new Error(
  //       'GreetingModule is already loaded. Import it in the AppModule only');
  //   }
  // }

  static forRoot(config: MrzSdkServiceConfig): ModuleWithProviders<DynamsoftModule> {
    return {
      ngModule: DynamsoftModule,
      providers: [
        { provide: MrzSdkServiceConfig, useValue: config }
      ]
    };
  }
}
