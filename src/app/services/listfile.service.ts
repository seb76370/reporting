import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Test } from '../interfaces/test.interface';

@Injectable({
  providedIn: 'root'
})
export class ListfileService {

  private dataUrl = './assets/datas.json';

  constructor(private http: HttpClient) { }

  getData(): Observable<Test[]> {
    return this.http.get<Test[]>(this.dataUrl);
  }

}
