import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { StudentServicesProvider } from '../../providers/student-services/student-services';
import { Student } from '../../models/Student';
import { Subscription } from 'rxjs/Subscription';

/**
 * Generated class for the StudentShowScorePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-student-show-score',
  templateUrl: 'student-show-score.html',
})
export class StudentShowScorePage {

  data: any;
  subscription: Subscription;
  stdScoreList: any;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public studentServer: StudentServicesProvider) {
  }



  getData() {
    let std_code = this.navParams.get('ss_std');
    let sub_id = this.navParams.get('ss_sub');
    //this.data = "asdasd",std_code;
    console.log(sub_id, " : ", std_code);
    this.subscription = this.studentServer.getScoreStd(std_code, sub_id).subscribe(
      (stdScoreList: Student[]) => this.stdScoreList = stdScoreList

    );
  }

  ionViewWillEnter() {
    this.getData();
  }


  ionViewDidLoad() {

    console.log('ionViewDidLoad StudentShowScorePage');
  }

}
