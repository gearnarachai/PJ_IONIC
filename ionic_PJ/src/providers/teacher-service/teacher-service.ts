import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AlertMessage } from '../../models/msg';
import { Observable } from 'rxjs/Observable';



/*
  Generated class for the TeacherServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class TeacherServiceProvider {

  apiUrlTch: string = "http://stdweb.kru.ac.th/58123250101/API_PJ/crud_teacher.php";
  apiUrlCheck: string = "http://stdweb.kru.ac.th/58123250101/API_PJ/crud_check.php";
  constructor(public http: HttpClient) {
    console.log('Hello TeacherServiceProvider Provider');
  }

  checkStd(chk_sub: string, chk_std: string): Observable<AlertMessage> {
    const header = { 'Content-Type': 'application/json' };
    let data = {
      'cmd': 'check',
      'chk_sub': chk_sub,
      'chk_std': chk_std
    };
    return this.http.post<AlertMessage>(this.apiUrlCheck, data, { headers: header })
  }



  teacherScore(ss_score: string, ss_mid: string, ss_fn: string, std_code: string, chk_sub: string): Observable<AlertMessage> {
    const header = { 'Content-Type': 'application/json' };
    let data = {
      'cmd': 'scoreStd',
      'std_code': std_code,
      'ss_sub': chk_sub,
      'ss_score': ss_score,
      'ss_mid': ss_mid,
      'ss_fn': ss_fn
    };
    return this.http.post<AlertMessage>(this.apiUrlTch, data, { headers: header })
  }


}
