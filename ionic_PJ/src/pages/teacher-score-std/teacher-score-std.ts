import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';
import { TeacherServiceProvider } from '../../providers/teacher-service/teacher-service';
import { AlertMessage } from '../../models/msg';

@IonicPage()
@Component({
  selector: 'page-teacher-score-std',
  templateUrl: 'teacher-score-std.html',
})
export class TeacherScoreStdPage {
  alertMSG: AlertMessage;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    private alertCtrl: AlertController,
    private loadingCtrl: LoadingController,
    private teacherServer: TeacherServiceProvider) {
  }


  scoreStd(fromScore) {

    let std_code = this.navParams.get('std_code');
    let chk_sub = this.navParams.get('chk_sub');
    let ss_score = fromScore.ss_score
    let ss_mid = fromScore.ss_mid;
    let ss_fn = fromScore.ss_fn

    console.log(std_code, chk_sub, ss_score, ss_mid, ss_fn);

    let loader = this.loadingCtrl.create({
      content: "กำลังบันทึกข้อมูล....."
    });

    loader.present();

    this.teacherServer.teacherScore(ss_score, ss_mid, ss_fn, std_code, chk_sub).subscribe(
      (alertMSG: AlertMessage) => {
        this.alertMSG = alertMSG;

        if (this.alertMSG.status == 'ok') {
          let alert = this.alertCtrl.create({
            title: this.alertMSG.message,
            buttons: ['ตกลง']
          });
          alert.present();

          //this.navCtrl.setRoot(HomePage);
          this.navCtrl.pop();
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
    console.log('ionViewDidLoad TeacherScoreStdPage');
  }

}
