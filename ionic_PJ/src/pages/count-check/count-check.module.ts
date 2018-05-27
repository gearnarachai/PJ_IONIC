import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CountCheckPage } from './count-check';

@NgModule({
  declarations: [
    CountCheckPage,
  ],
  imports: [
    IonicPageModule.forChild(CountCheckPage),
  ],
})
export class CountCheckPageModule {}
