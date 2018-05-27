import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Student } from '../../models/student';



@Injectable()
export class StudentServicesProvider {

  apiUrlStd: string = "http://stdweb.kru.ac.th/58123250101/API_PJ/crud_student.php";

  constructor(public http: HttpClient) {
    console.log('Hello StudentServicesProvider Provider');
  }


  getScoreStd(ss_std: string, ss_sub: string): Observable<Student[]> {
    const header = { 'Content-Type': 'application/json' };
    let data = {
      'cmd': 'selectScore',
      'std_code': ss_std,
      'sub_id': ss_sub

    };
    return this.http.post<Student[]>(this.apiUrlStd, data, { headers: header })
  }


  getStdData(std_code: string): Observable<Student[]> {
    const header = { 'Content-Type': 'application/json' };
    let data = {
      'cmd': 'select',
      'std_code': std_code

    };
    return this.http.post<Student[]>(this.apiUrlStd, data, { headers: header })
  }


}
