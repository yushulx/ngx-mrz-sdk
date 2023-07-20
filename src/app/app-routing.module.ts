import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
// import { MrzReaderComponent } from './mrz-reader/mrz-reader.component';
// import { MrzScannerComponent } from './mrz-scanner/mrz-scanner.component';
import { FormOneComponent } from './modulea/form-one/form-one.component';
import { FormTwoComponent } from './moduleb/form-two/form-two.component';
const routes: Routes = [
  { path: '', component: ProductListComponent },
      { path: 'mrz-reader', component: FormOneComponent },
      { path: 'mrz-scanner', component: FormTwoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
