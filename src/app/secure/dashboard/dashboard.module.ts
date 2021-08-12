import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IntroductionComponent } from 'src/app/secure/introduction/introduction.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';
import { TopCategoriesComponent } from '../top-categories/top-categories.component';
import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
  },
];

@NgModule({
  declarations: [
    DashboardComponent,
    HeaderComponent,
    FooterComponent,
    TopCategoriesComponent,
    IntroductionComponent
  ],
  imports: [RouterModule.forChild(routes), SharedModule],
  exports: [RouterModule],
})
export class DashboardModule {}
