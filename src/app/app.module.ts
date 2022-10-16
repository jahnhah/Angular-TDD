import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserRegistrationComponent } from './user/features/user-registration/user-registration.component';
import { UserAuthenticationComponent } from './user/features/user-authentication/user-authentication.component';
import { LoginFormComponent } from './user/ui/login-form/login-form.component';
import { RegistrationFormComponent } from './user/ui/registration-form/registration-form.component';
import { VerificationFormComponent } from './user/ui/verification-form/verification-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatSliderModule } from '@angular/material/slider';



@NgModule({
  declarations: [
    AppComponent,
    UserRegistrationComponent,
    UserAuthenticationComponent,
    LoginFormComponent,
    RegistrationFormComponent,
    VerificationFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
    MatSliderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
