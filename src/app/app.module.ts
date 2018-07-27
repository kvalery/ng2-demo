import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing } from './app.routes';

import { AppComponent } from './app.component';
import { MainLayoutComponent } from './core/main-layout/main-layout.component';
import { NoContentComponent } from './core/no-content-component/no-content.component';
import { NavigationComponent } from './core/navigation/navigation.component';
import { AuthorizationComponent } from './core/authorization/authorization.component';
import { WorkComponent } from './core/work/work.component';
import { AuthDetectService } from './core/service/auth-detect.service';

@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    NoContentComponent,
    NavigationComponent,
    AuthorizationComponent
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [AuthDetectService],
  bootstrap: [AppComponent]
})
export class AppModule { }
