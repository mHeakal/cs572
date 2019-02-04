import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { debounceTime } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient) { }

  isuserexist(body){
    return this.http.post('http://localhost:2000/signup/isuserexist/',  body);
  }
}
