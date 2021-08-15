import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardModule } from './secure/dashboard/dashboard.module';
import { SharedModule } from './shared/shared.module';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./secure/dashboard/dashboard.module').then(m => m.DashboardModule)
  }
];

@NgModule({
  imports: [DashboardModule,RouterModule.forRoot(routes), SharedModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
