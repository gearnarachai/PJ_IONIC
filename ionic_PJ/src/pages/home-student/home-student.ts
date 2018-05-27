import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Subscription } from 'rxjs/Subscription';
import { Student } from '../../models/Student';
import { StudentShowSubPage } from '../../pages/student-show-sub/student-show-sub';
import { StudentServicesProvider } from '../../providers/student-services/student-services';


@IonicPage()
@Component({
  selector: 'page-home-student',
  templateUrl: 'home-student.html',
})
export class HomeStudentPage {

  subscription: Subscription;
  stdList: Student[];
  data: any;
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public studentServer: StudentServicesProvider) {
  }


  getData() {
    let std_code = this.navParams.get('std_code');
    this.data = "asdasd", std_code;
    this.subscription = this.studentServer.getStdData(std_code).subscribe(
      (stdList: Student[]) => this.stdList = stdList
    );
  }


  showSub(id: string) {
    let std_code = id;
    console.log(std_code);
    this.navCtrl.push(StudentShowSubPage, { std_code: std_code });
  }


  ionViewWillEnter() {
    this.getData();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CountCheckPage');
  }
}
