import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { CountCheckPage } from '../pages/count-check/count-check';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { LoginStdPage } from '../pages/login-std/login-std';
import { StudentShowSubPage } from '../pages/student-show-sub/student-show-sub';
import { HomeTeacherPage } from '../pages/home-teacher/home-teacher';
import { HomeStudentPage } from '../pages/home-student/home-student';
import { StudentShowScorePage } from '../pages/student-show-score/student-show-score';
import { AuthenServiceProvider } from '../providers/authen-service/authen-service';
import { HttpClientModule } from '@angular/common/http';
import { StudentServicesProvider } from '../providers/student-services/student-services';
import { TeacherScoreStdPage } from '../pages/teacher-score-std/teacher-score-std';
import { TeacherServiceProvider } from '../providers/teacher-service/teacher-service';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginStdPage,
    HomeTeacherPage,
    CountCheckPage,
    HomeStudentPage,
    StudentShowSubPage,
    StudentShowScorePage,
    TeacherScoreStdPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginStdPage,
    HomeTeacherPage,
    CountCheckPage,
    HomeStudentPage,
    StudentShowSubPage,
    StudentShowScorePage,
    TeacherScoreStdPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthenServiceProvider,
    BarcodeScanner,
    StudentServicesProvider,
    TeacherServiceProvider
  ]
})
export class AppModule {}
