import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeFirstComponent } from './home-first/home-first.component';
import { HomeSecondComponent } from './home-second/home-second.component';
import { HomeThirdComponent } from './home-third/home-third.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [{
    path: '', component: HomeComponent,
    children: [
      { path: 'home-first', component: HomeFirstComponent },
      { path: 'home-second', component: HomeSecondComponent },
      { path: 'home-third', component: HomeThirdComponent },
    ]
  },
];

export const routing = RouterModule.forChild(routes);
