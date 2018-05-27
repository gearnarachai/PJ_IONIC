import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StudentShowScorePage } from './student-show-score';

@NgModule({
  declarations: [
    StudentShowScorePage,
  ],
  imports: [
    IonicPageModule.forChild(StudentShowScorePage),
  ],
})
export class StudentShowScorePageModule {}
