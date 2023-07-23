import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LazybComponent } from './lazyb.component';

const routes: Routes = [{ path: '', component: LazybComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LazybRoutingModule { }
