import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { Store } from 'store';

import { AuthModule } from '../auth/auth.module';

import { AppComponent } from './containers/app/app.component';
import { AppHeaderComponent } from './components/app-header/app-header.component';
import { AppNavComponent } from './components/app-nav/app-nav.component';
import { HealthModule } from '../health/health.module';

export const ROUTES: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'schedule' }
];

@NgModule({
  imports: [
    BrowserModule,
    AuthModule,
    HealthModule,
    RouterModule.forRoot(ROUTES)
  ],
  declarations: [
    AppComponent,
    AppHeaderComponent,
    AppNavComponent
  ],
  providers: [
    Store
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}