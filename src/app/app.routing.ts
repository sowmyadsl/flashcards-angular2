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
    path:'about',
    component: AboutComponent
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
    path:'admin',
    component: AuthComponent
  },
  {
    path:'ruby',
    component: TermListComponent
  },
  {
    path:'javascript',
    component: TermListComponent
  },
  {
    path:'ruby/:id',
    component: TermDetailComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
