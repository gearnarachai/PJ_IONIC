import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AlertMessage } from '../../models/msg';
import { Subject } from '../../models/subject';
import { Observable } from 'rxjs/Observable';
import { conutCheck } from '../../models/countchech';
import { Student } from '../../models/student';

@Injectable()
export class AuthenServiceProvider {

  apiUrlStd: string = "http://stdweb.kru.ac.th/58123250101/API_PJ/crud_student.php";
  apiUrlTch: string = "http://stdweb.kru.ac.th/58123250101/API_PJ/crud_teacher.php";
  apiUrlCheck: string = "http://stdweb.kru.ac.th/58123250101/API_PJ/crud_check.php";

  constructor(public http: HttpClient) {
    console.log('Hello AuthenServiceProvider Provider');
  }


  loginStd(std_code: string, std_pass: string): Observable<AlertMessage> {
    const header = { 'Content-Type': 'application/json' };
    let data = {
      'cmd': 'login',
      'std_code': std_code,
      'std_pass': std_pass
    };
    return this.http.post<AlertMessage>(this.apiUrlStd, data, { headers: header })
  }

  loginTch(tch_code: string, tch_pass: string): Observable<AlertMessage> {

    const header = { 'Content-Type': 'application/json' };
    let data = {
      'cmd': 'login',
      'tch_code': tch_code,
      'tch_pass': tch_pass
    };
    return this.http.post<AlertMessage>(this.apiUrlTch, data, { headers: header })

  }

  getSubData(tch_code: string): Observable<Subject[]> {
    const header = { 'Content-Type': 'application/json' };
    let data = {
      'cmd': 'subject',
      'tch_code': tch_code
    };
    return this.http.post<Subject[]>(this.apiUrlTch, data, { headers: header })
  }


  conutCheck(chk_sub: string): Observable<conutCheck[]> {
    const header = { 'Content-Type': 'application/json' };
    let data = {
      'cmd': 'countcheck',
      'chk_sub': chk_sub

    };
    return this.http.post<conutCheck[]>(this.apiUrlCheck, data, { headers: header })
  }

  getSubStd(std_code: string): Observable<Student[]> {
    const header = { 'Content-Type': 'application/json' };
    let data = {
      'cmd': 'selectSub',
      'std_code': std_code

    };
    return this.http.post<Student[]>(this.apiUrlStd, data, { headers: header })
  }
}
