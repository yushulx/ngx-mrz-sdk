import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LazyaComponent } from './lazya.component';

const routes: Routes = [{ path: '', component: LazyaComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LazyaRoutingModule { }
