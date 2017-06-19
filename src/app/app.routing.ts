import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { SplashPageComponent } from './splash-page/splash-page.component';
import { AdminComponent } from './admin/admin.component';
import { TermListComponent } from './term-list/term-list.component';
import { TermDetailComponent } from './term-detail/term-detail.component';

const appRoutes: Routes = [
  {
    path: '',
    component: SplashPageComponent
  },
  {
    path:'about',
    component: AboutComponent
  },
  {
    path:'admin',
    component:AdminComponent
  },
  {
    path:'terms',
    component:TermListComponent
  },
  {
    path:'terms/:id',
    component: TermDetailComponent
  },
  {
    path:'ruby',
    component: TermListComponent
  },
  {
    path:'javascript',
    component: TermListComponent
  }
 ];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
