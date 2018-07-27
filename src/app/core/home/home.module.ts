import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeFirstComponent } from './home-first/home-first.component';
import { HomeSecondComponent } from './home-second/home-second.component';
import { HomeThirdComponent } from './home-third/home-third.component';
import { routing } from './home-routing.module';
import { HomeComponent } from './home/home.component';

@NgModule({
  imports: [
    CommonModule,
    routing,
  ],
  declarations: [
    HomeFirstComponent,
    HomeSecondComponent,
    HomeThirdComponent,
    HomeComponent
  ]
})
export class HomeModule { }
