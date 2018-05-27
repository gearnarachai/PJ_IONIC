import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthenServiceProvider } from '../../providers/authen-service/authen-service';
import { Subscription } from 'rxjs/Subscription';
import { conutCheck } from '../../models/countchech';
import { TeacherScoreStdPage } from '../../pages/teacher-score-std/teacher-score-std';

@IonicPage()
@Component({
  selector: 'page-count-check',
  templateUrl: 'count-check.html',
})
export class CountCheckPage {

  subscription: Subscription;
  conutCheckList: conutCheck[];
  data: any;
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public subjectServer: AuthenServiceProvider) {
  }


  score(id: string) {

    let chk_sub = this.navParams.get('chk_sub');
    let std_code = id;
    console.log("Teat", id);
    this.navCtrl.push(TeacherScoreStdPage, { std_code: std_code, chk_sub: chk_sub });

  }

  getData() {
    let chk_sub = this.navParams.get('chk_sub');
    this.data = "asdasd", chk_sub;
    this.subscription = this.subjectServer.conutCheck(chk_sub).subscribe(
      (conutCheckList: conutCheck[]) => this.conutCheckList = conutCheckList
    );
  }

  ionViewWillEnter() {
    this.getData();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CountCheckPage');
  }

}
