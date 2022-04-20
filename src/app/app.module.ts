import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { HomeComponent } from './home/home.component';
import { FeaturesComponent } from './features/features.component';
import { LogInComponent } from './log-in/log-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from 'angularfire2';
import { environment } from 'src/environments/environment';

import { HttpClientModule } from '@angular/common/http';

const routes: Routes=[
  {path: '', component:HomeComponent, pathMatch: "full"},
  {path: 'features', component: FeaturesComponent, pathMatch: "full"},
  {path: 'logIn', component: LogInComponent, pathMatch: "full"},
  {path:'signUp', component: SignUpComponent, pathMatch: "full"}
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FeaturesComponent,
    LogInComponent,
    SignUpComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatDialogModule,
    RouterModule.forRoot(routes),
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
