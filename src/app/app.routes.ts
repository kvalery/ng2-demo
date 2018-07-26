import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { MainLayoutComponent } from './core/main-layout/main-layout.component';
import { NoContentComponent } from './core/no-content-component/no-content.component';

export const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
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

//
// {
//   path: '',
//     component: MainLayoutComponent,
//   children: [
//   {
//     path: '',
//     redirectTo: 'dashboard',
//     pathMatch: 'full',
//   },
//   {
//     path: 'audit-log',
//     loadChildren: './pages/+audit-log/audit-log.module#AuditLogModule',
//   },
// ]
// },
