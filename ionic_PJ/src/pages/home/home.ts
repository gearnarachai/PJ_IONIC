import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {



  data: any;
  constructor(public navCtrl: NavController,
    public navParams: NavParams) {

  }

  /*
    getData(){
    let std_code = this.navParams.get('std_code'); console.log(".....",std_code);
    this.subscription = this.studentServer.getStbData(std_code).subscribe(
      (StudentList:Student[]) => this.StudentList = StudentList
    );
  }
*/

  /*
  getData(){
    let std_code = this.navParams.get('std_code');
    this.data = std_code;
    console.log(".....",std_code);
    this.subscription = this.studentServer.getStdData(std_code).subscribe(
      (StudentList:Student[]) => this.StudentList = StudentList
    );
  }
  
    ionViewWillEnter(){
      this.getData();
      
    }
  
    ionViewWillLeave(){
      this.subscription.unsubscribe();
    }*/
  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

}
