import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { MainLayoutComponent } from './core/main-layout/main-layout.component';
import { NoContentComponent } from './core/no-content-component/no-content.component';
import { AuthDetectService } from './core/service/auth-detect.service';

export const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    canActivate: [ AuthDetectService ],
    children: [
      {
        path: '',
        redirectTo: 'work',
        pathMatch: 'full',
      },
      {
        path: 'work',
        loadChildren: './core/work/work.module#WorkModule',
      },
      {
        path: 'home',
        loadChildren: './core/home/home.module#HomeModule',
      }
    ]
  },
  {
    path: '**',
    component: NoContentComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes, { useHash: true });
