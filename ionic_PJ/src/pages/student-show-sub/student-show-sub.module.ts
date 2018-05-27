import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StudentShowSubPage } from './student-show-sub';

@NgModule({
  declarations: [
    StudentShowSubPage,
  ],
  imports: [
    IonicPageModule.forChild(StudentShowSubPage),
  ],
})
export class StudentShowSubPageModule {}
