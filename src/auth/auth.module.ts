import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { AngularFireModule, FirebaseAppConfig } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { SharedModule } from './shared/shared.module';

export const ROUTES: Routes = [{
    path: 'auth',
    children: [
        { path: '', pathMatch: 'full', redirectTo: 'login' },
        { path: 'login', loadChildren: './login/login.module#LoginModule' },
        { path: 'register', loadChildren: './register/register.module#RegisterModule' }
    ]
}];

export const firebaseConfig: FirebaseAppConfig = {
    apiKey: "AIzaSyAeBx08VEdrgK8J4PhRRVU7tHh4fswSX1M",
    authDomain: "fitness-app-d3eb6.firebaseapp.com",
    databaseURL: "https://fitness-app-d3eb6.firebaseio.com",
    projectId: "fitness-app-d3eb6",
    storageBucket: "fitness-app-d3eb6.appspot.com",
    messagingSenderId: "210212250971"
};

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forRoot(ROUTES),
        AngularFireModule.initializeApp(firebaseConfig),
        AngularFireAuthModule,
        AngularFireDatabaseModule,
        SharedModule.forRoot()
    ]
})
export class AuthModule { }