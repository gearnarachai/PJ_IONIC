import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthenServiceProvider } from '../../providers/authen-service/authen-service';
import { Subscription } from 'rxjs/Subscription';
import { Student } from '../../models/Student';
import { StudentShowScorePage } from '../student-show-score/student-show-score';

@IonicPage()
@Component({
  selector: 'page-student-show-sub',
  templateUrl: 'student-show-sub.html',
})
export class StudentShowSubPage {
  data: any;
  subscription: Subscription;
  SubjectList: any;


  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public subjectServer: AuthenServiceProvider) {
  }

  getData() {
    let std_code = this.navParams.get('std_code');
    this.data = "asdasd", std_code;
    //console.log("Teat",chk_sub);
    this.subscription = this.subjectServer.getSubStd(std_code).subscribe(
      (SubjectList: Student[]) => this.SubjectList = SubjectList
    );
  }


  showScore(std: string, sub: string) {
    let ss_std = std;
    let ss_sub = sub;
    console.log(ss_std);
    console.log(ss_sub);
    this.navCtrl.push(StudentShowScorePage, { ss_std: ss_std, ss_sub: ss_sub });
  }


  ionViewWillEnter() {
    this.getData();
  }

  ionViewDidLoad() {

    let std_code = this.navParams.get('std_code');

    console.log('ionViewDidLoad StudentShowSubPage', std_code);
  }

}
