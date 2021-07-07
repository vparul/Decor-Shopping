import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardModule } from './secure/dashboard/dashboard.module';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./secure/dashboard/dashboard.module').then(m => m.DashboardModule)
  }
];

@NgModule({
  imports: [DashboardModule,RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
