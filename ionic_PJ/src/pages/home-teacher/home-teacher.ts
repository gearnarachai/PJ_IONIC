import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';
import { AuthenServiceProvider } from '../../providers/authen-service/authen-service';
import { Subject } from '../../models/subject';
import { Subscription } from 'rxjs/Subscription';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { AlertMessage } from '../../models/msg';
import { CountCheckPage } from '../../pages/count-check/count-check';
import { TeacherServiceProvider } from '../../providers/teacher-service/teacher-service';

@IonicPage()
@Component({
  selector: 'page-home-teacher',
  templateUrl: 'home-teacher.html',
})
export class HomeTeacherPage {


  SubjectList: Subject[];
  subscription: Subscription;
  alertMSG: AlertMessage;


  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public subjectServer: AuthenServiceProvider,
    private barcodeScanner: BarcodeScanner,
    private teacherServer: TeacherServiceProvider,
    private alertCtrl: AlertController,
    private loadingCtrl: LoadingController) {
  }


  scan(id: string) {
    let chk_sub = id;
    console.log(chk_sub);

    //console.log("คลิกๆๆ");
    //ถ้าเอา options ออกจะเป็นบาร์โค้ด
    let options = {
      formats: 'QR_CODE'
    }

    this.barcodeScanner.scan(options).then((barcodeData) => {
      let chk_std = barcodeData.text;
      let loader = this.loadingCtrl.create({
        content: "กำลังบันทึกข้อมูล....."
      });
      loader.present();
      this.teacherServer.checkStd(chk_sub, chk_std).subscribe(
        (alertMSG: AlertMessage) => {
          this.alertMSG = alertMSG;

          if (this.alertMSG.status == 'ok') {
            let alert = this.alertCtrl.create({
              title: this.alertMSG.message,

              buttons: ['ตกลง']
            });
            alert.present();

            //this.data = barcodeData.text;
            //this.navCtrl.setRoot(HomePage);
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

    }, (error) => {
      console.log(error);
    }
    );




  }

  countcheck(id: string) {
    let chk_sub = id;
    console.log(chk_sub);
    this.navCtrl.push(CountCheckPage, { chk_sub: chk_sub });
  }



  private getData() {
    let tch_code = this.navParams.get('tch_code');
    this.subscription = this.subjectServer.getSubData(tch_code).subscribe(
      (SubjectList: Subject[]) => this.SubjectList = SubjectList
    );
  }

  ionViewWillEnter() {
    this.getData();
  }

  ionViewWillLeave() {
    this.subscription.unsubscribe();
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad HomeTeacherPage');
  }

}
