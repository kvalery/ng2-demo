import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { routing } from './work-routing.module';
import { WorkComponent } from './work.component';

@NgModule({
  imports: [
    CommonModule,
    routing,
  ],
  declarations: [
    WorkComponent
  ]
})
export class WorkModule { }
