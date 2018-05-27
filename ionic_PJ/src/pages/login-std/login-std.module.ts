import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LoginStdPage } from './login-std';

@NgModule({
  declarations: [
    LoginStdPage,
  ],
  imports: [
    IonicPageModule.forChild(LoginStdPage),
  ],
})
export class LoginStdPageModule {}
