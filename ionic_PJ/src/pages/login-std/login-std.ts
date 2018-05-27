import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';
import { AuthenServiceProvider } from '../../providers/authen-service/authen-service';
import { AlertMessage } from '../../models/msg';
import { HomeStudentPage } from '../home-student/home-student';
import { HomeTeacherPage } from '../home-teacher/home-teacher';

@IonicPage()
@Component({
  selector: 'page-login-std',
  templateUrl: 'login-std.html',
})
export class LoginStdPage {
  alertMSG: AlertMessage;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    private alertCtrl: AlertController,
    private loadingCtrl: LoadingController,
    private authenServiceProvider: AuthenServiceProvider) {
  }

  loginStd(fromLogin) {

    console.log(status);

    let std_code = fromLogin.std_code;
    let std_pass = fromLogin.std_pass

    let loader = this.loadingCtrl.create({
      content: "กำลังบันทึกข้อมูล....."
    });

    loader.present();

    this.authenServiceProvider.loginStd(std_code, std_pass).subscribe(
      (alertMSG: AlertMessage) => {
        this.alertMSG = alertMSG;

        if (this.alertMSG.status == 'ok') {
          let alert = this.alertCtrl.create({
            title: this.alertMSG.message,
            buttons: ['ตกลง']
          });
          alert.present();

          //this.navCtrl.setRoot(HomePage);
          this.navCtrl.setRoot(HomeStudentPage, { std_code: std_code });
        } else {
          let alert = this.alertCtrl.create({
            title: this.alertMSG.message,
            buttons: ['ตกลง']
          });
          alert.present();
        }

      }, (error) => {
        console.log(error);
        loader.dismiss();
      }, () => {
        loader.dismiss();
      });
  }



  loginTch(fromLogin) {

    console.log(status);

    let tch_code = fromLogin.tch_code;
    let tch_pass = fromLogin.tch_pass

    let loader = this.loadingCtrl.create({
      content: "กำลังบันทึกข้อมูล....."
    });

    loader.present();

    this.authenServiceProvider.loginTch(tch_code, tch_pass).subscribe(
      (alertMSG: AlertMessage) => {
        this.alertMSG = alertMSG;

        if (this.alertMSG.status == 'ok') {
          let alert = this.alertCtrl.create({
            title: this.alertMSG.message,
            buttons: ['ตกลง']
          });
          alert.present();

          this.navCtrl.setRoot(HomeTeacherPage, { tch_code: tch_code });


        } else {
          let alert = this.alertCtrl.create({
            title: this.alertMSG.message,
            buttons: ['ตกลง']
          });
          alert.present();
        }

      }, (error) => {
        console.log(error);
        loader.dismiss();
      }, () => {
        loader.dismiss();
      });


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginStdPage');
  }

}
