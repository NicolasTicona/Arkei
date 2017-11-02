import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { LocalStorageModule } from 'angular-2-local-storage';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { HeaderComponent } from './main/header/header.component';
import { PublicationsComponent } from './main/publications/publications.component';
import { AuthComponent } from './auth/auth.component';
import { LoginComponent } from './login/login.component';
import { UsernameComponent } from './username/username.component';


import { AuthService } from './services/auth.service';
const routes: Routes = [
  {path: '', component: MainComponent },
  {path: 'auth', component: AuthComponent},
  {path: 'login', component: LoginComponent},
  {path: 'name', component: UsernameComponent},
  {path: '**', component: MainComponent}
  
]

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HeaderComponent,
    PublicationsComponent,
    AuthComponent,
    LoginComponent,
    UsernameComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes), 
    LocalStorageModule.withConfig({
      prefix: 'Arkei',
      storageType: 'localStorage'
    })
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
