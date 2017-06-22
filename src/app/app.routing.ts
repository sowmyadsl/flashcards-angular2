import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { SplashPageComponent } from './splash-page/splash-page.component';
import { TermListComponent } from './term-list/term-list.component';
import { TermDetailComponent } from './term-detail/term-detail.component';
import { AdminComponent } from './admin/admin.component';
import { AuthComponent } from './auth/auth.component';

const appRoutes: Routes = [
  {
    path: '',
    component: SplashPageComponent
  },
  {
    path:'About',
    component: AboutComponent
  },
  {
    path:'Terms',
    component:TermListComponent
  },
  {
    path:'Terms/:id',
    component: TermDetailComponent
  },
  {
    path:'Admin',
    component: AuthComponent
  },
  {
    path:'Edit',
    component: AuthComponent
  },
  {
    path:'Ruby',
    component: TermListComponent
  },
  {
    path:'JavaScript',
    component: TermListComponent
  },
  {
    path:':subject/:id',
    component: TermDetailComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
